'use client'

import { FC, PropsWithChildren, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";
import { getAccessToken } from "@/services/auth/auth.helper";
import Cookies from 'js-cookie';
import { usePathname, useRouter } from "next/navigation";
import { REFRESH_TOKEN } from "@/assets/constants";

const AuthProvider: FC<PropsWithChildren<unknown>> = 
({ children }) => {

    const { user } = useAuth();
    const pathname = usePathname();
    const { checkAuth, logout } = useActions();

    useEffect(() => {
        const accessToken = getAccessToken()
        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        if (!refreshToken && user) logout()
    }, [pathname])
        
    const router = useRouter()

    return isOnlyUser ? <DynamicCheckRole Component={{ isOnlyUser }}>
        {children}
    </DynamicCheckRole> : <>{children}</>;
};

export default AuthProvider;