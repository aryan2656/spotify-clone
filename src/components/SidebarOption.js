import React from 'react';
import styled from 'styled-components';
import { grey } from '@mui/material/colors';

const Container = styled.div`
display:flex;
align-items:center;
`;

const Title = styled.p`
color:grey;
height:40px;
cursor:pointer;
&:hover{
    color:white;
}
transition: 200ms color ease-in
`;

const H4 = styled.h4`
color:grey;
height:40px;
cursor:pointer;
&:hover{
    color:white;
}
transition: 200ms color ease-in`;

const Poster = styled.img``;

export default function SidebarOption({title,Icon,imag}){
    return (
        <Container>
            <Poster></Poster>
            {Icon && <Icon sx={{color:grey[600]}}></Icon>}
            {Icon ? <H4>{title}</H4> : <Title>{title}</Title>}
        </Container>
    );
}