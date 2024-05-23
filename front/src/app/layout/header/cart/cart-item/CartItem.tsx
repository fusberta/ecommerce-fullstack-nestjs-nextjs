import Image from 'next/image';
import { FC } from 'react';
import { ICartItem } from '@/types/cart.interface';
import CartActions from './cart-actioins/CartActions';
import { MdOutlineCurrencyRuble } from 'react-icons/md';

/**
 * Renders a single cart item component, displaying the product image, name, price, and cart actions.
 *
 * @param item - An object containing the details of the cart item, including the product information.
 * @returns A React component that displays the cart item.
 */
const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
    return (
        <div className="flex justify-between items-start gap-2">
            <Image
                src={item.product.images[0]}
                width={100}
                height={100}
                alt={item.product.name}
            />
            <div className="flex flex-col w-[140px]">
                <div className="text-sm font-semibold">{item.product.name}</div>
                <div className="flex items-center text-sm font-semibold mt-2">{item.product.price}<MdOutlineCurrencyRuble size={12} /></div>

                <CartActions item={item} />
            </div>
        </div>
    )
}

export default CartItem;