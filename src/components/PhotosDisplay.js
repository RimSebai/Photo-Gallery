import React, { Component } from 'react';
class PhotosDisplay extends Component {
  handleChange = event => {
    event.preventDefault();
    this.props.handleDisplayChanges(event.target.value);
  };
  render() {
    return (
      <div>
        <label>Display </label>
        <select onChange={this.handleChange}>
          <option value="photos1">Row</option>
          <option value="photos2">Column</option>
        </select>
      </div>
    );
  }
}

export default PhotosDisplay;
