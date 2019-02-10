import React, { Component } from 'react';
import './List.css';
import Card from './Card';

class List extends Component {
handleRandomCard = () => {
  this.props.addRandomCard(this.props.lid);
  // console.log(this.props.lid)
}

  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card, index) => <Card key={index} id={card.id} title={card.title} content={card.content} deleteCard={this.props.deleteCard} />)}
        </div>
        <button type='button' onClick={this.handleRandomCard}>Add a Random Card</button>
      </section>
    )
  }
}

export default List;
