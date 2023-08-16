import React from 'react';
import styled from "styled-components";
import {loginUrl} from '../spotify.js';

const Container = styled.div`
background-color:black;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
`;

const Image = styled.img`
height:150px;
width:300px;
// border:1px solid white;
margin-bottom:50px;`;

const Link = styled.a`
text-decoration:none;
color:white;
width:200px;
height:50px;
background-color:#1DB954;
text-align:center;
border-radius:40px;
font-weight:550;
padding-top:20px;
`;

export default function Login(){
    return ( 
    <Container>
     <Image src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="Spotify logo"/>
     <Link href={loginUrl}>LOGIN WITH SPOTIFY</Link>
     </Container>
    );
}