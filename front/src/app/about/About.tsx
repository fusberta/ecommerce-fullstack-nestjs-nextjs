import Heading from '@/components/ui/Heading'
import Image from 'next/image'
import React, { FC } from 'react'

const About: FC = () => {
    return (
        <div className='px-28 py-32 flex justify-between items-center h-screen'>
            <div className="max-w-xl">
                <Heading title='О нас' />
                <p className='mt-8 leading-8'>
                    <b>CustomWorld</b> — бренд из Санкт-Петербурга, специализирующийся на кастомизации и продаже
                    механических клавиатур для ценителей уникального дизайна и высокого качества.
                    Наша команда всегда готова помочь вам подобрать или собрать идеальную клавиатуру для работы или игр.
                </p>
            </div>

            <Image 
                width={300}
                height={300}
                src='/images/main-logo.svg'
                alt='Логотип компании'
            />

        </div>
    )
}

export default About