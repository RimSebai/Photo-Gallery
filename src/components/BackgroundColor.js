import React, { Component } from 'react';
class BackgroundColor extends Component {
  handleChange = event => {
    event.preventDefault();
    document.body.style = `background-color: ${event.target.value}`;
  };
  render() {
    return (
      <div>
        <label>Background Color </label>
        <input type="color" onChange={this.handleChange} />
      </div>
    );
  }
}

export default BackgroundColor;
