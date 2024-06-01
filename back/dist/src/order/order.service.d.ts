import { PrismaService } from 'src/prisma.service';
import { OrderDto } from './order.dto';
import { EnumOrderItemStatus } from '@prisma/client';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<({
        items: ({
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
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderItemStatus;
        total: number;
        userId: number;
    })[]>;
    getByUserId(userId: number): Promise<({
        items: ({
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
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderItemStatus;
        total: number;
        userId: number;
    })[]>;
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderItemStatus;
        total: number;
        userId: number;
    }>;
    private findOrder;
    placeOrder(userId: number, dto: OrderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderItemStatus;
        total: number;
        userId: number;
    }>;
    updateOrderStatus(id: number, data: {
        status: EnumOrderItemStatus;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderItemStatus;
        total: number;
        userId: number;
    }>;
}
