type TableCellProps = React.DetailedHTMLProps<
    React.TdHTMLAttributes<any>,
    any
> & {
    [key: string]: any;
}

export const Cell = ({children, ...props}: TableCellProps) => {
    return (
        <td {...props}>
            {children}
        </td>
    )
}