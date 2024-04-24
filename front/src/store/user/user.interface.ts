import { ICartState } from '@/types/cart.interface'
import { IUser } from '@/types/user.interface'

export interface IUserState {
    email: string
    isAdmin: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null
    cart?: ICartState | null
    isLoading: boolean
}

export interface IAuth {
    email: string;
    password: string;
}

export interface IRegister {
    username: string
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser
}