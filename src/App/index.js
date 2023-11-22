import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { useLocalStorage } from './useLocalStorage';


const defaultTodos = [
  { text: 'Cocinar para la noche', completed: false },
  { text: 'Levantarme por la mañana', completed: true },
  { text: 'Intentar hacer algo', completed: false },
  { text: 'Desintentar todo', completed: true },
  { text: 'Desintentar todos', completed: true },
  { text: 'Desintentar todos1', completed: true },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

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

  console.log('log 1');
  
  // React.useEffect( () => {
  //   console.log('log 2');
  // }, []);
  React.useEffect( () => {
    console.log('log 2 tendria q funcionar aca');
  }, [totalTodos]);

  console.log('log 3');

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
      <AppUI
        totalTodos = { totalTodos }
        completeTodos = { completeTodos }
        searchValue = { searchValue }
        setSearchValue = { setSearchValue }
        searchedTodos = { searchedTodos }
        completeTodo = { completeTodo }
        deleteTodo = { deleteTodo }
      />
  );


}

export default App;