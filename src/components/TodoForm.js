import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    //this updates the state to the value of the input box
    handleChange = event => {
        this.setState({
            input:event.target.value
        });
    }
    //this should submit the new task and render it to the screen with all its class properties
    handleClick = event => {
        event.preventDefault();
        console.log(this.props.handleAdd)
        
    }

    render() {
        return(
            <form>
                <input 
                type='text'
                name='task'
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Add Task</button>
            </form>
        )
    }
}
export default TodoForm;