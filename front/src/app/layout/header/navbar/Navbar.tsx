'use client'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { useAdminPanel } from "@/hooks/useAdminPanel";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/utils";
import { useState } from "react";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    const { user } = useAuth()

    const { isAdminPanel, pathname } = useAdminPanel()
    return (
        <div className={cn("fixed top-10 rounded-full border-2 border-slate-800 inset-x-0 max-w-md xl:max-w-lg lg:max-w-xl max-[920px]:hidden mx-auto z-[100]", className)}>
            <Menu setActive={setActive}>
                {isAdminPanel ? (
                    <>
                        <HoveredLink href="/admin/products">
                            Продукты
                        </HoveredLink>
                        <HoveredLink href="/admin/categories">
                            Категории
                        </HoveredLink>
                        <HoveredLink href="/admin/reviews">
                            Отзывы
                        </HoveredLink>
                        <HoveredLink href="/admin/orders">
                            Заказы
                        </HoveredLink>
                    </>
                ) : (
                    <>
                        <HoveredLink href="/">
                            Главная
                        </HoveredLink>
                        {!user && (
                            <HoveredLink href="/auth">
                                Авторизация
                            </HoveredLink>
                        )}
                        <MenuItem setActive={setActive} active={active} item="Каталог" isLink>
                            <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Клавиши"
                                    href="/explorer"
                                    src="/images/keycaps_banner.webp"
                                    description="C русскими символами или вовсе без них — выберите свои идеальные."
                                />
                                <ProductItem
                                    title="Переключатели"
                                    href="/explorer"
                                    src="/images/switches_banner.webp"
                                    description="Линейные, кликающие или тактильные — выберите под свои задачи."
                                />
                                <ProductItem
                                    title="Базы"
                                    href="/explorer"
                                    src="/images/base_banner.webp"
                                    description="Полноразмерные, TKL или даже 65% — выберите самую удобную для себя."
                                />
                                <ProductItem
                                    title="Готовые клавиатуры"
                                    href="/explorer"
                                    src="/images/ready-made_banner.webp"
                                    description="Varmilo, Akko, Leopold и другие зарекомендовавшие себя бренды."
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Информация">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/about">О нас</HoveredLink>
                                <HoveredLink href="/contact">Контакты</HoveredLink>
                                <HoveredLink href="/how-to-made">Как собрать клавиатуру?</HoveredLink>
                            </div>
                        </MenuItem>
                    </>
                )}
            </Menu>
        </div>
    )
}

export default Navbar