import React, { Component } from 'react';
import UserCard from '../../components/UserCard';
import { connect } from 'react-redux';

import { removeUserFromGroup, updateActiveUser, removeUserFromActiveGroup } from '../../actions';

class GroupDetail extends Component {
  removeUserFromGroup(user) {
    this.props.removeUserFromGroup(user, this.props.group);
    this.props.removeUserFromActiveGroup(user);
  }

  showUserDetail(user) {
    this.props.updateActiveUser(user);
  }

  render() {
    if (!this.props.group) {
      return <div className="detail-view"><span>No group selected</span></div>;
    }

    const { name } = this.props.group;

    return (
      <div className="group-detail detail-view">
        <div className="detail-header">
          <h4>{name}</h4>
          <p>Delete members or view their profile by clicking on the cards below.</p>
        </div>
        <div>
        {this.props.users.map(user => {
          return (
              <UserCard
                key={user.id}
                onRemoveClick={this.removeUserFromGroup.bind(this)}
                onDetailClick={this.showUserDetail.bind(this)}
                user={user}
              />
            )
        })}
        </div>
      </div>
    );
  }
}

export default connect(null, { removeUserFromGroup, updateActiveUser, removeUserFromActiveGroup })(GroupDetail);

