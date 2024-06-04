import { Home } from '@/app/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Открой мир кастомных клавиатур вместе с CustomWORLD'
}

export default async function HomePage() {
    return <Home />
}
