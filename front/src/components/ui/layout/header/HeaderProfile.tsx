import { useProfile } from "@/hooks/useProfile";
import Image from "next/image";
import { FC } from "react";

const HeaderProfile: FC = () => {
    const profile = useProfile()
    
    return (
        <>
            {profile?.avatarPath && (
                <Image
                    width={50}
                    height={50}
                    src={profile?.avatarPath}
                    alt="profile"
                    className="rounded-full w-10 h-10 border-[2.5px] border-amber-400"
                />
            )}
        </>
    )
}

export default HeaderProfile;