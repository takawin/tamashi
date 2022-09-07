import { useParams } from "react-router-dom"

export const Member = () => {
    const { teamId, playerId } = useParams();
    return (
        <>
            <h1>Team ID: { teamId }</h1>
            <p>Player ID: { playerId }</p>
        </>
    )
}