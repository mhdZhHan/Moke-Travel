import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Header() {
    return (
        <Nav>
            <Heading><Link to={"/"}><Logo src={require("../../assets/images/logo.svg").default} alt="logo"/></Link></Heading>
            <LoginButton>Login</LoginButton>
        </Nav>
    );
};

const Nav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Heading = styled.h1`
cursor: pointer;
`;
const Logo = styled.img` `;
const LoginButton = styled.button`
    outline: none;
    border: none;
    padding: 8px 30px;
    background-color: #095de7;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
`;
export default Header;
