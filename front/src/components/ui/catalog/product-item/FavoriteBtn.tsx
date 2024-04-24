import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile"
import UserService from "@/services/user.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FC } from "react"
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const FavoriteBtn: FC<{ productId: number }> = ({ productId }) => {
    const { user } = useAuth()

    if (!user) return null

    const profile = useProfile();
    const { invalidateQueries } = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => UserService.toggleFavorite(productId),
        onSuccess: () => {
            invalidateQueries({ queryKey: ['profile'] })
        }
    });

    if (!profile) return null

    const isExist = profile?.favorites.some(favorite => favorite.id === productId);

    return (
        <div className="w-1/2">
            <button
                onClick={() => mutate()}
                className="text-white text-xl bg-amber-400 px-4 py-2 w-full flex items-center justify-center rounded-bl-2xl"
            >
                {isExist ? <GoHeartFill /> : <GoHeart />}
            </button>
        </div>
    );
}



export default FavoriteBtn