import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border:1px solid red;
flex:0.8;
background:linear-gradient(rgb(91,87,115),rgba(0,0,0,1));
height:100vh;
color:white;
`;

export default function Body(){
    return (
    <Container>
    <h2>This is body</h2>
    </Container>);
};

