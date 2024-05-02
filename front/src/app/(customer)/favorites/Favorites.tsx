'use client'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { useProfile } from '@/hooks/useProfile'

const Favorites = () => {
    const profile = useProfile()
    return (
            <Layout>
                <Catalog data={profile?.favorites || []} title='Избранное' />
            </Layout>
    )
}

export default Favorites