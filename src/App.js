import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import DeleteItem from './DeleteItem';

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateItem onAddItem={this.handleAddItem} />
        <DeleteItem
          onDeleteLastItem={this.handleDeleteItem}
          buttonDisabled={this.noItemsFound()}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
