'use client'

import { FC } from "react";
import { StickyScroll } from "../sticky-scroll-reveal"
import { content } from './Content';
import image1 from './img/block1.avif';
import image2 from './img/block2.avif';
import image3 from './img/block3.avif';

/**
 * Renders the Overview component, which displays a section with a sticky scroll
 * content and a set of images.
 */
const Overview: FC = () => {
    const images = [image1, image2, image3].map(image => image.src);
    return (
        <section className="snap-start">
            <StickyScroll content={content} images={images} />
        </section>
    )
}

export default Overview