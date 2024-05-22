import { cn } from '@/utils/utils';
import Image from 'next/image';
import { useState, type FC } from 'react'

interface IProductGallery {
    images: string[]
}

const ProductGallery: FC<IProductGallery> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <div>
            <Image
                src={images[activeIndex]}
                alt='product'
                width={500}
                height={500}
                className='rounded-xl overflow-hidden'
                priority
                draggable={false}
            />
            <div className="mt-6 w-[500px] overflow-x-auto whitespace-nowrap">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                            'duration-500 hover:shadow-md mr-5 last:mr-0 border-2 transition-all overflow-hidden inline-block rounded',
                            {
                                'shadow-md border-orange-500': index === activeIndex,
                                'border-transparent': index !== activeIndex
                            }
                        )}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt='product'
                            width={100}
                            height={100}
                            className='overflow-hidden'
                            priority
                            draggable={false}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery