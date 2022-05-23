import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getdata}) => {
  // NOTE: do not delete `data-cy` key value pair;
  const [task,setTask] = useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add tesk..." onChange={(e)=> setTask(e.target.value)}/>
      <button data-cy="add-task-button" onClick={()=> {getdata(task)}}>+</button>
    </div>
  );
};

export default AddTask;
