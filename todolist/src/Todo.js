import React from 'react';

function Todo({ id, task, removeTodo }) {
    const handleRemove = () => removeTodo(id);

    return (
        <div>
            <div>{task}</div>
            <button onclick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;