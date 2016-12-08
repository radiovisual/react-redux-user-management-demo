import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  onInputChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  }

  onFormReset() {
    this.props.onSearchReset();
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit.bind(this)}
        onReset={this.onFormReset.bind(this)}>

        <input
          type="text"
          value={this.state.searchTerm}
          placeholder={`Search ${this.props.label}s`}
          onChange={this.onInputChange.bind(this)}
        />

        <button type="submit">Search</button>
        <button type="reset">Cancel</button>
      </form>
    );
  }
}

export default SearchBar;
