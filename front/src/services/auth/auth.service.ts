import Cookies from 'js-cookie'
import { IAuthResponse, IAuth } from '../../store/user/user.interface'
import axios from 'axios'
import { getContentType } from '@/api/api.helper'
import { saveToStorage } from './auth.helper'
import { instance } from '@/api/api.interceptor'

/**
 * AuthService provides authentication API functions.
 * 
 * main() logs in/registers a user and returns auth response.
 * 
 * getNewTokens() refreshes access token using refresh token.
 */
export const AuthService = {
    async main(type: 'login' | 'register', data: IAuth) {
        const response = await instance<IAuthResponse>({
            url: `/auth/${type}`,
            method: 'POST',
            data,
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await axios.post<string, { data: IAuthResponse }>(
            process.env.SERVER_URL + '/auth/login/access-token', { refreshToken }, { headers: getContentType() }
        )

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    }

}

export default AuthService