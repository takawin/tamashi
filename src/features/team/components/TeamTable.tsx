import { SimpleTable } from "../../../components/Elements/Table/SimpleTable"
import { Team } from "../types"

export const TeamTable = () => {
    const data: Team[] = [
        { name: "ZETA DIVISION" },
        { name: "SCARZ" },
        { name: "DAWN" },
        { name: "REJECT" },
        { name: "Crest Gaming" },
        { name: "FENNEL" },
        { name: "AXIZ WAVE" },
    ]
    return (
        <SimpleTable/>
    )
}