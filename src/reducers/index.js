import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'One direction', duration: '4:05' },         
        { title: 'Shape of you', duration: '2:30' },         
        { title: 'I want it that way', duration: '3:15' },         
        { title: 'I like it', duration: '1:45' }         
    ];
};

const selectedSongReducer = (selectedSong=null, action) => { // selectedSong=null provided default value for start
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});