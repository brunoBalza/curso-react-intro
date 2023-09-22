import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Hacer algo', completed: false },
  { text: 'Intentar hacer algo', completed: true },
  { text: 'Desintentar todo', completed: true }
];

function App() {

  return (
    <React.Fragment>
      
      <TodoCounter total={8} completed={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem 
            key={todo.text}
            completed={todo.completed}
            text={todo.text} 
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;