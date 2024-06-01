import { PrismaService } from 'src/prisma.service';
import { ReviewDto } from './review.dto';
import { ProductService } from 'src/product/product.service';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        text: string;
        userId: number;
        productId: number;
    }>;
    create(userId: number, dto: ReviewDto, productId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        text: string;
        userId: number;
        productId: number;
    }>;
    getAll(): Promise<{
        product: {
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
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
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
        rating: number;
        text: string;
        productId: number;
    }[]>;
    getAverageValueByProductId(productId: number): Promise<{
        rating: number;
    }>;
}
