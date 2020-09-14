import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  // Retreiving tasks from local storage
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  // Storing tasks in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>Reminders and Todos</h1>
      {tasks.map((task, index) => (
        <div key={Math.random()} className="todo">
          <span
            onClick={() => toggleTask(index)}
            className={
              task.isCompleted ? "todo-text todo-completed" : "todo-text"
            }
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />

      <style jsx>{`
        .todo-list {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          height: 100%;
          padding: 0;
          margin: 0;
          font-size: 2em;
          box-sizing: border-box;
          color: #fff;
        }
        h1 {
          color: #222;
          font-size: 2rem;
        }

        .todo-list {
          padding-top: 10px;
          width: 100%;
        }

        .todo {
          background: #fff;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
          padding: 3px 10px;
          font-size: 0.7em;
          margin-bottom: 6px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #000;
        }

        .todo-text {
          cursor: pointer;
          margin-right: 20px;
        }

        .todo-completed {
          text-decoration: line-through;
        }

        button {
          border: 0;
          outline: 0;
          cursor: pointer;
          font-size: 18px;
        }

        .todo button {
          color: #f37070;
          background: transparent;
        }

        input {
          background: #fff;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
          padding: 7px 10px;
          font-size: 0.5em;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          color: #000;
          outline: 0;
          border: 0;
          flex: 1;
        }

        form {
          border-top: 1px solid;
          display: flex;
          padding-top: 10px;
          margin-top: 10px;
        }

        form button {
          color: #2980b9;
          background: #fff;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border-left: 1px solid #ccc;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
          padding: 0 15px;
        }
      `}</style>
    </div>
  );
};

export default TodoList;
