import { ICartItem } from "./cart.interface";
import { IUser } from "./user.interface";

export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export interface IOrder {
    id: number;
    user: IUser;
    items: ICartItem[];
    total: number;
    status: EnumOrderStatus;
    createdAt: string;
}

export interface IOrderUpdate {
    total: number;
    status: EnumOrderStatus;
}