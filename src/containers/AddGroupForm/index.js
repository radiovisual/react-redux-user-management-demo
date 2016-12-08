import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../../actions';

class AddGroupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addGroup({ name: this.state.name, members: []});
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onInputChange.bind(this)}
          placeholder="Name"
        />

        <button onClick={this.onSubmit.bind(this)}>Add Group</button>
      </div>
    );
  }
}

export default connect(null, { addGroup })(AddGroupForm);
