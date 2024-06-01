/// <reference types="multer" />
import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
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
            orders: number;
            reviews: number;
            favorites: number;
        };
        email: string;
        password: string;
        avatarPath: string;
        phone: string;
        address: string;
        isAdmin: boolean;
        orders: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.EnumOrderItemStatus;
            total: number;
            userId: number;
        }[];
        favorites: {
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
        }[];
    }>;
    updateProfile(id: number, dto: UserDto): Promise<{
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
    }>;
    updateAvatar(id: number, avatar: Express.Multer.File): Promise<{
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
    }>;
    toggleFavorite(id: number, productId: string): Promise<{
        message: string;
    }>;
}
