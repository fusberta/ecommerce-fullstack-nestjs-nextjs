import { EnumOrderItemStatus, OrderItem } from "@prisma/client";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsOptional, ValidateNested } from "class-validator";

export class OrderDto {
    @IsOptional()
    @IsEnum(EnumOrderItemStatus)
    status: EnumOrderItemStatus

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDto)
    items: OrderItemDto[]
}

export class OrderUpdateDto {
    @IsEnum(EnumOrderItemStatus)
    status: EnumOrderItemStatus
}

export enum OrderStatus {
    NEW = 'NEW',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
}

export class OrderItemDto {
    @IsNumber()
    quantity: number

    @IsNumber()
    price: number

    @IsNumber()
    productId: number
}