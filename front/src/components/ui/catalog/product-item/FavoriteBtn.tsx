import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile"
import UserService from "@/services/user.service"
import { cn } from "@/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FC, useEffect, useState } from "react"
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

/**
 * A React functional component that renders a button to toggle the favorite status of a product.
 *
 * @param {object} props - The component props.
 * @param {number} props.productId - The ID of the product.
 * @param {string} [props.className] - An optional CSS class name to apply to the button.
 * @returns {JSX.Element | null} The rendered button, or null if the user is not authenticated.
 */
const FavoriteBtn: FC<{ productId: number, className?: string }> = ({ productId, className }) => {
    const { user } = useAuth()

    if (!user) return null

    const profile = useProfile();
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => UserService.toggleFavorite(productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    });

    if (!profile) return null

    const isExist = profile?.favorites.some(favorite => favorite.id === productId);

    return (
        <div className="w-1/2">
            <button
                onClick={() => mutate()}
                className={
                    cn('text-white text-xl bg-amber-400 px-4 py-2 w-full flex items-center justify-center', className)}
            >
                {isExist ? <GoHeartFill /> : <GoHeart />}
            </button>
        </div>
    );
}



export default FavoriteBtn