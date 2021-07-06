import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer>
            <Text>Developed By <Link className="developer" to="//github.com/MohammedShajahan7" target="_blank">MohammedShajahan7</Link></Text>
        </FooterContainer>
    );
};
const FooterContainer = styled.footer`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
`;
const Text = styled.p`
    font-size: 19px;
`;
export default Footer
