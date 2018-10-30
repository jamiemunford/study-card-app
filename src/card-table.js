import React from 'react';
import {CardRow} from './card-row';

export class CardTable extends React.Component {

  render() {
    const cards = [];
    this.props.cards.forEach((card, i) => {
      cards.push(
        <CardRow
          key={i}
          index={card.id}
          front={card.front} 
          back={card.back}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Card Front</th>
            <th>Card Back</th>
          </tr>
        </thead>
        <tbody>{cards}</tbody>
      </table>
    );
  }
}