import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({count}) => {
  // sample values to be replaced
  let [totalTask,setTotalTask] = useState(count);
  let [unCompletedTask,setUnCompletedTask] = useState(0);

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo list</h1>
      <p>You have 
      <b data-cy="header-remaining-task"> {unCompletedTask} </b>
       of
      <b data-cy="header-total-task"> {totalTask} </b>
       tasks remaining
      </p>
    </div>
  );
};

export default TaskHeader;
