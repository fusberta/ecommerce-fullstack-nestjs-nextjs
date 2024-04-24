"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import styles from './overview/styles.module.css'

export const StickyScroll = ({
    content, images
}: {
    content: {
        title: string;
        description: string;
    }[];
    images: string[];
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest > breakpoint - 0.2 && latest <= breakpoint) {
                setActiveCard(() => index);
            }
        });
    });

    const backgroundColors = [
        "var(--slate-950)",
        "var(--black)",
        "var(--slate-900)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className={styles.scrollContainer}
            ref={ref}
        >
            <div className="div min-h-screen relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-[206px]">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-md mt-10"
                            >
                                {item.description}
                            </motion.p>
                            <motion.button
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="mt-10 px-5 py-2 text-slate-100 bg-slate-800 rounded-full duration-300"
                            >
                                Перейти в каталог
                            </motion.button>
                        </div>
                    ))}

                </div>
            </div>
            <motion.div
                animate={{
                    background: linearGradients[activeCard % linearGradients.length],
                }}
                className="hidden md:flex h-[350px] w-96 rounded-xl bg-white sticky top-48 overflow-hidden items-center justify-center"
            >
                <motion.img
                    src={images[activeCard % images.length]}
                    alt=""
                    className="w-11/12"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                />
            </motion.div>
        </motion.div>
    );
};
