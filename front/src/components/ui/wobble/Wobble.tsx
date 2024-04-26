"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../wobble-card";

export function Wobble() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full snap-start px-20 pt-24 pb-5">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[200px] lg:min-h-[200px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="max-w-96 text-left text-balance text-sm md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        Быстрая доставка
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Все заказы упаковываются с любовью и отправляются со склада в Санкт-Петербурге.
                    </p>
                </div>
                <Image
                    src="/images/delivery.png"
                    width={300}
                    height={300}
                    alt="linear demo image"
                    className="absolute -right-4 lg:right-[5%] -bottom-0 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[200px]">
                <h2 className="max-w-80  text-center text-balance text-sm md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Специальные акции и скидки для новых клиентов.
                </h2>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-amber-800 min-h-[200px] lg:min-h-[200px] xl:min-h-[200px]">
                <h2 className="max-w-80 text-center text-balance text-sm md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Гарантия 1 год на приобретение готовых клавиатур.
                </h2>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-emerald-700 min-h-[200px] lg:min-h-[200px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="max-w-96 text-left text-balance text-sm md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        Поддержка
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Наши консультанты помогут со сборкой/кастомизацией клавиатуры в течении 7 дней после продажи.
                    </p>
                </div>
                <Image
                    src="/images/support.png"
                    width={300}
                    height={300}
                    alt="linear demo image"
                    className="absolute -right-4 lg:right-[5%] bottom-3 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}