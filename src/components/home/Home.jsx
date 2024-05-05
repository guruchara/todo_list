import React, { useState } from "react";

// this module css
import styles from "./home.module.css";

function Home() {
  // this for setting the task
  const [task, setTask] = useState("");
  const [add, setAdded] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
    setAdded(false);
    console.log("value", e.target.value);
  };

  const handleDelete = () => {
    setTask("");
    setAdded(false);
  };

  console.log("task22", task);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>TO DO List</h2>
      <div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            onChange={handleChange}
            name="task"
            placeholder="add item..."
          />
        </div>
        {/* this for adding the task  */}
        <div>
          <button
            className={styles.addTaskButton}
            onClick={() => setAdded(true)}
          >
            Add Task
          </button>
        </div>

        {/* this div for the table  */}
        {add && task && (
          <div className={styles.tableContainer}>
            <div className={styles.tableSingle}>
              <p>{task} </p>
              <button
                style={{
                  marginLeft: "10px",
                  height: "36px",
                  color: "red",
                }}
                onClick={() => handleDelete()}
              >
                delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
