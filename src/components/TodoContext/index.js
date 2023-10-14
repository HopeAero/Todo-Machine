import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: safeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS", []);

  const [openModal, setOpenModal] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState("");

  const [validatedStatus, setValidated] = React.useState(false);

  const validating = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (todoIndex !== -1) {
      setValidated(!validatedStatus);
      alert("Ya existe un TODO con ese nombre");
      return false;
    } else {
      return true;
    }
  }

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
      return safeTodos(newTodos);
    }
    newTodos[todoIndex].completed = true;
    return safeTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    safeTodos(newTodos);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    safeTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            handleCloseModal,
            addTodo,
            validating
        }
    }>
        {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
