'use client'

import Heading from '@/components/ui/Heading'
import OrderService from '@/services/order.service'
import { useQuery } from '@tanstack/react-query'
import { useState, FC } from 'react'
import { HashLoader } from 'react-spinners'
import { CgSmileNone } from "react-icons/cg";
import { MdCurrencyRuble } from 'react-icons/md'

/**
 * Renders the MyOrders component, which displays the user's order history.
 * 
 * The component fetches the user's orders from the OrderService and displays them in a list.
 * Each order can be expanded to show the details of the items in the order.
 * 
 * The component uses the useQuery hook from react-query to fetch the orders, and the useState hook
 * to manage the expanded state of each order.
 * 
 * @returns The MyOrders component
 */
const MyOrders: FC = () => {
    const { data: orders, isFetching } = useQuery({
        queryKey: ['my orders'],
        queryFn: () => OrderService.getByUserId(),
        select: ({ data }) => data
    })

    const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null)

    const toggleOrder = (orderId: number) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId)
    }

    return (
        <div className='px-28 py-32'>
            <Heading title="Мои заказы" />
            {isFetching ?
                <div className="flex items-center justify-center py-14">
                    <HashLoader color="#1f2547" />
                </div>
                : orders?.length ? (
                    orders.map(order => (
                        <div
                            key={order.id}
                            className='rounded-lg bg-slate-800 shadow-lg p-7 my-7 cursor-pointer'
                            onClick={() => toggleOrder(order.id)}
                        >
                            <div
                                className='grid grid-cols-[repeat(auto-fit,_minmax(0,1fr))] gap-2'
                            >
                                <span># {order.id}</span>
                                <span>{order.status}</span>
                                <span>
                                    {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                                </span>
                                <span>
                                    {new Date(order.createdAt).toLocaleTimeString('ru-RU')}
                                </span>
                                <span className='flex items-center'>
                                    {order.total}<MdCurrencyRuble className='mb-0.5' />
                                </span>
                            </div>
                            {expandedOrderId === order.id && (
                                <div className='mt-4 bg-slate-700 px-4 py-2 rounded-lg'>
                                    {order.items?.map(item => (
                                        <div key={item.id} className='flex justify-between py-2 border-b border-slate-600'>
                                            <span>{item.product.name}</span>
                                            <span className='flex items-center'>
                                                {item.quantity} x {item.price}<MdCurrencyRuble className='mb-0.5' />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center py-14 font-bold">
                        Заказов не найдено <CgSmileNone className='ml-2' size={32} />
                    </div>
                )
            }
        </div>
    )
}

export default MyOrders
