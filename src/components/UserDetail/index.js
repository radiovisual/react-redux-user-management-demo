import React from 'react';

export default (props) => {
    if (!props.user) {
      return <div className="user-detail detail-view"><span>No user selected</span></div>;
    }

    const { firstname, lastname, age } = props.user;

    const allegiances = props.user.allegiances ? props.user.allegiances.join(', ') : '';

    return (
      <div className="user-detail detail-view">
        <h4>Profile for: {firstname} {lastname}</h4>
        <div>
          <ul>
            <li><b>Allegiance(s)</b>: {allegiances}</li>
            <li><b>Age</b>: {age}</li>
          </ul>
        </div>
      </div>
    );
}

