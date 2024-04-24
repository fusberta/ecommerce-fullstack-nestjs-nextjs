import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser, IUserUpdate } from '@/types/user.interface'

const users = '/users/profile'

export const UserService = {
    async getProfile() {
        return instance<IFullUser>({
            url: users,
            method: 'GET',
        })
    },
    async updateProfile(data: IUserUpdate) {
        return instance<IUser>({
            url: users,
            method: 'PUT',
            data
        })
    },
    async toggleFavorite(productId: string | number) {
        return instance<IUser>({
            url: `${users}/favorites/${productId}`,
            method: 'PATCH'
        })
    }
}

export default UserService