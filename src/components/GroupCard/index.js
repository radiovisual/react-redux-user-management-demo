import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { DraggableTypes } from '../../DraggableTypes';
import zp from 'zeropad';

const userTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem().id, props.group.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GroupCard extends Component {

  handleRemoveGroup(group, event) {
    event.preventDefault();
    this.props.removeButtonClick(group);
  }

  handleDetailClick(group, event) {
    event.preventDefault();
    this.props.onDetailClick(group);
  }

  render() {
    const { connectDropTarget, isOver, group } = this.props;
    const members = group.members.length;
    const s = members === 1 ? '' : 's';

    return connectDropTarget(
      <div className="group-card" style={{opacity: isOver ? .4 : 1}}>
        <div className="group-name">
          <span className="group">{group.name}</span>
          <small><b>{zp(members)}</b> member{s}</small>
        </div>

        <div className="group-btns">
          <button className="detail-btn" onClick={this.handleDetailClick.bind(this, group)}>View</button>
          <button className="remove-btn" onClick={this.handleRemoveGroup.bind(this, group)}>X</button>
        </div>
      </div>
    );
  }
}

GroupCard.propTypes = {
  group: PropTypes.object.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(DraggableTypes.USER, userTarget, collect)(GroupCard);

