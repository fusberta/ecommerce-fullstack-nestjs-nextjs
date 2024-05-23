import { FC } from 'react';
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

import { ICartItem } from '@/types/cart.interface';
import { useActions } from '@/hooks/useActions';

/**
 * Renders the actions for a cart item, including buttons to increment/decrement the quantity and remove the item.
 *
 * @param item - The cart item object containing the item details.
 * @returns A React functional component that renders the cart item actions.
 */
const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
    const { removeItem, changeQuantity } = useActions();

    return (
        <div className="mt-2">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'decrement' })}
                    disabled={item.quantity === 1}
                >
                    <FiMinus fontSize={12} />
                </button>

                <input
                    disabled
                    readOnly
                    value={item.quantity}
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