import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile"
import UserService from "@/services/user.service"
import { cn } from "@/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FC, useEffect, useState } from "react"
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

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