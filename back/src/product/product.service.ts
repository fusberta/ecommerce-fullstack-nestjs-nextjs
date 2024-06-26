import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { ProductDto } from './dto/product.dto'
import { generateSlug } from 'src/utils/generate-slug'
import {
	returnProductObject,
	returnProductObjectFullest
} from './return-product.object'
import { PaginationService } from 'src/pagination/pagination.service'
import { EnumProductSort, GetAllProductDto } from './dto/get-all-products.dto'
import { CategoryService } from 'src/category/category.service'
import { convertToNumber } from 'src/utils/convert-to-number'
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService,
	) { }

	async update(id: number, data: ProductDto) {
		return this.prisma.product.update({
			where: { id },
			data: {
                ...data,
                slug: generateSlug(data.name),
            },
		});
	}

	async create() {
		const category = await this.prisma.category.findFirst({
			select: { id: true }
		});
	
		if (!category) {
			throw new Error('No category found');
		}

		const product = await this.prisma.product.create({
			data: {
				name: '',
				description: '',
				price: 0,
				slug: '',
				categoryId: category.id
			}
		})

		return product
	}

	async delete(id: number) {
		return this.prisma.product.delete({
			where: {
				id
			}
		})
	}

	async getSimilar(id: number) {
		const currentProduct = await this.byId(id)

		if (!currentProduct)
			throw new NotFoundException('Current product not found')

		const products = await this.prisma.product.findMany({
			where: {
				category: {
					name: currentProduct.category.name
				},
				NOT: {
					id: currentProduct.id
				}
			},
			orderBy: {
				createdAt: 'desc'
			},
			select: returnProductObject
		})

		return products
	}

	async bySlug(slug: string) {
		return this.findProduct({ slug }, 'Product not found')
	}

	async byCategory(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: returnProductObjectFullest
		})

		if (!products) {
			throw new NotFoundException('Products not found')
		}

		return products
	}

	async byId(id: number) {
		return this.findProduct({ id }, 'Product not found')
	}

	private async findProduct(
		filter: Prisma.ProductWhereUniqueInput,
		errorMessage: string
	) {
		const product = await this.prisma.product.findUnique({
			where: filter,
			select: returnProductObjectFullest
		})

		if (!product) {
			throw new NotFoundException(errorMessage)
		}

		return product
	}

	async getAll(dto: GetAllProductDto = {}) {

		const { perPage, skip } = this.paginationService.getPagination(dto)

		const filters = this.createFilter(dto)

		const products = await this.prisma.product.findMany({
			where: filters,
			orderBy: this.getSortOption(dto.sort),
			skip,
			take: perPage,
			select: returnProductObject
		})

		const updatedProducts = products.map(product => {
			const updatedImages = product.images.map(imagePath => {
				const webpPath = path.join(__dirname, '..', 'uploads', imagePath);
				const pngPath = webpPath.replace('.webp', '.png');
				if (fs.existsSync(webpPath)) {
					return imagePath; 
				} else if (fs.existsSync(pngPath)) {
					return imagePath.replace('.webp', '.png');
				} else {
					return imagePath.replace('.webp', '.jpg');
				}
			});
	
			return { ...product, images: updatedImages };
		});
		return {
			products,
			length: await this.prisma.product.count({
				where: filters
			})
		}
	}

	private createFilter(dto: GetAllProductDto): Prisma.ProductWhereInput {
		const filters: Prisma.ProductWhereInput[] = []

		if (dto.searchTerm) filters.push(this.getSearchTermFilter(dto.searchTerm))

		if (dto.ratings)
			filters.push(
				this.getRatingFilter(dto.ratings.split('|').map(rating => +rating))
			)

		if (dto.minPrice || dto.maxPrice)
			filters.push(
				this.getPriceFilter(
					convertToNumber(dto.minPrice),
					convertToNumber(dto.maxPrice)
				)
			)

		if (dto.categoryId) filters.push(this.getCategoryFilter(+dto.categoryId))

		return filters.length ? { AND: filters } : {}
	}

	private getSortOption(
		sort: EnumProductSort
	): Prisma.ProductOrderByWithRelationInput {
		if (sort === EnumProductSort.LOW_PRICE) return { price: 'asc' }
		if (sort === EnumProductSort.HIGH_PRICE) return { price: 'desc' }
		if (sort === EnumProductSort.OLDEST) return { createdAt: 'asc' }
		else return { createdAt: 'desc' }
	}

	private getSearchTermFilter(searchTerm: string): Prisma.ProductWhereInput {
		return {
			OR: [
				{
					category: {
						name: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					}
				},
				{
					name: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					description: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			]
		}
	}

	private getRatingFilter(ratings: number[]): Prisma.ProductWhereInput {
		return {
			reviews: {
				some: {
					rating: {
						in: ratings
					}
				}
			}
		}
	}

	private getPriceFilter(
		minPrice?: number,
		maxPrice?: number
	): Prisma.ProductWhereInput {
		let priceFilter: Prisma.IntFilter | undefined = undefined

		if (minPrice) {
			priceFilter = {
				...priceFilter,
				gte: minPrice
			}
		}

		if (maxPrice) {
			priceFilter = {
				...priceFilter,
				lte: maxPrice
			}
		}

		return {
			price: priceFilter
		}
	}

	private getCategoryFilter(categoryId: number): Prisma.ProductWhereInput {
		return {
			categoryId
		}
	}
}
