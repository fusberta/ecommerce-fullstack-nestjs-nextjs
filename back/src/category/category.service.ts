import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObject } from './return-category.object'
import { CategoryDto } from './category.dto'
import { generateSlug } from 'src/utils/generate-slug'
import { Prisma } from '@prisma/client'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async update(id: number, dto: CategoryDto) {
		return this.prisma.category.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async create() {
		return this.prisma.category.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}

	async delete(id: number) {
		return this.prisma.category.delete({
			where: {
				id
			}
		})
	}

	async bySlug(slug: string) {
		return this.findCategory({ slug }, 'Category not found')
	}

	async byId(id: number) {
		return this.findCategory({ id }, 'Category not found')
	}

	private async findCategory(
		filter: Prisma.CategoryWhereUniqueInput,
		errorMessage: string
	) {
		const category = await this.prisma.category.findUnique({
			where: filter,
			select: returnCategoryObject
		})

		if (!category) {
			throw new NotFoundException(errorMessage)
		}

		return category
	}

	async getAll() {
		return this.prisma.category.findMany({
			select: returnCategoryObject
		})
	}
}
