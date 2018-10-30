import React from 'react';

export class NewCardButton extends React.Component {
  render() {
    return (
      <button 
        onClick={this.props.onClick}
      >
        Add
      </button>
    );
  }
}