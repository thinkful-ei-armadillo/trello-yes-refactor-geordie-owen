import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  handleDelete = () => {
    this.deleteCard(this.props.id);
  }

  render() {
    console.log(this.props);
    return (
      <div class="Card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
            <button type="button" onclick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Card;