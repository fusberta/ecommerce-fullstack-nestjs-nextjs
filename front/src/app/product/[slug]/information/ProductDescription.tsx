import Heading from '@/components/ui/Heading'
import React, { FC } from 'react'

interface IProductDescription {
    description: string
}

const ProductDescription: FC<IProductDescription> = ({ description }) => {
    return (
        <section className='mt-12'>
            <Heading className='mb-5 text-xl font-extrabold' title='Описание' />
            {description && (
                <pre className='whitespace-pre-wrap text-sm leading-5'>
                    {description}
                </pre>
            )}
        </section>
    )
}

export default ProductDescription