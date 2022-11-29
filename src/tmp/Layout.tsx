import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">記事一覧</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}