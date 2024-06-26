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

    if (!profile) return null

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
                <div className="text-sm font-bold text-amber-400 py-1 border-x border-b border-gray-800 w-full rounded-sm text-center">
                    <Link href={'/profile'}>
                        {profile.name}
                    </Link>
                </div>

                {!isAdminPanel && (
                    <Button variant="outline" size="default" className="w-full border-0">
                        <Link
                            href={'/my-orders'}
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