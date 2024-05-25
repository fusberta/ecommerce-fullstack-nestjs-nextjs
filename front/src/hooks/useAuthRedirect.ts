import { useEffect } from "react"
import { useAuth } from "./useAuth"
import { useRouter } from "next/navigation"

/**
 * A custom React hook that redirects the user to the home page if they are authenticated.
 * 
 * This hook uses the `useAuth` hook to get the current user, and the `useRouter` hook to replace the current route.
 * 
 * If the `user` value is truthy, the hook will replace the current route with the home page ("/").
 */
export const useAuthRedirect = () => {
    const { user } = useAuth()

    const { replace } = useRouter()

    useEffect(() => {
        if (user?.isAdmin) replace("/admin")
        else if (user) replace("/")
    }, [user])
}