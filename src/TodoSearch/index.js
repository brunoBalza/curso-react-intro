import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}) {
    return (
    <input
      placeholder="Agrega un ToDo"
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value);
        }
      }
    />
  );
}

export { TodoSearch };