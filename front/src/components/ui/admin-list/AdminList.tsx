'use client'

import { IListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import { HashLoader } from 'react-spinners'
import AdminListItem from './AdminListItem'

interface IAdminList {
    items?: IListItem[]
    isLoading: boolean
    removeHandler?: (id: number) => void
    confirmHandler?: (id: number) => void;
    rejectHandler?: (id: number) => void;
}

/**
 * Renders a list of admin items, with loading and empty states.
 *
 * @param items - An array of admin items to display.
 * @param isLoading - A boolean indicating whether the data is currently loading.
 * @param removeHandler - An optional function to handle the removal of an admin item.
 * @returns A React component that displays the admin list.
 */
const AdminList: FC<IAdminList> = ({ items, isLoading, removeHandler, confirmHandler, rejectHandler }) => {
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
                            confirmHandler={confirmHandler ? () => confirmHandler(item.id) : undefined}
                            rejectHandler={rejectHandler ? () => rejectHandler(item.id) : undefined}
                            removeHandler={removeHandler ? () => removeHandler(item.id) : undefined}
                        />
                    ))
                ) : (
                    <div>
                        Elements not found
                    </div>
                )
            }
        </div>
    )
}

export default AdminList