import { Menu, MenuItem } from "@/components/ui/navbar-menu"
import { cn } from "@/utils/utils";
import { useState } from "react";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 rounded-full border-2 border-slate-800 inset-x-0 max-w-md xl:max-w-lg lg:max-w-xl max-[920px]:hidden mx-auto z-[100]", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Главная">
                    <div className="flex flex-col space-y-4 text-sm">

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Каталог">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Контакты">
                    <div className="flex flex-col space-y-4 text-sm">
                            
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar