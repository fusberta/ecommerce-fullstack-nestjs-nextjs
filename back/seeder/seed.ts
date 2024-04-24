import { faker } from '@faker-js/faker'
import { PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'
import { generateSlug } from '../src/utils/generate-slug'
import { getRandomNumber } from '../src/utils/random-number'

dotenv.config()

const prisma = new PrismaClient()

const createFakeProducts = async (quantity: number) => {
	const products: Product[] = []

	for (let i = 0; i < quantity; i++) {
		const productName = faker.commerce.productName()
		const categoryName = faker.commerce.department()

		const product = await prisma.product.create({
			data: {
				name: productName,
				slug: generateSlug(productName),
				description: faker.commerce.productDescription(),
				price: +faker.commerce.price({ min: 1000, max: 9999, dec: 0 }),
				images: Array.from({ length: getRandomNumber(2, 6) }).map(() =>
					faker.image.url()
				),
				category: {
					create: {
						name: categoryName,
						slug: generateSlug(categoryName)
					}
				},
				reviews: {
					create: [
						{
							rating: faker.number.int({ min: 1, max: 5 }),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 10
								}
							}
						},
						{
							rating: faker.number.int({ min: 1, max: 5 }),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 10
								}
							}
						}
					]
				}
			}
		})

		products.push(product)
	}
	console.log(`Created ${products.length} products`)
}

async function main() {
	console.log('Start seeding...')
	await createFakeProducts(5)
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
