import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    }
  }

  toggleChecked = ()=> {
    const { item } = this.state;
    item.checked = !item.checked
    this.setState({item: item})
  }

  render() {
    const { item } = this.state;
    return (
      <div className="TodoItem">
        <input type="checkbox" defaultChecked={item.checked}
               onChange={this.toggleChecked}/>
        { item.title }{item.checked ? 'True' : 'False'}
      </div>
    )
  }
}