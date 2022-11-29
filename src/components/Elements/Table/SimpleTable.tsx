import { Table } from "./Table";

export const SimpleTable = () => {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        {"チーム名"}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        {"アイコン"}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{"ZETA"}</Table.Cell>
                    <Table.Cell>{"ZETA_ICON"}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>{"SCARZ"}</Table.Cell>
                    <Table.Cell>{"SCARZ_ICON"}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}