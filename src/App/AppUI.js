import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUI({
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
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

export { AppUI };