"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../wobble-card";

export function Wobble() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full snap-start px-20 py-6">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[400px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="max-w-80 text-left text-balance text-sm md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Быстрая доставка
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Все заказы упаковываются с любовью и отправляются со склада в Санкт-Петербурге.
                    </p>
                </div>
                <Image
                    src="/images/delivery.png"
                    width={400}
                    height={400}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[0%] -bottom-0 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[200px]">
                <h2 className="max-w-80  text-left text-balance text-sm md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-sm/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[500px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Signup for blazing-fast cutting-edge state of the art Gippity AI
                        wrapper today!
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-sm/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                <Image
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}