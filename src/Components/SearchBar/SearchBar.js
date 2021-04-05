import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
  }
  render() {
    return (
      <div class="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
