import Heading from '@/components/ui/Heading'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import React, { FC } from 'react'
import telegram from './contact-img/telegram.png'
import vk from './contact-img/vk.png'
import whatsapp from './contact-img/whatsapp.png'

const items = [
    {
        id: 1,
        name: 'Telegram',
        href: '/',
        image: telegram,
    },
    {
        id: 2,
        name: 'VKontakte',
        href: '/',
        image: vk,
    },
    {
        id: 3,
        name: 'WhatsApp',
        href: '/',
        image: whatsapp,
    },
]

const Contact: FC = () => {
    return (
        <div className='px-28 py-32 flex justify-center items-center h-screen'>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0875de33cf2d9d3bb4d9bac3cf256882f17234e26fdd293552bde74220ee8140&amp;source=constructor"
                width="649"
                height="477"
                className='rounded-2xl mr-10'
            />
            <div className="max-w-lg">
                <Heading title='Контакты' />
                <h4 className='text-xl font-thin mt-5'>Санкт-Петербург, улица Марата, 66/22</h4>
                <div className="text-sm mt-2 font-bold">
                    <p className='text-amber-500'>Лиговский проспект - 690 м</p>
                    <p className='text-violet-400'>Звенигородская - 740 м</p>
                    <p className='text-red-400'>Владимирская - 940 м</p>
                </div>
                <div className="flex mt-8">
                    <AnimatedTooltip items={items} />
                </div>

            </div>
        </div>
    )
}

export default Contact