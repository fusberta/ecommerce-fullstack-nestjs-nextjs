'use client'

import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Heading title='Страница не найдена'/>
        <p className="text-gray-500 mb-8">Извините, но запрашиваемая вами страница не существует.</p>
        <Link href="/" className="bg-gray-700 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Вернуться на главную
        </Link>
    </div>
  )
}

export default NotFound