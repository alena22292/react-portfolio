import React, { Component } from 'react';
import Task from './task';
import AddTask from './addTask';

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


  getReminder = (id) => {
    const updatedTasks = this.state.tasks.map(task => task.id === id ? { id: task.id, text: task.text, date: task.date, reminder: !task.reminder } : task);
    this.setState({
      tasks: updatedTasks,
    });
  }

  addNewTask = (task) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
  }

  deleteTasks = (id) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    return (
      <div className="page-top">
        <h1>Hello, It is a task manager</h1>
        <AddTask addNewTask={this.addNewTask} key={Date.now()} />
        <div className="tasks-wrapper">
          {this.state.tasks.map((task) => {
            return <Task {...task} getReminder={this.getReminder} deleteTasks={this.deleteTasks} key={task.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tasks;
