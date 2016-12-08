import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser, searchUser, cancelUserSearch } from '../../actions';
import UserList from '../../components/UserList';
import UserDetail from '../../components/UserDetail';
import SearchBar from '../../components/SearchBar';
import AddUserForm from '../AddUserForm';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  searchUser(username) {
    this.props.searchUser(username);
  }

  resetUserSearch() {
    this.props.cancelUserSearch();
  }

  render() {
    if (this.props.users.isRequestingUsers) {
      return <div>Loading Users</div>;
    }

    return (
        <div className="users">
          <h3>Users</h3>

          <div className="toolbar">
            <AddUserForm />
            <SearchBar
              label="User"
              onSearchSubmit={this.searchUser.bind(this)}
              onSearchReset={this.resetUserSearch.bind(this)}
            />
          </div>

          <UserList users={this.props.users.visibleUsers} />
          <UserDetail user={this.props.users.activeUser} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers, addUser, searchUser, cancelUserSearch })(Users);


