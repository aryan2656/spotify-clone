import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-left:20px;
padding:20px;
display:flex;
align-items:center;
color:white;
&:hover{
    cursor:pointer;
    background-color:black;
    opacity:0.8;
    transfrom:0.2ms ease-in-out;
}`;

const Song = styled.div`
display:flex;
justify-content:space-around;`;

const Name = styled.p`
margin-right:20px;`;

const Album = styled.p`
margin-right:20px;`;

export default function SongRow({name,album}){
    return (
        <Container>
            <Song>
                <img src=''></img>
                <Name>{name}</Name>
                <Album>{album}</Album>
            </Song>
        </Container>
    );
}