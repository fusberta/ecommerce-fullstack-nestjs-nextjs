'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCart } from "@/hooks/useCart";
import { FC } from "react";
import { LuShoppingCart } from "react-icons/lu";
import CartItem from "./cart-item/CartItem";
import { Button } from "@/components/ui/button/button";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import '@/utils/scroll.css'
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import OrderService from "@/services/order.service";
import { useRouter } from "next/navigation";
import { useActions } from "@/hooks/useActions";

/**
 * Renders the header cart component, which displays the user's cart items and allows them to place an order.
 * 
 * The component uses the `useCart` and `useAuth` hooks to access the user's cart items and authentication status.
 * It also uses the `useMutation` hook to handle the order placement process.
 * 
 * When the user has items in their cart, the component displays the total cost and a button to place the order.
 * When the user is not authenticated, the component displays a button to redirect the user to the authentication page.
 */
const HeaderCart: FC = () => {

    const { items, total } = useCart();
    const { user } = useAuth()
    const { push } = useRouter()
    const { reset } = useActions()

    const { mutate } = useMutation({
        mutationKey: ['place order'],
        mutationFn: () => OrderService.place({
            items: items.map(item => ({
                price: item.price,
                productId: item.product.id,
                quantity: item.quantity
            }))
        }),
        onSuccess: () => {
            push('/my-orders')
            reset()
        }
    })

    return (
        <Popover>
            <PopoverTrigger>
                <LuShoppingCart size={28} className="text-amber-400" />
            </PopoverTrigger>
            <PopoverContent>
                {user ? (
                    <>
                        <h4 className="text-lg font-normal mb-4">
                            Моя корзина
                        </h4>
                        <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
                            {items.length ? (
                                items.map((item) => (
                                    <CartItem item={item} key={item.id} />))
                            ) : (
                                <p className="font-light">Корзина пуста</p>
                            )}
                        </div>
                        <div className="mt-5">
                            <div className="text-sm font-light">Итог:</div>
                            <div className="flex items-center text-lg font-semibold">{total}<MdOutlineCurrencyRuble size={14} /></div>
                        </div>
                        <div className="mt-2 w-full">
                            <Button variant={"outline"} size={"lg"} className="w-full" onClick={() => mutate()} disabled={items.length === 0}>
                                Оформить заказ
                            </Button>
                        </div>
                    </>
                ) : (
                    <Button variant={"outline"} size={"default"} className="w-full">
                        <Link href="/auth">
                            Авторизоваться
                        </Link>
                    </Button>
                )}

            </PopoverContent>
        </Popover>
    )
}

export default HeaderCart;