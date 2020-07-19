import React from 'react';

const todos=({todos, deletetodo})=>{
    const todolist=todos.length ? 
    (
        todos.map(todo=>{
            return(
                <div className="collection-item">
                    <span onClick={()=>{deletetodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) :
    (
        <p className="center">You have no todo's left , yay</p>
    );

    return(
        <div className="todos collection">
            {todolist}
        </div>
    );
}

export default todos;
