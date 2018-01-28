import React, { Component } from 'react';
import Request from 'superagent';

import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  componentWillMount() {
    Request
      .get('http://localhost:3004/items')
      .then((res)=> {
        this.setState({todoList: res.body});
      });
  }

  render() {
    return (
      <div className="Todo">
        { this.state.todoList.map((item, i)=> <div key={i}>{ item.title }</div>) }
      </div>
    )
  }
}