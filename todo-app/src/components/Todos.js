import React  from 'react';


const Todos = props => {

    const { todos, deleteTodo } = props;

    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <p key={ todo.id } className="collection-item">
                    <span>{ todo.id }: { todo.title }</span> {''} {''}
                    <button onClick={ () => {deleteTodo(todo.id)} }>X</button>
                </p>
            )
        })
    ) : (
        <p className="center">There are currently no todos</p>
    );

    return (
        <div className="todos collection">
            { todosList }
        </div>
    )
};





export default Todos;