import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todo,deletetodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [underline,setUnderline] = useState(false);
  console.log(underline)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onChange={()=> setUnderline(!underline)}/>
      <div data-cy="task-text" className={underline ? "underlineit": "notunderline" }>{todo.text}</div>
      {/* Counter here */}
      <Counter count={todo}/>
      <button data-cy="task-remove-button" onClick={()=> {deletetodo(todo.id)}}>x</button>
    </li>
  );
};

export default Task;
