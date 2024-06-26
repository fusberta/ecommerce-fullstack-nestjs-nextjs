'use client'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { useAdminPanel } from "@/hooks/useAdminPanel";
import { useAuth } from "@/hooks/useAuth";
import { useCategories } from "@/hooks/useCategories";
import { cn } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    const { user } = useAuth()

    const { isAdminPanel, pathname } = useAdminPanel()

    const categories = useCategories()

    if (!categories.data) return null

    return (
        <div className={cn("fixed top-10 rounded-full border-2 border-slate-800 inset-x-0 max-w-md xl:max-w-lg lg:max-w-xl max-lg:text-sm whitespace-nowrap mx-auto z-[100]", className)}>
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
                        <MenuItem setActive={setActive} active={active} item="Каталог" isLink>
                            <div className="text-sm grid grid-cols-2 gap-10 p-4 whitespace-normal">
                                <ProductItem
                                    title="Клавиши"
                                    href={`/explorer?page=1&categoryId=${categories.data.find(e => e.name === "Keycaps")?.id}`}
                                    src="/images/keycaps_banner.webp"
                                    description="C русскими символами или вовсе без них — выберите свои идеальные."
                                />
                                <ProductItem
                                    title="Переключатели"
                                    href={`/explorer?page=1&categoryId=${categories.data.find(e => e.name === "Switches")?.id}`}
                                    src="/images/switches_banner.webp"
                                    description="Линейные, кликающие или тактильные — выберите под свои задачи."
                                />
                                <ProductItem
                                    title="Базы"
                                    href={`/explorer?page=1&categoryId=${categories.data.find(e => e.name === "Bases")?.id}`}
                                    src="/images/base_banner.webp"
                                    description="Полноразмерные, TKL или даже 65% — выберите самую удобную для себя."
                                />
                                <ProductItem
                                    title="Готовые клавиатуры"
                                    href={`/explorer?page=1&categoryId=${categories.data.find(e => e.name === "Ready Made")?.id}`}
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
                        {!user && (
                            <HoveredLink href="/auth">
                                Авторизация
                            </HoveredLink>
                        )}
                        {user?.isAdmin && (
                            <HoveredLink href="/admin">
                                Админ панель
                            </HoveredLink>
                        )}

                    </>
                )}
            </Menu>
        </div>
    )
}

export default Navbar