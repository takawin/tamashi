import { RiTeamFill } from 'react-icons/ri'
import { Header } from "../../../components/Elements/Header/Header"
import { TeamTable } from '../components/TeamTable'

export const Teams = () => {
    return (
        <>
            <Header icon={<RiTeamFill />} title="チーム|一覧"/>
            <TeamTable />
        </>
    )
}