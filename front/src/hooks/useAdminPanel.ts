import { ADMIN_PANEL_URL } from "@/config/url.config"
import { usePathname } from "next/navigation"

/**
 * A custom React hook that provides information about the current admin panel state.
 * 
 * @returns An object with the following properties:
 * - `pathname`: The current URL pathname.
 * - `isAdminPanel`: A boolean indicating whether the current pathname starts with the `ADMIN_PANEL_URL` constant.
 */
export const useAdminPanel = () => {
    const pathname = usePathname()
    const isAdminPanel = pathname?.startsWith(ADMIN_PANEL_URL)

    return { pathname, isAdminPanel }
}