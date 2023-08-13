import React from 'react';
import styled from 'styled-components';
import Sidebarlogoimg from "../images/Spotify_Logo_RGB_White.png";
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from '../DataLayer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

const Container = styled.div`
border: 1px solid black;
height:100vh;
flex:0.2;
color:white;
height:100vh;
background-color:#040404;
min-width:230px;
padding-left:10px;
padding-right:10px;`;

const SidebarLogo = styled.img`
object-fit:contain;
height:100px;
width:170px;
margin-right:auto;
margin-top:5px; `;

const Line = styled.hr`
border:1px solid #282828;
width:90%;
margin:10px auto; `;

const Break = styled.br``;

const SidebarTitle = styled.strong`
margin-left:10px;
padding:5px;
font-size:12px;`;

export default function Sidebar(){
  const [{ playlists }, dispatch]=useDataLayerValue();
    return (
    <Container>
      <SidebarLogo src={Sidebarlogoimg}></SidebarLogo>
      <SidebarOption title="Home" Icon={HomeOutlinedIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchOutlinedIcon}></SidebarOption>
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon}></SidebarOption>
      <Break></Break>
      <SidebarTitle>PLAYLISTS</SidebarTitle>
      <Line></Line>
      {
        playlists?.items?.map(playlists => (
          <SidebarOption title={playlists}></SidebarOption>
        ))
      }
    </Container>);
};