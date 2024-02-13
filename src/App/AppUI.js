import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';


function AppUI() {
    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => (  
            <TodoList>
            {loading && (
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

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
          )}
        </TodoContext.Consumer>
          
        <CreateTodoButton />

        {openModal && (
        <Modal>
          La funcionalidad de agregar TODO
        </Modal>
        )}

        </>
    );
}

export { AppUI };