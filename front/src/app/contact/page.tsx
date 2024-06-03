import type { Metadata } from 'next'
import Contact from './Contact'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Найдите нас легко и быстро'
}

export default function AboutPage() {
  return <Contact />
}
