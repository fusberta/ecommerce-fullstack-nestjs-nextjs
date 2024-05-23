'use client'

import { LampContainer } from "../lamp";
import { TextGenerateEffect } from "../text-generate-effect"
import { motion } from "framer-motion";

/**
 * Renders the hero section of the application, which includes a centered heading with a text generation effect.
 *
 * The hero section is designed to be a full-screen, snap-to-start section that grabs the user's attention.
 * The heading text is animated to fade in and slide up from the bottom, with a delay and easing effect.
 * The text is generated using the `TextGenerateEffect` component, which creates a typing effect.
 */
const Hero = () => {

    const words = "Открой для себя мир механических клавиатур!";

    return (
        <div className="snap-start">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <TextGenerateEffect words={words} className="max-w-3xl" />
                </motion.h1>
            </LampContainer>
        </div>
    )
}

export default Hero