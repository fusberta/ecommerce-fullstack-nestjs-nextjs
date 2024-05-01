'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import AuthProvider from "@/providers/auth-provider/AuthProvider";
import { TypeComponentAuthFields } from "@/providers/auth-provider/auth-page.types";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export default function Providers({ children }: PropsWithChildren<unknown>) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    ) 
}