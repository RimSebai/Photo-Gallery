import React, { Component } from 'react';
import data from '../data';
import PhotosDisplay from './PhotosDisplay';

class NumberOfPhotos extends Component {
  state = {
    sources: data,
    nu: 0,
    displayPhoto: 'photos1',
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ nu: event.target.value });
  };
  handleDisplayChanges = classN => {
    this.setState({ displayPhoto: classN });
  };
  render() {
    let chosenSources = [];
    for (let i = 0; i < this.state.nu; ++i) {
      chosenSources.push(<img src={this.state.sources[i]} alt="NetherlandsPhoto" key={i} />);
    }
    return (
      <div>
        <label>Number of Photos </label>
        <input type="text" onChange={this.handleChange} />
        <br />
        {this.state.nu > 0 && (
          <div>
            <br /> <PhotosDisplay handleDisplayChanges={this.handleDisplayChanges} />
          </div>
        )}
        <br />
        <div className={this.state.displayPhoto}>{chosenSources}</div>
      </div>
    );
  }
}
export default NumberOfPhotos;
