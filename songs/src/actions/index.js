//Action creator
export const selectsong = (song) => { //named export should be imported like: import {selectSong} from '../actions'
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

