import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const {
    totalTodos: total,
    completedTodos: completed,
  } = React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      {total === completed ? (
        <>
          Has completado todos los TODOs <span>🎉 </span> 
          <span>{completed}</span>
        </>
      ) : (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span>
        </>
      )}{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
