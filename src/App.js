import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      IsCompleted: false
    }

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list: list,
      newItem: ""
    });

  }

  itemDeleted=(item)=> {

    const filteredItems= this.state.list.filter(x =>
      x.id!==item.id);
    this.setState({
      list: filteredItems
    })
  }

  itemCompleted = (item) => {
    let key=item.id;
    this.setState(prevState => ({
      list: prevState.list.map(x => x.id === key
        ? { ...x, IsCompleted: !x.IsCompleted }
        : x
      )
    
    }));
  }

  render() {
    return (
      <div className="App">
        <div>
          Ekleme Yap...
              <br />
          <input
            type="text"
            placeholder="Birşeyler yaz..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Ekle
              </button>
          <br />
          <TodoList items={this.state.list} itemCompleted={this.itemCompleted} itemDeleted={this.itemDeleted} />

        </div>
      </div>
    );
  }
}

export default App;
