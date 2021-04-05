import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
        <TrackList
          onRemove={this.props.onRemove}
          isRemoval={true}
          tracks={this.props.playlistTracks}
        />
        <button onSave={this.props.onSave} class="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
