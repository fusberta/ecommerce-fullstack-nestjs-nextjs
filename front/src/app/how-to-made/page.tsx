import type { Metadata } from 'next'
import HowToMade from './HowToMade'

export const metadata: Metadata = {
    title: 'Как собрать клавиатуру',
    description: 'Рассказываем как собрать свою первую кастомную клавиатуру'
}

export default function HowToMadePage() {
    return <HowToMade />
}
