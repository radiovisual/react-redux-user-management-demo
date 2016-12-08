import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions';

class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: ''
    }
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({ firstname: '', lastname: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstname}
          onChange={this.onFirstNameChange.bind(this)}
          placeholder="First"
        />

        <input
          type="text"
          value={this.state.lastname}
          onChange={this.onLastNameChange.bind(this)}
          placeholder="Last"
        />

        <button onClick={this.onSubmit.bind(this)}>Add User</button>
      </div>
    );
  }
}

export default connect(null, { addUser })(AddUserForm);
