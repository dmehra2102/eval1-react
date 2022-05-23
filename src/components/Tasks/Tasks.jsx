import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({data,deletetodo}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {data!==null ? <ul key={data.id} data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((todo)=>{
        return <Task deletetodo={deletetodo} todo={todo}/>
      })}
      </ul>
      : <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>}
    </>
  );
};

export default Tasks;
