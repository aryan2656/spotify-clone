 export const initialState = {
    user:null,
    token:false,
    playlists:[],
    playing:false,
    item:null,
    tracks:null,  
};

const reducer = (state,action) => {
    console.log("Reducer",action);

    // Action -> type, [payload]

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            };
        case "SET_SAVED_TRACKS":
            return {
                ...state,
                tracks:action.tracks,
            };
        default:
            return state;
    }
};

export default reducer; 