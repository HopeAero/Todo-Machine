import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import React from 'react';

function CreateTodoButton() {

  const { setOpenModal, openModal} = React.useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          setOpenModal(!openModal)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton }
