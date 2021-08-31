import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div className='task-list'>
            {props.taskList.map(task => {
                return(
                    <Todo key={task.id} task={task} handleToggle={props.handleToggle}/>
                )
                
            })}
        </div>
    )
}

export default TodoList;