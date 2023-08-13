import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const PlayerBody = styled.div`
display:flex;`;

export default function Player({spotify}){
    return (
    <div className='player'>
        <PlayerBody>
             <Sidebar />
             <Body/>
        </PlayerBody>
         <Footer/>
    </div>
    );
}