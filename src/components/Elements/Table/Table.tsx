import { Body } from "./Elements/Body";
import { Cell } from "./Elements/Cell";
import { Header } from "./Elements/Header"
import { HeaderCell } from "./Elements/HeaderCell";
import { Row } from "./Elements/Row";

type TableProps = {
    children: React.ReactNode;
}

export const Table = ({children}: TableProps) => {
    return (<>
        <table>{children}</table>
    </>)
}

Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.Body = Body;
Table.Cell = Cell;