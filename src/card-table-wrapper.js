import React from 'react';
import { CardTable } from './card-table';
import { NewCardButton } from './new-card-button';

import { getJSON, addJSON } from './json-requests.js'
import { deleteJSON } from './json-requests.js'

export class CardTableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.getCards(this.props.url);
  }

  async getCards(url) {
    this.setState({
      cards: await getJSON(url)
    });
  }

  async addCard() {
    const card = JSON.stringify({front: "hi", back: "world"});
    await addJSON(this.props.url, card);
    this.getCards(this.props.url);
  }

  async deleteCard(id) {
    await deleteJSON(this.props.url + id);
    this.getCards(this.props.url);
  }

  async editCard(id) {
    alert("editting card");
    //await editJSON(this.props.url + id);
    //this.getCards(this.props.url);
  }

  render() {
    return (
      <div className="card-table-wrapper">
        <NewCardButton
          onClick={this.addCard}
        />
        <CardTable 
          cards={this.state.cards}
          onDelete={this.deleteCard}
          onEdit={this.editCard}
        />
      </div>
    );
  }
}