import React from 'react';

export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({value: this.props.value});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange();
  }

  render() {
    return (
      <input 
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}