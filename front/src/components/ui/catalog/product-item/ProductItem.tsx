import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import { FC } from "react";
import AddToCartBtn from "./AddToCartBtn";
import ProductRating from "./ProductRating";
import Link from "next/link";
import FavoriteBtn from "./FavoriteBtn";
import { LiaRubleSignSolid } from "react-icons/lia";

/**
 * Renders a product item component for displaying a single product in the catalog.
 *
 * @param {Object} props - The component props.
 * @param {IProduct} props.product - The product data to display.
 * @returns {React.ReactElement} - The rendered product item component.
 */
const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <div className="animate-scaleIn border border-zinc-700 rounded-xl">
            <div className="block w-full overflow-hidden bg-white rounded-t-xl">
                <Link href={`/product/${product.slug}`}>
                    <Image className="object-contain block mx-auto w-full object-center h-[150px]" priority width={200} height={200} src={product.images[0]} alt={product.name} />
                </Link>
            </div>
            <div className="flex justify-between items-center w-full">
                <FavoriteBtn productId={product.id} />
                <AddToCartBtn product={product} />
            </div>
            <div className="px-4 py-2 flex flex-col justify-between">
                <div>
                    <Link href={`/product/${product.slug}`}>
                        <h3 className="mb-1 font-semibold text-lg">{product.name}</h3>
                    </Link>
                    <Link href={`/category/${product.category.slug}`} className="text-sky-500 font-bold text-xs">{product.category.name}</Link>
                    <ProductRating product={product} isText />
                </div>
                <span className="flex items-center mt-2 justify-center pt-1 border-t border-zinc-700 border- font-extrabold text-lg">{product.price}<LiaRubleSignSolid size={20} /></span>
            </div>
        </div>
    )
}

export default ProductItem