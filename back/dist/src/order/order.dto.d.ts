import { EnumOrderItemStatus } from "@prisma/client";
export declare class OrderDto {
    status: EnumOrderItemStatus;
    items: OrderItemDto[];
}
export declare class OrderUpdateDto {
    status: EnumOrderItemStatus;
}
export declare enum OrderStatus {
    NEW = "NEW",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED"
}
export declare class OrderItemDto {
    quantity: number;
    price: number;
    productId: number;
}
