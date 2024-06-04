import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IAuth } from "./user.interface";
import AuthService from "@/services/auth/auth.service";
import { removeTokensFromStorage } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";

export const register = createAsyncThunk<IAuthResponse, IAuth>(
    "auth/register",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.main('register', data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IAuth>(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.main('login', data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        removeTokensFromStorage();
    }
)

export const checkAuth = createAsyncThunk<IAuthResponse>(
    "auth/check-auth",
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.getNewTokens();
            return response;
        } catch (error) {
            if (errorCatch(error) === 'jwt expired') {
                thunkAPI.dispatch(logout())
            }

            return thunkAPI.rejectWithValue(error);
        }
    }
)