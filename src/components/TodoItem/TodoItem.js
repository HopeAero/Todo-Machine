import './TodoItem.css';
import { DeleteIcon } from "../Icons/DeleteIcon";
import { CompletdIcon } from "../Icons/CompletedIcon";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <CompletdIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}
export { TodoItem };