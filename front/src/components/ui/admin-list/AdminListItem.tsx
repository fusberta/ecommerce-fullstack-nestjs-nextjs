import { IAdminListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import AdminActions from './AdminActions'
import { Button } from '../button/button'

interface ICustomAdminListItem extends IAdminListItem {
    confirmHandler?: () => void;
    rejectHandler?: () => void;
}

/**
 * Renders an individual admin list item with the provided data and actions.
 *
 * @param listItem - An object containing the data for the admin list item, including the items to display and URLs for viewing and editing.
 * @param removeHandler - A function to handle the removal of the admin list item.
 * @returns A React component that displays the admin list item.
 */
const AdminListItem: FC<ICustomAdminListItem> = ({ listItem, removeHandler, confirmHandler, rejectHandler }) => {

    return (
        <div
            className='grid grid-cols-[repeat(auto-fit,_minmax(0,1fr))] gap-2 p-4 border border-slate-400 shadow-md
            shadow-slate-600 mb-5 rounded-xl bg-slate-800 font-thin w-full items-center'
        >
            {listItem.items.map((value, index) => (
                <div key={index} className='px-2'>{value}</div>
            ))}

            {(removeHandler || listItem.viewUrl || listItem.editUrl || confirmHandler || rejectHandler) && (
                <AdminActions
                    removeHandler={removeHandler}
                    viewUrl={listItem.viewUrl}
                    editUrl={listItem.editUrl}
                    confirmHandler={confirmHandler}
                    rejectHandler={rejectHandler}
                />
            )}

        </div>
    )
}

export default AdminListItem