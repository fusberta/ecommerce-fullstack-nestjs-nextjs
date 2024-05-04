'use client'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/utils/utils";
import { useState } from "react";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 rounded-full border-2 border-slate-800 inset-x-0 max-w-md xl:max-w-lg lg:max-w-xl max-[920px]:hidden mx-auto z-[100]", className)}>
            <Menu setActive={setActive}>
                <HoveredLink href="/">
                    Главная
                </HoveredLink>
                <MenuItem setActive={setActive} active={active} item="Каталог">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Клавиши"
                            href="/category/keycaps"
                            src="/images/keycaps_banner.webp"
                            description="C русскими символами или вовсе без них — выберите свои идеальные."
                        />
                        <ProductItem
                            title="Переключатели"
                            href="/category/switches"
                            src="/images/switches_banner.webp"
                            description="Линейные, кликающие или тактильные — выберите под свои задачи."
                        />
                        <ProductItem
                            title="Базы"
                            href="/category/cases"
                            src="/images/base_banner.webp"
                            description="Полноразмерные, TKL или даже 65% — выберите самую удобную для себя."
                        />
                        <ProductItem
                            title="Готовые клавиатуры"
                            href="/category/ready-made"
                            src="/images/ready-made_banner.webp"
                            description="Varmilo, Akko, Leopold и другие зарекомендовавшие себя бренды."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Информация">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="">О нас</HoveredLink>
                        <HoveredLink href="">Контакты</HoveredLink>
                        <HoveredLink href="">Как собрать клавиатуру?</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar