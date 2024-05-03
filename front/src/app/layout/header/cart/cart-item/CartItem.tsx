import Image from 'next/image';
import { FC } from 'react';
import { ICartItem } from '@/types/cart.interface';
import CartActions from './cart-actioins/CartActions';
import { MdOutlineCurrencyRuble } from 'react-icons/md';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
    return (
        <div className="flex justify-between items-start gap-2">
            <Image 
                src={item.products.images[0]}
                width={100}
                height={100}
                alt={item.products.name}
            />
            <div className="flex flex-col w-[140px]">
                <div className="text-sm font-semibold">{item.products.name}</div>
                <div className="flex items-center text-sm font-semibold mt-2">{item.products.price}<MdOutlineCurrencyRuble size={12}/></div>

                <CartActions item={item} />
            </div>
        </div>
    )
}

export default CartItem;