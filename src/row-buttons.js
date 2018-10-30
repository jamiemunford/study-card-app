import React from 'react';

export class RowButtons extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.index);
  }

  render() {
    let updateButton = null;

    if (this.props.changed) {
      updateButton = 
        <button onClick={this.props.something}>
          Update
        </button>;
    }

    return (
      <div>
        <button
          onClick={this.onDelete}>
          Delete
        </button>

        <button
          onClick={this.props.onHide}>
          {this.props.hide ? "Show" : "Hide"}
        </button>

        {updateButton}
      </div>
    );
  }
}

/* <HideRowButton
hide={this.state.hide} 
onClick={this.handleHideButton}
/>
<EditButton 
  editting={this.state.editting}
  onClick={this.props.onEdit}
/>
<DeleteButton
  index={this.props.index}
  onClick={this.props.onDelete}
/> */