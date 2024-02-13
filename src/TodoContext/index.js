import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext ();

function TodoProvider({ children }) {
  // let parsedTodos = JSON.parse(localStorageTodos); // Esto es el parceo

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
      <TodoContext.Provider value ={{
        loading,
        error,
        totalTodos,
        completeTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal,
        setOpenModal
      }}>
        {children}      
      </TodoContext.Provider>
    )
    }
    
export { TodoContext, TodoProvider };
