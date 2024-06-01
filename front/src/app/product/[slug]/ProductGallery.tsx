import { cn } from '@/utils/utils';
import Image from 'next/image';
import { useState, type FC } from 'react'

interface IProductGallery {
    images: string[]
}

/**
 * A React functional component that renders a product gallery with a main image and a set of thumbnail images.
 *
 * @param {IProductGallery} props - The props for the component.
 * @param {string[]} props.images - An array of image URLs to display in the gallery.
 * @returns {JSX.Element} - The rendered product gallery.
 */
const ProductGallery: FC<IProductGallery> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    return (
        <>
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
                            'duration-300 mr-3 last:mr-0 border-2 transition-all overflow-hidden inline-block rounded-md bg-white',
                            {
                                'shadow-md border-orange-400': index === activeIndex,
                                'border-transparent': index !== activeIndex
                            }
                        )}
                    >
                        <Image
                            src={image}
                            alt='miniature'
                            width={100}
                            height={100}
                            className='overflow-hidden object-contain w-[100px] h-[100px]'
                            priority
                            draggable={false}
                        />
                    </button>
                ))}
            </div>
        </>
    )
}

export default ProductGallery