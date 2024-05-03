'use client'
import Catalog from '@/components/ui/catalog/Catalog'
import { useProfile } from '@/hooks/useProfile'

const Favorites = () => {
    const profile = useProfile()
    return (
            <>
                <Catalog data={profile?.favorites || []} title='Избранное' />
            </>
    )
}

export default Favorites