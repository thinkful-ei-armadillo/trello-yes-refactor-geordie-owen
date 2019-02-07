import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="Card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
          </div>
    )
  }
}

export default Card;