import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'Szaman', artist: 'Paluch', album: 'OKO', id: 1 },
        { name: 'X', artist: 'Slon', album: 'Redrum', id: 2 },
        { name: 'Gehenna', artist: 'Gedz', album: 'Stamina', id: 3 },
      ],
      playlistName: 'Chill',
      playlistTracks: [
        { name: 'W kawałkach', artist: 'Paluch', album: '10/29', id: 4 },
        { name: 'Co Cie Boli', artist: 'Peja', album: 'NA', id: 5 },
        { name: 'Hype', artist: 'Que', album: 'Ezoteryka', id: 6 },
      ],
    };
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  updatePlaylistName(newPlaylistName) {
    this.setState({ playlistName: newPlaylistName });
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  savePlaylist() {
    this.state.playlistTracks.map((track) => track.id);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar
            onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onSave={this.savePlaylist}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
