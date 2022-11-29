import { PropsWithChildren } from "react";

type TableHeaderProps = {
    children: React.ReactNode;
}

export const Header: React.FC<PropsWithChildren<TableHeaderProps>> = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>
    )
}