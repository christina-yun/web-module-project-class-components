import React from 'react';

const ClearButton = props => {
    return(
    <div>
        <button onClick={props.handleClear}>Clear completed tasks</button>
    </div>
    )
}

export default ClearButton;