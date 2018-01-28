import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {
  render() {
    const todoList = [
      'To eat',
      'To drink',
      'To sleep'
    ];
    return (
      <div className="Todo">
        { todoList.map((item)=> <div>{ item }</div>) }
      </div>
    )
  }
}