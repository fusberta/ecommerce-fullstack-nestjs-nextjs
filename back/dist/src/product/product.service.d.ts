import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { GetAllProductDto } from './dto/get-all-products.dto';
export declare class ProductService {
    private prisma;
    private paginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    update(id: number, data: ProductDto): Promise<{
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
    create(): Promise<{
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
    delete(id: number): Promise<{
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
    getSimilar(id: number): Promise<{
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
    bySlug(slug: string): Promise<{
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
    byCategory(categorySlug: string): Promise<{
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
    byId(id: number): Promise<{
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
    private findProduct;
    getAll(dto?: GetAllProductDto): Promise<{
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
    private createFilter;
    private getSortOption;
    private getSearchTermFilter;
    private getRatingFilter;
    private getPriceFilter;
    private getCategoryFilter;
}
