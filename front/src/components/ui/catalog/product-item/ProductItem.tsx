import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import { FC } from "react";
import AddToCartBtn from "./AddToCartBtn";
import ProductRating from "./ProductRating";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicFavoriteBtn = dynamic(() => import("./FavoriteBtn"), { ssr: false });

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <div className="animate-opacity">
            <div className="block w-full overflow-hidden bg-white rounded-t-xl">
                <Link href={`/product/${product.slug}`}>
                    <Image className="object-contain w-full object-center h-[150px]" priority width={200} height={200} src={product.images[0]} alt={product.name} />
                </Link>
            </div>
            <div className="flex justify-between items-center w-full mb-3">
                    <DynamicFavoriteBtn productId={product.id} />
                    <AddToCartBtn product={product} />
            </div>
            <Link href={`/product/${product.slug}`}>
                <h3 className="mb-1 font-semibold text-xl">{product.name}</h3>
            </Link>
            <Link href={`/category/${product.category.slug}`} className="text-sky-500 font-bold text-sm">{product.category.name}</Link>
            <ProductRating product={product} />
            <span>{product.price}</span>
        </div>
    )
}

export default ProductItem