import React from 'react';
import {RowButtons} from './row-buttons.js';
import { InputField } from './input-field.js';

export class CardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      changed: false
    }

    this.onHide = this.onHide.bind(this);
  }

  onHide() {
    this.setState({
      hide: !this.state.hide
    });
  }

  onInputChange() {
    console.log("Has been altered");
    this.setState({
      changed: true
    });
  }

  render() {
    let front = this.props.front;
    let back = this.props.back;

    return (
      <tr>
        <td>
          <RowButtons 
            index={this.props.index}
            hide={this.state.hide}
            changed={this.state.changed}
            onHide={this.onHide}
            onDelete={this.props.onDelete}
          />
        </td>
        <td>
          <InputField 
            value={front} 
            onChange={this.props.onInputChange}
          />
        </td>
        <td> 
          {this.state.hide ? null : 
            <InputField 
              value={back} 
              onChange={this.props.onInputChange}
          />}
        </td>
      </tr>
    );
  }
}