import { LampContainer } from "../lamp";
import { TextGenerateEffect } from "../text-generate-effect"
import { motion } from "framer-motion";

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