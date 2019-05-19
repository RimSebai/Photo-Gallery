import React from 'react';
import './App.css';
import Form from './components/Form';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To Our Photo Gallery</h1>
        <h2>Please choose how would you like the page to look like</h2>
        <Form />
      </div>
    );
  }
}

export default App;
