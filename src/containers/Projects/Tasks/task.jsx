import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="task-wrapper reminder">
        <div className="display-flex-between">
          <h3>{this.props.text}</h3>
          <i class="fas fa-trash-alt"></i>
        </div>
        <p>{this.props.date}</p>
      </div>
    );
  }
}

export default Task;
