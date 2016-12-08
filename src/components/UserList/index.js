import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, updateActiveUser, removeUserFromAllGroups } from '../../actions';
import UserCard from '../../components/UserCard';

class UserList extends Component {
  handleRemoveUser(user) {
    this.props.deleteUser(user);
    this.props.removeUserFromAllGroups(user);
  }

  showUserDetail(user) {
    this.props.updateActiveUser(user);
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(user => {
          return (
            <UserCard
              key={user.id}
              onRemoveClick={this.handleRemoveUser.bind(this)}
              onDetailClick={this.showUserDetail.bind(this)}
              user={user}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(null, { deleteUser, updateActiveUser, removeUserFromAllGroups })(UserList);