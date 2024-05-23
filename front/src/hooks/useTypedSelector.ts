import { TypeRootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

/**
 * A typed version of the `useSelector` hook from the React-Redux library.
 * This hook allows you to select a slice of the Redux store state and subscribe to changes in that slice.
 * The selected state is automatically typed based on the `TypeRootState` type, which represents the overall shape of the Redux store.
 */
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;