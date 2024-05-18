import { IAdminListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import AdminActions from './AdminActions'

const AdminListItem: FC<IAdminListItem> = ({ listItem, removeHandler }) => {
    return (
        <div
            className='flex items-center p-4 border border-slate-400 shadow-md
            shadow-slate-600 mb-5 rounded-xl bg-slate-800 font-thin w-full'
        >
            {listItem.items.map(value => (
                <div className={`w-1/${listItem.items.length + 1} px-2`} key={value}>{value}</div>
            ))}

            <AdminActions
                removeHandler={removeHandler}
                viewUrl={listItem.viewUrl}
                editUrl={listItem.editUrl}
            />
        </div>
    )
}

export default AdminListItem