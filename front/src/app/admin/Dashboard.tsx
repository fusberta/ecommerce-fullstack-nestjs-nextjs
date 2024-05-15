'use client'

import StatisticService from '@/services/statistic.service'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

const Dashboard: FC = () => {
    const { data, isFetching } = useQuery({
        queryKey: ['statistic'],
        queryFn: () => StatisticService.getMain(),
        select: ({data}) => data
    })
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard