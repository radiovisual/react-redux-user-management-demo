import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups, searchGroup, cancelGroupSearch } from '../../actions';
import SearchBar from '../../components/SearchBar';
import GroupDetail from '../../components/GroupDetail';
import AddGroupForm from '../AddGroupForm';
import GroupList from '../../components/GroupList';
import { getUsersInGroup } from '../../selectors/getUsersInGroup';

class Groups extends Component {
  componentWillMount() {
    this.props.fetchGroups();
  }

  searchGroup(name) {
    this.props.searchGroup(name);
  }

  resetGroupSearch() {
    this.props.cancelGroupSearch();
  }

  renderGroupRow(group) {
    return <div key={group.id}>{group.name} ({group.members.length})</div>;
  }

  render() {
    if (this.props.isRequestingGroups) {
      return <div>Loading Groups</div>;
    }

    return (
      <div className="groups">
        <h3>Groups</h3>

        <div className="toolbar">
          <AddGroupForm />
          <SearchBar
            label="Group"
            onSearchSubmit={this.searchGroup.bind(this)}
            onSearchReset={this.resetGroupSearch.bind(this)}
          />
        </div>

        <GroupList groups={this.props.visibleGroups} />
        <GroupDetail group={this.props.activeGroup} users={this.props.users} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibleGroups: state.groups.visibleGroups,
    activeGroup: state.groups.activeGroup,
    users: getUsersInGroup(state),
    isRequestingGroups: state.groups.isRequestingGroups
  }
}

export default connect(mapStateToProps, { fetchGroups, searchGroup, cancelGroupSearch })(Groups);

