'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import AuthProvider from "@/providers/auth-provider/AuthProvider";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

/**
 * Provides the necessary providers and wrappers for the application.
 * 
 * This component sets up the following providers:
 * - QueryClientProvider: Provides the query client for the application's data fetching needs.
 * - Provider: Provides the Redux store for state management.
 * - PersistGate: Handles the persistence of the Redux store.
 * - AuthProvider: Provides the authentication context for the application.
 * 
 * The children components passed to this provider will be wrapped by these providers.
 *
 * @param {PropsWithChildren<unknown>} props - The props for this component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the providers.
 * @returns {JSX.Element} - The Providers component with the wrapped child components.
 */
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