import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../DataLayer';

const Container = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:30px;`;

const Left = styled.div`
min-width:80px;
flex:0.5;
background-color:white;
color:gray;
border-radius:30px;
display:flex;
align-items:center;
padding:10px;`;

const Right = styled.div`
display:flex;
align-items:center;`;

const Input = styled.input`
border:none;
width:100%;`;

const User = styled.h4`
margin-left:10px;`;

export default function Header(){
    const [{user},dispatch] = useDataLayerValue();
    return (
        <Container>
            <Left>
                <SearchIcon></SearchIcon>
                <Input placeholder='Search for Artists, Songs' type='text'></Input>
            </Left>
            <Right>
                <Avatar src={user?.images[0]?.url}/>
               <User>{user?.display_name}</User>
            </Right>
        </Container>
    );
}