import React from 'react';

const Todo = (props) => {
console.log(props)
    const handleClick = () => {
        props.handleToggle(props.task.id)
    }

    return(
        <div onClick={handleClick} className={`${props.task.completed ? 'completed' : ''}`}>
            <p>{props.task.taskName}</p>
        </div>
    ) 
}
export default Todo;