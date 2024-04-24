import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className="">
            {children}
        </div>
    )
}