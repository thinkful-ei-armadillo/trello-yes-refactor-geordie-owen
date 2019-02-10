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
    // console.log(`cardIndex is: ${cardIndex}`);
    const newLists = lists.map(list => {
      list.cardIds = list.cardIds.filter(index => {
        return index !== cardIndex
      });
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



  addRandomCard = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard();
    // const randomKeys = {
    //   title: random.title,
    //   content: random.content
    // }
    // const rID = random.id;
    // console.log(randomKeys);

    let newLists = this.state.STORE.lists

    newLists.map(list => {
      if(list.id === listId){
        list.cardIds.push(newCard.id)
        // this.state.STORE.lists[listId-1].cardIds.push(random.id)
      }
      return list;
    })
    
    let newAllCards = this.state.STORE.allCards;
    Object.assign(newAllCards, {[newCard.id]: newCard});


    this.setState({
      lists: newLists,
      allCards: newAllCards
    })
    //check if the newCard has been added to registry of ids
    console.log(this.state.STORE.allCards);
    
  }

  render() {
    let list = this.state.STORE.lists.map((lists, index) => {
      let cards = lists.cardIds.map(id => Object.assign({}, this.state.STORE.allCards[id], { id }));
      console.log(`this list has ${cards.length} cards`); //check to see if card is being added to correct list
      console.log(`cards.id is ${cards.id}`)
      return <List header={lists.header} cards={cards} key={index} lid={lists.id} id={cards.id} deleteCard={this.deleteCard} addRandomCard={this.addRandomCard}></List>;
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
