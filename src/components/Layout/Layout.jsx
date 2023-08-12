import { Outlet } from "react-router-dom"
import { HeaderStyled, MainTitle, NavStyled, StyledNavLink } from "./Layout.styled";
import { Suspense } from "react"; 
import { Footer } from "pages/Footer";
    
export const Layout = () => {
    return <>
        <HeaderStyled>
            <MainTitle>Movies finder</MainTitle>
            <NavStyled>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavStyled>
        </HeaderStyled>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};