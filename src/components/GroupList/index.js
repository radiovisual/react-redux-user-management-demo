import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGroup, addUserToGroup, updateActiveGroup, fetchUsersInGroup } from '../../actions';
import GroupCard from '../../components/GroupCard';

class GroupList extends Component {
  handleRemoveGroup(group) {
    this.props.deleteGroup(group);
  }

  onDropUser(userid, groupid) {
    this.props.addUserToGroup(userid, groupid);
  }

  showGroupDetail(group) {
    this.props.updateActiveGroup(group);
    this.props.fetchUsersInGroup(group);
  }

  render() {
    return (
      <div className="group-list">
        {this.props.groups.map(group => {
          return (
            <GroupCard
              key={group.id}
              onDrop={this.onDropUser.bind(this)}
              removeButtonClick={this.handleRemoveGroup.bind(this)}
              onDetailClick={this.showGroupDetail.bind(this, group)}
              group={group} />
          );
        })}
      </div>
    );
  }
}

export default connect(null, { deleteGroup, addUserToGroup, updateActiveGroup, fetchUsersInGroup })(GroupList);