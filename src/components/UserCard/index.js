import React, { Component, PropTypes } from 'react';
import { DraggableTypes } from '../../DraggableTypes';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.user.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class UserCard extends Component {
  handleRemoveUser(user, event) {
    event.preventDefault();
    this.props.onRemoveClick(user);
  }

  handleDetailClick(user, event) {
    event.preventDefault();
    this.props.onDetailClick(user);
  }

  render() {
    const { user, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="user-card" style={{opacity: isDragging ? 0.5 : 1}}>
        <div className="card-names">
          <span className="first">{user.firstname}</span> <span className="last">{user.lastname}</span>
        </div>

        <div className="card-btns">
          <button className="remove-user-btn" onClick={this.handleRemoveUser.bind(this, user)}>X</button>
          <button className="detail-btn" onClick={this.handleDetailClick.bind(this, user)}>View</button>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(DraggableTypes.USER, cardSource, collect)(UserCard);

