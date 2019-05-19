import React, { Component } from 'react';
import NumberOfPhotos from './NumberOfPhotos';
import BackgroundColor from './BackgroundColor';

class Form extends Component {
  render() {
    console.log(this.props.direction);
    return (
      <div className="container">
        <form>
          <BackgroundColor />
          <br />
          <NumberOfPhotos />
        </form>
      </div>
    );
  }
}

export default Form;
