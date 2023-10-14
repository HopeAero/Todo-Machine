import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm({ validating }) {
    const {
        addTodo,
        handleCloseModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const flag = validating(newTodoValue)
        if (flag) {
            addTodo(newTodoValue);
        }
        handleCloseModal();
    }

    const onCancel = () => {
        handleCloseModal();
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe aqui tu nuevo TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };