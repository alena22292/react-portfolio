import React, { Component } from 'react';

const myTasks = [
  {
    id: 1,
    text: "Shooping",
    date: "Feb 5th at 2:46pm",
    reminder: true
  },
  {
    id: 2,
    text: "Brushing",
    date: "Feb 6th at 6:15pm",
    reminder: true
  },
  {
    id: 3,
    text: "Walking",
    date: "Feb 7th at 6:40am",
    reminder: false
  }
];

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: myTasks,
    };
  }

  render() {
    return (
      <div className="page-top">
        <h1>Hello, It is a task manager</h1>
        <div>
          <h3>{this.state.tasks[0].text}</h3>
        </div>
      </div>
    );
  }
}

export default Tasks;
