import Meta from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { useProfile } from '@/hooks/useProfile'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import React, { useState } from 'react'

const FavoritesPage: NextPageAuth = () => {
    const profile = useProfile()
    return (
        <Meta title="Favorites">
            <Layout>
                <Catalog data={profile?.favorites || []} title='Избранное' />
            </Layout>
        </Meta>
    )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage