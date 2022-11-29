type TableHeaderCellProps = {
    children: string;
}

export const HeaderCell = ({ children }: TableHeaderCellProps) => {
    return (
        <th>
            {children}
        </th>
    )
}