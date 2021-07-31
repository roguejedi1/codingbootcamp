import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { Button } from "semantic-ui-react"

// Styles
export const Nav = styled.nav`
    float: right;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    color: #000;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 425px){
        padding-left: 5%;
        width: 450px;
        padding-top: ${({ scrollNav }) => (scrollNav ? "5%" : "5%")};
    }
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    @media screen and (min-width: 1440px){
        padding-left: 10%;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        margin-top: ${({ scrollNav }) => (scrollNav ? "50%" : "2%")};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    float: right;
    @media screen and (max-width: 768px){
        display: none;
    }
    
    @media screen and (min-width: 2560px){
        color: #01bf71;
        // padding-left: 100%;
    }
`;

export const NavItems = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100px;
    font-size: 18px;
    cursor: pointer;
    justify-content: space-between;
    font-family: 'Encode', sans-serif;
`;

export const NavItemLogin = styled.div`
    display: flex;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    color: ${({ scrollNav }) => (scrollNav ? "black" : "black")};
    padding-top: 3%;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled.button`
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(28,22,145,1) 19%, rgba(192,0,255,1) 100%);
    padding: 20px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Encode', sans-serif;
`;

const Navbar = ({ img, alt, toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks>Looking for a remote job?</NavLinks>
                        </NavItems>
                        <NavBtn>
                            <Link href={{pathname: "https://likeava.com"}} target="_blank"><NavBtnLink inverted color="blue">Sign up for free</NavBtnLink></Link>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default Navbar