import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  
  const [data,setData] = useState([
    {
      "id": 1,
      "text": "Push up",
      "done": true,
      "count": 2
    },
    {
      "id": 2,
      "text": "Pull Up",
      "done": true,
      "count": 3
    },
    {
      "id": 3,
      "text": "Squats",
      "done": false,
      "count": 1
    },
    {
      "id": 4,
      "text": "Sprint",
      "done": false,
      "count": 5
    },
    {
      "id": 5,
      "text": "Stairs",
      "done": false,
      "count": 200
    }
  ]);
  const addtask = (datas)=> {
    setData([...data,
      {
        id : data.length+1,
        text : datas,
        done:false,
        count: 1
      }   
    ]);
  }
  const deletetodo = (id)=>{
    console.log(id);
    setData(data.filter((el)=> {return el.id!==id}));

  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader count = {data.length}/>
      {/* Add Task */}
      <AddTask getdata={addtask}/>
      {/* Tasks */}
      <Tasks deletetodo={deletetodo} data={data}/>
    </div>
  );
};

export default TaskApp;
