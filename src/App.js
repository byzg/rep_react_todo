import React, { Component } from 'react';

import './App.css';
import Todo from './Todo/Todo';

class App extends Component {
  render() {
    const name = 'Svetlana';
    return (
      <div className="App">
        <Todo name={name}/>
      </div>
    );
  }
}

export default App;
