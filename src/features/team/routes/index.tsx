import { Route, Routes } from "react-router-dom"
import { Member } from "./Member"
import { Team } from "./Team"
import { Teams } from "./Teams"

export const TeamRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Teams />}/>
            <Route path=":teamId" element={<Team />}/>
            <Route path=":teamId/member/:playerId" element={<Member />}/>   
        </Routes>
    )
}