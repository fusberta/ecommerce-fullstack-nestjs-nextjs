import { useTypedSelector } from "./useTypedSelector";

/**
 * A custom React hook that provides access to the cart state and total.
 * 
 * @returns An object with the following properties:
 *   - `total`: The total cost of all items in the cart.
 *   - `items`: An array of all items currently in the cart.
 */
export const useCart = () => {
    const items = useTypedSelector(state => state.cart.items);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return { total, items };
}