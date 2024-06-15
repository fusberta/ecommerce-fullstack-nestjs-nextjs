import { cn } from '@/utils/utils';
import Image from 'next/image';
import { useEffect, useState, type FC } from 'react'
import { HashLoader } from 'react-spinners';

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
    const [validImages, setValidImages] = useState<string[]>([]);

    useEffect(() => {
        const checkImages = async () => {
            const newValidImages = await Promise.all(images.map(async (image) => {
                try {
                    await checkImage(image);
                    return image;
                } catch {
                    const pngImage = image.replace('.webp', '.png');
                    try {
                        await checkImage(pngImage);
                        return pngImage;
                    } catch {
                        return null;
                    }
                }
            }));
            setValidImages(newValidImages.filter(Boolean) as string[]);
        };

        checkImages();
    }, [images]);

    const checkImage = (url: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                if (response.ok) {
                    resolve(url);
                } else {
                    reject(new Error('Image not found'));
                }
            }).catch(() => {
                reject(new Error('Image not found'));
            });
        });
    };

    return (
        <>
            <Image
                src={validImages[activeIndex]}
                alt='product'
                width={500}
                height={500}
                className='rounded-xl overflow-hidden w-auto max-h-[400px] animate-scaleIn'
                priority
                draggable={false}
            />
            <div className="mt-6 w-[500px] overflow-x-auto whitespace-nowrap">
                {validImages.map((image, index) => (
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
                            className='overflow-hidden object-contain w-[100px] h-auto animate-scaleIn'
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