import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className={`${this.props.reminder ? "task-wrapper reminder" : "task-wrapper"}`}>
        <div className="display-flex-between">
          <h3>{this.props.text}</h3>
          <div className="icons">
            <i className="fas fa-trash-alt mr-2" onClick={() => this.props.deleteTasks(this.props.id)}></i>
            <i className="fas fa-stopwatch" onClick={() => this.props.getReminder(this.props.id)}></i>
          </div>
        </div>
        <p>{this.props.date}</p>
      </div>
    );
  }
}

export default Task;
