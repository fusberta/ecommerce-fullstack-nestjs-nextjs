import { useTypedSelector } from "./useTypedSelector";

/**
 * Retrieves the current user state from the Redux store.
 * @returns The current user state.
 */
export const useAuth = () => useTypedSelector(state => state.user);