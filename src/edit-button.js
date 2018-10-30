import React from 'react';

export class EditButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.editting ? "Done" : "Edit"}
      </button>
    );
  }
}