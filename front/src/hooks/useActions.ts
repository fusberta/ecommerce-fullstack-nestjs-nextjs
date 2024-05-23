import { rootActions } from "@/store/root-actions"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

/**
 * A custom React hook that provides access to the Redux dispatch function and all the root actions.
 * 
 * This hook is useful for dispatching actions from your React components without having to manually
 * import the dispatch function and each individual action creator.
 * 
 * @returns An object containing all the root actions, with each action creator bound to the Redux dispatch function.
 */
export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}