'use client'

import Heading from '@/components/ui/Heading'
import StatisticService from '@/services/statistic.service'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import { HashLoader } from 'react-spinners'

const Dashboard: FC = () => {
    const { data, isFetching } = useQuery({
        queryKey: ['statistic'],
        queryFn: () => StatisticService.getMain(),
        select: ({ data }) => data
    })
    return (
        <div className='px-28 py-32'>
            <Heading title='Dashboard' />
            {isFetching ? (
                <div className="flex items-center justify-center py-14">
                    <HashLoader color="#1f2547" />
                </div>
            ) : data?.length ? (
                <div className="flex items-center justify-between my-8 flex-wrap animate-opacity">
                    {
                        data?.map((item, index) => (
                            <div key={item.name} className='bg-slate-800 p-5 rounded-xl text-center w-60 font-bold mb-10'>
                                <div className='text-sm'>{item.name}</div>
                                <div className='text-4xl'>
                                    {index === data.length - 1 
                                    ? item.value || 0 : item.value + " "}
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="flex items-center justify-center py-14">No data found</div>
            )
        }
        </div>
    )
}

export default Dashboard