import React, { Component } from 'react';
import request from 'superagent';

import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      newTodo: { title: '' }
    }
  }

  setNewTodo = (e)=> {
    this.setState({ newTodo: { title: e.target.value } })
  };

  addTodo = ()=> {
    const { todoList, newTodo } = this.state;
    request
      .post('https://my-json-server.typicode.com/byzg/rep_react_todo/items', newTodo)
      .then((todo)=> {
        todoList.push(todo);
        this.setState({ todoList })
      });
  };

  componentWillMount() {
    request
      .get('https://my-json-server.typicode.com/byzg/rep_react_todo/items')
      .then((res)=> {
        this.setState({todoList: res.body});
      });
  }

  render() {
    return (
      <div className="Todo">
        { this.state.todoList.map((item, i)=> <div key={i}>{ item.title }</div>) }
        <input onChange={this.setNewTodo}/>
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}