import { IAdminListItem } from '@/types/admin.interface'
import React, { FC } from 'react'
import AdminActions from './AdminActions'

const AdminListItem: FC<IAdminListItem> = ({ listItem, removeHandler }) => {
    return (
        <div>
            {listItem.items.map(value => (
                <div key={value}>{value}</div>
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