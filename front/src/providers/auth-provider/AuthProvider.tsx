'use client'

import { FC, PropsWithChildren, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";
import { getAccessToken } from "@/services/auth/auth.helper";
import Cookies from 'js-cookie';
import { usePathname, useRouter } from "next/navigation";
import { REFRESH_TOKEN } from "@/assets/constants";
import { protectedRoutes } from "./protected-routes.data";
import { ADMIN_PANEL_URL } from "@/config/url.config";
import NotFound from "@/app/not-found";

/**
 * Provides an authentication context for the application.
 * 
 * The `AuthProvider` component is responsible for managing the user's authentication state and handling protected routes.
 * 
 * It checks the user's access token and refresh token to determine if the user is authenticated and authorized to access protected routes.
 * 
 * If the user is not authenticated, the component will redirect them to the login page.
 * 
 * If the user is an admin, the component will render the admin panel.
 * 
 * If the user is authenticated and the current route is protected, the component will render the children.
 * 
 * If the user is authenticated and the current route is the admin panel, the component will render the NotFound component.
 */
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

        const isProtected = protectedRoutes.some(route => pathname?.startsWith(route))

        const isAdmin = pathname?.startsWith(ADMIN_PANEL_URL)

        if (!isProtected && !isAdmin) return <>{children}</>

        if (user?.isAdmin) return <>{children}</>

        if (user && isProtected) return <>{children}</>

        if (user && isAdmin) return <NotFound />

        pathname !== '/auth' && router.replace('/auth')
        return null
    };

export default AuthProvider;