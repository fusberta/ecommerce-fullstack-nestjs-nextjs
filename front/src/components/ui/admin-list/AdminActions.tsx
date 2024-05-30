import { IListItem } from '@/types/admin.interface'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { Button } from '../button/button'
import { FaCheck, FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
    removeHandler?: () => void
    confirmHandler?: () => void
    rejectHandler?: () => void
}

/**
 * Renders a set of admin actions, including view, edit, and remove buttons.
 *
 * @param editUrl - The URL to navigate to when the edit button is clicked.
 * @param viewUrl - The URL to navigate to when the view button is clicked.
 * @param removeHandler - A function to be called when the remove button is clicked.
 * @returns A React component that renders the admin actions.
 */
const AdminActions: FC<IAdminActions> = ({ editUrl, viewUrl, removeHandler, confirmHandler, rejectHandler }) => {

    const { push } = useRouter()
    return (
        <div className='flex gap-2 justify-end'>
            {viewUrl && (
                <Button size={'icon'} onClick={() => push(viewUrl)}>
                    <FaRegEye size={20}/>
                </Button>
            )}
            {editUrl && (
                <Button size={'icon'} onClick={() => push(editUrl)}>
                    <FaPen />
                </Button>
            )}
            {removeHandler && (
                <Button size={'icon'} onClick={removeHandler}>
                    <FaTrash />
                </Button>
            )}
            {confirmHandler && (
                <Button size={'icon'} onClick={confirmHandler}>
                    <FaCheck />
                </Button>
            )}
            {rejectHandler && (
                <Button size={'icon'} onClick={rejectHandler}>
                    <IoCloseSharp />
                </Button>
            )}
        </div>
    )
}

export default AdminActions