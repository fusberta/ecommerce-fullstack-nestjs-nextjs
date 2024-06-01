/// <reference types="multer" />
import { ProductService } from './product.service';
import { GetAllProductDto } from './dto/get-all-products.dto';
import { UpdateProductWithFilesDto } from './dto/product-with-files.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(queryDto: GetAllProductDto): Promise<{
        products: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            images: string[];
            description: string;
            price: number;
            categoryId: number;
            userId: number;
            category: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
            };
            user: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                name: string;
                avatarPath: string;
                phone: string;
                address: string;
                isAdmin: boolean;
            };
            characteristics: {
                id: number;
                productId: number;
                name: string;
                value: string;
            }[];
            orderItems: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                quantity: number;
                price: number;
                orderId: number;
                productId: number;
            }[];
            reviews: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                rating: number;
                text: string;
                userId: number;
                productId: number;
            }[];
            _count: {
                category: number;
                user: number;
                characteristics: number;
                orderItems: number;
                reviews: number;
            };
        }[];
        length: number;
    }>;
    update(id: string, productDto: UpdateProductWithFilesDto, files: {
        images?: Express.Multer.File[];
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
    }>;
    getSimilar(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
            address: string;
            isAdmin: boolean;
        };
        characteristics: {
            id: number;
            productId: number;
            name: string;
            value: string;
        }[];
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }[];
        _count: {
            category: number;
            user: number;
            characteristics: number;
            orderItems: number;
            reviews: number;
        };
    }[]>;
    getById(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
            address: string;
            isAdmin: boolean;
        };
        characteristics: {
            id: number;
            productId: number;
            name: string;
            value: string;
        }[];
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }[];
        _count: {
            category: number;
            user: number;
            characteristics: number;
            orderItems: number;
            reviews: number;
        };
    }>;
    getProductBySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
            address: string;
            isAdmin: boolean;
        };
        characteristics: {
            id: number;
            productId: number;
            name: string;
            value: string;
        }[];
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }[];
        _count: {
            category: number;
            user: number;
            characteristics: number;
            orderItems: number;
            reviews: number;
        };
    }>;
    getProductByCategory(categorySlug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
            address: string;
            isAdmin: boolean;
        };
        characteristics: {
            id: number;
            productId: number;
            name: string;
            value: string;
        }[];
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }[];
        _count: {
            category: number;
            user: number;
            characteristics: number;
            orderItems: number;
            reviews: number;
        };
    }[]>;
    createProduct(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
    }>;
    deleteProduct(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        images: string[];
        description: string;
        price: number;
        categoryId: number;
        userId: number;
    }>;
}
