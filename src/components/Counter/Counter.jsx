import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  // let count = 0;
  const [counting ,setCounting] = useState(count.count);
  const handlexhnage = (inc)=> {
      setCounting(counting+inc);
  }
  const handledec = (inc)=> {
    if(counting>1){
      setCounting(counting+inc);
    }
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=> handlexhnage(1)}>+</button>
      <span data-cy="task-counter-value">{counting}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=> handledec(-1)}>-</button>
    </div>
  );
};

export default Counter;
