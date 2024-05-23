'use client'
import Catalog from '@/components/ui/catalog/Catalog'
import { useProfile } from '@/hooks/useProfile'
import { FC } from 'react'

const Favorites: FC = () => {
    const profile = useProfile()
    return (
            <main className='px-28 py-32'>
                <Catalog data={profile?.favorites || []} title='Избранное' />
            </main>
    )
}

export default Favorites