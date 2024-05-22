import { IProduct } from "./product.interface";

export interface ICartItem {
    id: number;
    product: IProduct;
    quantity: number;
    price: number;
}

export interface ICartState {
    items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
    type: 'increment' | 'decrement';
}