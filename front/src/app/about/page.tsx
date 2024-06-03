import type { Metadata } from 'next'
import About from './About'

export const metadata: Metadata = {
  title: 'О нас',
  description: 'Профессиональная команда по кастомизации клавиатур и комплектующих'
}

export default function AboutPage() {
  return <About />
}
