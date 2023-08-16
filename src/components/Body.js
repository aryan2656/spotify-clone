import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Likeimg from '../images/Likeimg.jpg'
import { useDataLayerValue } from '../DataLayer';
import SongRow from './SongRow';

const Container = styled.div`
// border:1px solid red;
flex:0.8;
background:linear-gradient(rgb(91,87,115),rgba(0,0,0,1));
height:100vh;
color:white;
padding:20px;
`;

const BodyInfo = styled.div`
display:flex;
align-items:flex-end;
padding:20px;
margin-bottom:20px;
background:linear-gradient(rgb(91,87,115),rgba(0,0,0,1));`;

const Image = styled.img`
height:20vw;
margin:0 20px;
box-shadow: 0 4px 60px rgba(0,0,0,0.5);
`;

const Infotext = styled.div`
flex:1;`;

const Title = styled.strong``;

const H2 = styled.h2`
font-size:48px;
margin-bottom:10px;
`;
const Description = styled.p`
font-size:14px;`;

export default function Body({spotify}){
    const [{tracks},dispatch] = useDataLayerValue();
    return (
    <Container>
        <Header spotify={spotify}/>
        <BodyInfo>
            <Image src={Likeimg} alt=''></Image>
            <Infotext>
                <Title>PLAYLISTS</Title>
                <H2>Liked Songs</H2>
                <Description>description</Description>
            </Infotext>
        </BodyInfo>
        <hr></hr>
            {
                tracks?.items?.map(tracks=> (
                    <SongRow name={tracks.track.name} album={tracks.track.album.name} key={tracks.track.id}></SongRow>
                ))
            }
    </Container>);
};

