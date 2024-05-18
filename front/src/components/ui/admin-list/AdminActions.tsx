import { IListItem } from '@/types/admin.interface'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { Button } from '../button/button'
import { MdVisibility } from 'react-icons/md'
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
    removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, viewUrl, removeHandler }) => {

    const { push } = useRouter()
    return (
        <div className='flex gap-2 justify-end w-1/4'>
            {viewUrl && (
                <Button size={'icon'} onClick={() => push(viewUrl)}>
                    <RiExternalLinkLine />
                </Button>
            )}
            {editUrl && (
                <Button size={'icon'} onClick={() => push(editUrl)}>
                    <RiEdit2Line />
                </Button>
            )}
            {removeHandler && (
                <Button size={'icon'} onClick={removeHandler}>
                    <RiDeleteRow />
                </Button>
            )}
        </div>
    )
}

export default AdminActions