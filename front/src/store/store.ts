import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist"
import { userSlice } from "./user/user.slice"
import cartSlice from "./cart/cart.slice"
import { filtersSlice } from "./filters/filters.slice"

const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
    cart: cartSlice,
    user: userSlice.reducer,
    filters: filtersSlice.reducer
})

let mainReducer = combinedReducers

if (isClient) {
    const { persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['cart']
    }

    mainReducer = persistReducer(persistConfig, combinedReducers)
}


export const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>