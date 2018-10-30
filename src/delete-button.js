import React from 'react';

export class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.trigger = this.trigger.bind(this);
  }

  trigger() {
    this.props.onClick(this.props.index)
  }

  render() {
    return (
      <button
        onClick={this.trigger}
      >
        Delete
      </button>
    );
  }
}