type TableRowProps = {
    children: React.ReactNode;
}

export const Row = ({children}: TableRowProps) => {
    return (
        <tr>{children}</tr>
    )
}