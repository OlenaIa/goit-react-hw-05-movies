import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
        <header>
            <h1>Movies finder</h1>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>footer</footer>
    </>
}