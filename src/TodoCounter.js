import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <h1>
      Haz completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };

