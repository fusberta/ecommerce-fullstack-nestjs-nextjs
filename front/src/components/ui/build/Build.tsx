import Image from 'next/image'
import React, { FC } from 'react'

const Build: FC = () => {
    return (
        <div className='bg-slate-900 flex justify-center items-center flex-col p-10'>
            <div className="snap-start h-screen flex flex-col justify-center items-center max-w-5xl text-center">
                <h2 className='text-4xl font-thin text-amber-500'>Как собрать свою уникальную клавиатуру?</h2>
                <p className='text-xl font-thin mt-4'>Шаг 1: Выбор основы будущей клавиатуры.</p>
            </div>
            <div className="flex items-center justify-between snap-start h-screen bg-slate-900 max-[950px]:flex-col max-[950px]:justify-center">
                <div className="font-thin text-lg flex flex-col gap-5 max-w-xl max-xl:text-base max-[950px]:text-sm">
                    <p className='text-white'>
                        Первым шагом при сборке кастомной клавиатуры является выбор основы или базы.
                        Основа — это платформа, на которую устанавливаются переключатели и клавиши.
                        Основа может быть разных форм-факторов.
                    </p>
                    <p>
                        Самые распространенные:
                        <ul className='ml-4 list-decimal list-inside mt-2'>
                            <li>60-65%, без нумпада и F-ряда</li>
                            <li>75-80%, без нумпада</li>
                            <li>полноразмерная 100%</li>
                        </ul>
                    </p>
                    <p>
                        Также, при выборе базы, обращайте внимание на материал самой основы - пластик,
                        акрил, алюминий и тд.
                    </p>
                    <p>
                        Немаловажным параметром является режим работы клавиатуры: проводная или беспроводная.
                        Часто эти режимы присутствуют вместе и между ними можно переключаться по необходимости.
                    </p>
                </div>
                <div className="flex ml-5 max-[950px]:ml-0 max-[950px]:flex-row max-[950px]:mt-5">
                    <Image
                        src='/images/baza.png'
                        width={500}
                        height={100}
                        alt='formfactors'
                        className='max-[950px]:max-w-44 max-w-64'
                    />
                    <Image
                        src='/images/formfactor.jpg'
                        width={200}
                        height={600}
                        alt='formfactors'
                        className='max-[950px]:max-w-20 max-w-32'
                    />
                </div>
            </div>
        </div>
    )
}

export default Build