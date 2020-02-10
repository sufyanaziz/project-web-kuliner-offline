import React from 'react';
import styled from 'styled-components';

const footer = () => (
    <Footer>
        <Text>&copy; Foodie 2019 (Achmad Sufyan Aziz)</Text>
        <Text>Program RPL</Text>
    </Footer>
)
const Footer = styled.div`
    position:absolute;
    background : #3B7239;
    width : 100%;
    display : flex;
    height : 60px;
    margin-top:auto;
    justify-content:center;
    align-items:center;
`;
const Text = styled.div`
    flex:1;
    text-align:center;
    color:white;
`;

export default footer;