import { IAdminListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import AdminActions from './AdminActions'

const AdminListItem: FC<IAdminListItem> = ({ listItem, removeHandler }) => {
    return (
        <div
            className='grid grid-cols-[repeat(auto-fit,_minmax(0,1fr))] gap-2 p-4 border border-slate-400 shadow-md
            shadow-slate-600 mb-5 rounded-xl bg-slate-800 font-thin w-full items-center'
        >
            {listItem.items.map((value, index) => (
                <div key={index} className='px-2'>{value}</div>
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