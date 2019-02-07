import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  handleDelete = () => {
    this.props.deleteCard(this.props.id);
    console.log(this.props.id);
    console.log('delete pressed');
  }

  render() {
    return (
      <div className="Card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
            <button type="button" onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Card;