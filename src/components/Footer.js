import React from 'react';
import styled from 'styled-components';
import './Footer.css';
import Babyimg from '../images/Babycoverart.jpg'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Container = styled.div`
position:fixed;
bottom:0;
height:65px;
width:97%;
background-color:#282828;
padding:20px;
display:flex;
justify-content:space-between;`;

const Left = styled.div`
flex:0.3;
display:flex;
align-items:center;`;

const Center = styled.div`
flex:0.4;
padding: 0 100px;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
max-width:300px;
`;

const Right = styled.div`
flex:0.3;
padding: 0 100px;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
max-width:300px;
min-width:100px;`;

const Title = styled.p``;

const Img = styled.img`
height:60px;
width:60px;
margin-right:20px;
object-fit:contain;`;

const SongInfo = styled.div`
color:white;`;

const SongInfoTitle = styled.h4`
margin-bottom:5px;`;

const Des = styled.p`
font-size:12px;`;

export default function Footer(){
    return (
        <Container>
            <Left>
                <Img src={Babyimg} alt=''></Img>
                <SongInfo>
                    <h4>Yeah!</h4>
                    <p>Song</p>
                </SongInfo>
            </Left>
            <Center>
                <ShuffleOutlinedIcon className='footer__green'></ShuffleOutlinedIcon>
                <SkipPreviousIcon className='footer_icon'></SkipPreviousIcon>
                <PlayCircleFilledIcon className='large'></PlayCircleFilledIcon>
                <SkipNextIcon className='footer_icon'></SkipNextIcon>
                <RepeatIcon className='footer__green'></RepeatIcon>
            </Center>
            <Right>         
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </Right>
        </Container>
    );
}