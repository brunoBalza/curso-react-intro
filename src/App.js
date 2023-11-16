import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';


// const defaultTodos = [
//   { text: 'Cocinar para la noche', completed: false },
//   { text: 'Levantarme por la mañana', completed: true },
//   { text: 'Intentar hacer algo', completed: false },
//   { text: 'Desintentar todo', completed: true },
//   { text: 'Desintentar todos', completed: true },
//   { text: 'Desintentar todos1', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName); // va a recibir strings
  
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItems) => {
  localStorage.setItem(itemName, JSON.stringify(newItems))    
    setItem(newItems);
  }
  return [item, saveItem];
}

function App() {


  // let parsedTodos = JSON.parse(localStorageTodos); // Esto es el parceo

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completeTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  // const saveTodos = (newTodos) => {
  //   localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    
  //   setTodos(newTodos);
  // }


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }
  

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter 
        total={totalTodos} 
        completed={completeTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text}
            completed={todo.completed}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;