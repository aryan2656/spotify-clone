import React,{useEffect,useState} from 'react';
import Login from './components/login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer'; 
import Player from './components/Player';

const spotify = new SpotifyWebApi();

export  default function App(){
    const [token,setToken]=useState(null);
    const [{ user }, dispatch]=useDataLayerValue();
      
    useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
        dispatch({
            type:'SET_TOKEN',
            token:_token, 
        });
        setToken(_token);
        console.log("[token]",token);
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => { 
            dispatch({
                type:'SET_USER',
                user, 
            });  
        });
        spotify.getUserPlaylists().then((playlists)=> {
            dispatch({
                type:'SET_PLAYLISTS',
                playlists,
            });
            console.log(playlists);
        });
        spotify.getMySavedTracks().then((tracks)=> {
            dispatch({
                type:'SET_SAVED_TRACKS',
                tracks,
            });
            console.log("Saved Tracks",tracks);
        });
    }

},[]);

console.log("token",token);
    
    return (<div className='app'> 
    {!token && <Login />}
    {token && <Player spotify={spotify}/>}
    </div>);
}