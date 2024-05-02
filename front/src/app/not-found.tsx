'use client'

import Heading from '@/components/ui/Heading'
import Layout from '@/components/ui/layout/Layout'
import Link from 'next/link'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <Layout>
        <Heading title='Страница не найдена'/>
        <p className="text-gray-500 mb-8">Извините, но запрашиваемая вами страница не существует.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Вернуться на главную
        </Link>
    </Layout>
  )
}

export default NotFound