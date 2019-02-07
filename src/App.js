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
    let {list, allCards} = this.state.STORE;

    list = list.map(item => item.cardIds.filter((cardId)=> cardId != cardIndex)  )

    delete allCards[cardIndex];

    this.setState({
        STORE: {
          list,
          allCards
        }
    }


  addRandomCard = () => {

  }

  render() {
    let list = this.state.lists.map((list, index) => {
      let cards = list.cardIds.map(id => {
        return (
          {letter: id,...this.state.allCards[id]}
        )
      });
      return <List header={list.header} cards={cards} index={index} deleteCard={this.deleteCard}></List>;
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
