import React, { Component } from 'react';
import './App.css';
import List from './List';
import { STORE } from './store';

class App extends Component {
  // static defaultProps = STORE;

  state = {
    STORE
  }

  deleteCard = (cardIndex) => {
    let {lists, allCards} = this.state.STORE;

    const newLists = lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardIndex);
      return list;
    });

    delete allCards[cardIndex];

    this.setState({
        STORE: {
          lists: newLists,
          allCards
        }
    })
  }

  addRandomCard = () => {

  }

  render() {
    let list = this.state.STORE.lists.map((lists, index) => {
      let cards = lists.cardIds.map(id => STORE.allCards[id]);
      return <List header={lists.header} cards={cards} key={index} id={index} deleteCard={this.deleteCard}></List>;
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {list}
        </div>
      </main>
    );
  }
}

export default App;
