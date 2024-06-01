"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
const generate_slug_1 = require("../src/utils/generate-slug");
const random_number_1 = require("../src/utils/random-number");
dotenv.config();
const prisma = new client_1.PrismaClient();
const createFakeProducts = async (quantity) => {
    const products = [];
    for (let i = 0; i < quantity; i++) {
        const productName = faker_1.faker.commerce.productName();
        const categoryName = faker_1.faker.commerce.department();
        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: (0, generate_slug_1.generateSlug)(productName),
                description: faker_1.faker.commerce.productDescription(),
                price: +faker_1.faker.commerce.price({ min: 1000, max: 9999, dec: 0 }),
                images: Array.from({ length: (0, random_number_1.getRandomNumber)(2, 6) }).map(() => faker_1.faker.image.url()),
                category: {
                    create: {
                        name: categoryName,
                        slug: (0, generate_slug_1.generateSlug)(categoryName)
                    }
                },
                reviews: {
                    create: [
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 10
                                }
                            }
                        },
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 10
                                }
                            }
                        }
                    ]
                }
            }
        });
        products.push(product);
    }
    console.log(`Created ${products.length} products`);
};
async function main() {
    console.log('Start seeding...');
    await createFakeProducts(5);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map