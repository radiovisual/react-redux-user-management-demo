import React, { Component } from 'react';
import Users from '../../containers/Users/';
import Groups from '../../containers/Groups';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-frame">
          <h1>Westeros Group Management</h1>
          <div className="content">
            <Users />
            <Groups />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
