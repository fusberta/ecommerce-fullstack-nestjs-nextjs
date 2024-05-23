import UserService from "@/services/user.service"
import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"

/**
 * Provides the current user's profile data.
 * @returns The current user's profile data, or `undefined` if the user is not authenticated.
 */
export const useProfile = () => {
    const { user } = useAuth()
    const { data } = useQuery({
        queryKey: ['profile'],
        queryFn: () => UserService.getProfile(),
        enabled: !!user
    })

    return data?.data
}