import { useRoutes } from "react-router-dom"

import { routes } from "./routes"

export const AppRoutes = () => {
    const router = useRoutes(routes);
    return (
        <>{router}</>
    )
}