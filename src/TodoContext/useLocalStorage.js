import React from "react";

function useLocalStorage(itemName, initialValue) {
  
    const [item, setItem] = React.useState(initialValue); 
    
    const [loading, setLoading] = React.useState(true); 
    
    const [error, setError] = React.useState(false); 

    React.useEffect (() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName); // va a recibir strings
        
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
  
      }, 2000);
    });
  
    const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))    
      setItem(newItems);
    }
    return {
      item,
      saveItem,
      loading,
      error
    };
  };
  
export { useLocalStorage }

// const defaultTodos = [
//   { text: 'Cocinar para la noche', completed: false },
//   { text: 'Levantarme por la mañana', completed: true },
//   { text: 'Intentar hacer algo', completed: false },
//   { text: 'Desintentar todo', completed: true },
//   { text: 'Desintentar todos', completed: true },
//   { text: 'Desintentar todos1', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));