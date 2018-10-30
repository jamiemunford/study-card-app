import React from 'react';

export class HideRowButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.hide ? "Show" : "Hide"}
      </button>
    );
  }
}