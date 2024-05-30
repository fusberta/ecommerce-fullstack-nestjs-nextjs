import { ICartItem } from "./cart.interface";
import { IUser } from "./user.interface";

export enum EnumOrderStatus {
    NEW = "NEW",
    CONFIRMED = "CONFIRMED",
    CANCELED = "CANCELED",
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
    status: EnumOrderStatus;
}