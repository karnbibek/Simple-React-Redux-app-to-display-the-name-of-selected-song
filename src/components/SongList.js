import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {  // this.props is the props that we receive from mapStateToProps function defined below.
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        // console.log(this.props);

        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => { // (this function gets called with all the data inside of our redux store (state)) converts the State that we get from redux store to props and gets connected to redux through connect function defined below. Also if we call this.props in the renderlist above then it will be equal to this.props === { songs : state.songs }
    // console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList); // connect function automatically creates the action and dispatch function for the action creator obtained from {selectSong}