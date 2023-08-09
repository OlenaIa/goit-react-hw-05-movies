import { NavLink, Outlet } from "react-router-dom"
import { HeaderStyled, MainTitle } from "./Layout.styled";

export const Layout = () => {
    return <>
        <HeaderStyled>
            <MainTitle>Movies finder</MainTitle>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </HeaderStyled>
        <main>
            <Outlet />
        </main>
        <footer>footer</footer>
    </>
};