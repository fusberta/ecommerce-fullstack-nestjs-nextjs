'use client'

import { Button } from "@/components/ui/button/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useActions } from "@/hooks/useActions";
import { useAdminPanel } from "@/hooks/useAdminPanel";
import { useProfile } from "@/hooks/useProfile";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HeaderProfile: FC = () => {
    const profile = useProfile()
    const { isAdminPanel } = useAdminPanel()

    const { logout } = useActions()

    if (!profile?.avatarPath) return null

    return (
        <Popover>
            <PopoverTrigger className="w-10">
                <Image
                    width={50}
                    height={50}
                    src={profile?.avatarPath}
                    alt="profile"
                    className="rounded-full w-10 h-10 border-[2.5px] border-amber-400"
                />
            </PopoverTrigger>
            <PopoverContent className="w-48 flex flex-col items-center p-1">
                {!isAdminPanel && (
                    <Button variant="outline" size="default" className="w-full border-0">
                        <Link
                            href={'/my-orders'}
                            className=""
                        >
                            Мои заказы
                        </Link>
                    </Button>
                )}
                <Button
                    variant="outline"
                    size="default"
                    className="w-full border-0"
                    onClick={() => logout()}
                >
                    Выйти
                </Button>

            </PopoverContent>
        </Popover>
    )
}

export default HeaderProfile;