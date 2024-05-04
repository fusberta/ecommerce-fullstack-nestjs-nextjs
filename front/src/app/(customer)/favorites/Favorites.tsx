'use client'
import Catalog from '@/components/ui/catalog/Catalog'
import { useProfile } from '@/hooks/useProfile'

const Favorites = () => {
    const profile = useProfile()
    return (
            <main className='px-28'>
                <Catalog data={profile?.favorites || []} title='Избранное' />
            </main>
    )
}

export default Favorites