'use client'

import { IListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import { HashLoader } from 'react-spinners'
import AdminListItem from './AdminListItem'

interface IAdminList {
    items?: IListItem[]
    isLoading: boolean
    removeHandler?: (id: number) => void
}

const AdminList: FC<IAdminList> = ({ items, isLoading, removeHandler }) => {
    return (
        <div>
            {
                isLoading ? (
                    <div className="flex items-center justify-center py-14">
                        <HashLoader color="#1f2547" />
                    </div>
                ) : items?.length ? (
                    items.map(item => (
                        <AdminListItem
                            key={item.id}
                            listItem={item}
                            removeHandler={removeHandler ? () => removeHandler(item.id) : undefined}
                        />
                    ))
                ) : (
                    <div className="">
                        Elements not found
                    </div>
                )
            }
        </div>
    )
}

export default AdminList