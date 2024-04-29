import { useActions } from "@/hooks/useActions"
import { useCart } from "@/hooks/useCart"
import { IProduct } from "@/types/product.interface"
import { FC } from "react"
import { TbShoppingBagPlus, TbShoppingBagX } from "react-icons/tb"
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth"

const AddToCartBtn: FC< { product: IProduct }> = ({ product }) => {
    const { user } = useAuth()

    if (!user) return null

    const { addItem, removeItem } = useActions()
    const { items } = useCart()

    const cartElement = items.find(item => item.products.id === product.id)
    
    return (
        <div className="w-1/2">
            <button onClick={
                () => cartElement ? removeItem({ id: cartElement.id }) : addItem({
                    products: product,
                    quantity: 1,
                    price: product.price
                })}
                className="text-amber-400 text-xl bg-slate-800 px-4 py-2 w-full flex items-center justify-center"
            >
                {cartElement ? <IoCart /> : <IoCartOutline />}
            </button>
        </div>
    )
}

export default AddToCartBtn