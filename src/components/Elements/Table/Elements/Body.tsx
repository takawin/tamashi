type TableBodyProps = {
    children: React.ReactNode;
}

export const Body = ({ children }: TableBodyProps) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}