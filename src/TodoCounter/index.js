import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    totalTodos,
    completeTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completeTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };