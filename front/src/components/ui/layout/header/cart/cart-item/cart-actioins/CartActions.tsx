import Image from 'next/image';
import { FC } from 'react';
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

import { ICartItem } from '@/types/cart.interface';
import { useCart } from '@/hooks/useCart';
import { useActions } from '@/hooks/useActions';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
    const { removeItem, changeQuantity } = useActions();

    const { items } = useCart();

    const quantity = items.find(item => item.id === item.id)?.quantity;

    return (
        <div className="mt-2">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'decrement' })}
                    disabled={quantity === 1}
                >
                    <FiMinus fontSize={12} />
                </button>

                <input 
                    disabled
                    readOnly
                    value={quantity}
                    className='w-10 bg-black text-center text-sm'
                />

                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'increment' })}
                >
                    <FiPlus fontSize={12} />
                </button>   

                <button
                    onClick={() => removeItem({ id: item.id })}
                    className='ml-3 text-red-500'
                >
                    <FiTrash fontSize={12} />
                </button>   
            </div>
        </div>
    )
}

export default CartActions;