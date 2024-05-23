import { useActions } from "@/hooks/useActions"
import { useCart } from "@/hooks/useCart"
import { IProduct } from "@/types/product.interface"
import { FC } from "react"
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth"
import { cn } from "@/utils/utils";

/**
 * A React functional component that renders a button to add or remove a product from the shopping cart.
 *
 * @param {Object} props - The component props.
 * @param {IProduct} props.product - The product to be added or removed from the cart.
 * @param {string} [props.className] - An optional CSS class name to be applied to the button.
 * @returns {JSX.Element} - The rendered button component.
 */
const AddToCartBtn: FC<{ product: IProduct, className?: string }> = ({ product, className }) => {
    const { user } = useAuth()

    if (!user) return null

    const { addItem, removeItem } = useActions()
    const { items } = useCart()

    const cartElement = items.find(item => item.product.id === product.id)
    return (
        <div className="w-1/2">
            <button onClick={
                () => cartElement ? removeItem({ id: cartElement.id }) : addItem({
                    product: product,
                    quantity: 1,
                    price: product.price
                })}
                className={cn("text-amber-400 text-xl bg-slate-800 px-4 py-2 w-full flex items-center justify-center", className)}
            >
                {cartElement ? <IoCart /> : <IoCartOutline />}
            </button>
        </div>
    )
}

export default AddToCartBtn