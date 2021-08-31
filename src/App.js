import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ClearButton from './components/ClearButton';


const data = [
  {
    taskName:'Make the bed',
    id:1,
    completed: false
  },
  {
    taskName:'Go grocery shopping',
    id:2,
    completed: false
  },
  {
    taskName:'Water the plants',
    id:3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: data
    }
  }

  //1: Toggle tasks as being completed or not completed
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      taskList: this.state.taskList.map((item) => {
        if (item.id === id) {
          return ({
            ...item,
            completed:!item.completed
          });
        } else {
          return (item);
        }
      })
    });
  }
  //2: Add new task to to-do list
  handleAdd = (taskName) => {
    const newTask = {
      taskName: taskName,
      id: Date.now(),
      completed:false
    }

    this.setState({
      ...this.state,
      taskList:[...this.state.taskList, newTask]
    });
  }

  //3: Clear to-do list
  handleClear = () => {
    this.setState({
      ...this.state,
      taskList: this.state.taskList.filter((task) => {
        return (task.completed === false);
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList taskList={this.state.taskList} handleToggle={this.handleToggle}/>
        <ClearButton handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
