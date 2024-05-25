import Image from 'next/image'
import React, { FC } from 'react'

const Build: FC = () => {
    return (
        <>
            <div className="snap-start h-screen flex flex-col justify-center items-center max-w-5xl text-center">
                <h2 className='text-4xl font-bold text-amber-500'>Как собрать свою уникальную клавиатуру?</h2>
                <div className="flex items-center gap-8 mt-8">
                    <Image
                        src='/images/baza.png'
                        width={300}
                        height={300}
                        alt='base'
                        className='max-[950px]:max-w-44 max-w-52 rounded-xl'
                    />
                    <div className='text-xl font-thin leading-relaxed text-left'>
                        <h4 className='font-black text-2xl'>Шаг 1: </h4>
                        <p>Выбор основы будущей клавиатуры.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between snap-start h-screen bg-slate-950 max-[950px]:flex-col max-[950px]:justify-center">
                <div className="font-thin text-lg flex flex-col gap-5 max-w-2xl max-xl:text-base max-[950px]:text-sm">
                    <p>
                        Первым шагом при сборке кастомной клавиатуры является выбор основы или базы.
                        Основа — это платформа, на которую устанавливаются переключатели и клавиши.
                        Основа может быть разных форм-факторов.
                    </p>
                    <div>
                        Самые распространенные:
                        <ul className='ml-4 list-decimal list-inside mt-2'>
                            <li>60-65%, без нумпада и F-ряда</li>
                            <li>75-80%, без нумпада</li>
                            <li>полноразмерная 100%</li>
                        </ul>
                    </div>
                    <p>
                        Также, при выборе базы, обращайте внимание на материал самой основы - пластик,
                        акрил, алюминий и тд.
                    </p>
                    <p>
                        Немаловажным параметром является режим работы клавиатуры: проводная или беспроводная.
                        Часто эти режимы присутствуют вместе и между ними можно переключаться по необходимости.
                    </p>
                </div>
                <div className="flex ml-10 max-[950px]:ml-0 max-[950px]:flex-row max-[950px]:mt-5">
                    <Image
                        src='/images/formfactor.jpg'
                        width={200}
                        height={600}
                        alt='formfactors'
                        className='max-[950px]:max-w-40 max-w-48 rounded'
                    />
                </div>
            </div>
            <div className="snap-start h-screen flex flex-col justify-center items-center max-w-5xl text-center">
                <div className="flex items-center gap-8 mt-8">
                    <Image
                        src='/images/switches_example.jpg'
                        width={300}
                        height={300}
                        alt='switches'
                        className='max-[950px]:max-w-52 max-w-64 rounded-xl'
                    />
                    <div className='text-xl font-thin leading-relaxed text-left'>
                        <h4 className='font-black text-2xl'>Шаг 2: </h4>
                        <p>Выбор свитчей, они же переключатели</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between snap-start h-screen bg-slate-950 max-[950px]:flex-col max-[950px]:justify-center">
                <div className="font-thin text-lg flex flex-col gap-5 max-w-2xl max-xl:text-base max-[950px]:text-sm">
                    <p>
                        Свитчи или переключатели — это ключевой компонент механической клавиатуры,
                        который определяет ощущение и звук при нажатии клавиш. Существует несколько
                        основных типов свитчей, каждый из которых имеет свои особенности:
                    </p>
                    <ul className='ml-4 list-decimal list-inside mt-2 flex flex-col gap-3'>
                        <li><span className='font-bold'>Линейные</span> - нажимаются с одинаковым и равномерным усилием по всей длине
                            хода и ценятся среди геймеров.</li>
                        <li><span className='font-bold'>Тактильные</span> - усилие нажатия увеличивается ближе к моменту срабатывания
                            и чётко ощущается, поэтому их любят все, кто работает с текстами.</li>
                        <li><span className='font-bold'>Кликающие</span> - имеют не только тактильный, но и звуковой отклик, что делает
                            клавиатуру больше похожей на печатную машинку.</li>
                    </ul>
                    <p>
                        Кроме того, все свитчи различаются по усилию нажатия, длине хода, тактильному отклику и звуку. За счёт большого
                        разнообразия характеристик можно тонко настроить параметры клавиатуры.
                    </p>
                </div>
                <div className="flex ml-10 max-[950px]:ml-0 max-[950px]:flex-row max-[950px]:mt-5">
                    <Image
                        src='/images/switches_mechanism.gif'
                        width={400}
                        height={300}
                        alt='formfactors'
                        className='max-[950px]:max-w-80 max-w-72 rounded'
                    />
                </div>
            </div>
            <div className="snap-start h-screen flex flex-col justify-center items-center max-w-5xl text-center">
                <div className="flex items-center gap-8 mt-8">
                    <Image
                        src='/images/keycap_set.jpg'
                        width={300}
                        height={300}
                        alt='Комплект кейкапов'
                        className='max-[950px]:max-w-52 max-w-64 rounded-xl'
                    />
                    <div className='text-xl font-thin leading-relaxed text-left'>
                        <h4 className='font-black text-2xl'>Шаг 3: </h4>
                        <p>Кейкапы, клавиши, колпачки</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between snap-start h-screen bg-slate-950 max-[950px]:flex-col max-[950px]:justify-center">
                <div className="font-thin text-lg flex flex-col gap-5 max-w-xl max-xl:text-base max-[950px]:text-sm">
                    <p>
                        Последняя деталь конструкции — колпачки (кейкапы), которые надеваются на переключатели.
                        Именно на них мы нажимаем пальцами. Они бывают разными по высоте, профилю, способу нанесения
                        символов и типу раскладки.
                    </p>
                    <p>
                        Исходя из своих предпочтений можно выбрать тонкие, прямые, скошенные или закруглённые колпачки, 
                        а символы в них могут быть вырезаны лазером, выдавлены из пластика или нанесены краской. 
                        При желании надоевшие кейкапы легко сменить, купив набор других.
                        На изображении показаны типы кейкапов и их размер.
                    </p>
                </div>
                <div className="flex ml-10 max-[950px]:ml-0 max-[950px]:flex-row max-[950px]:mt-5">
                    <Image
                        src='/images/keycap_types.jpg'
                        width={400}
                        height={300}
                        alt='formfactors'
                        className='max-[950px]:max-w-80 max-w-96 rounded'
                    />
                </div>
            </div>
        </>
    )
}

export default Build