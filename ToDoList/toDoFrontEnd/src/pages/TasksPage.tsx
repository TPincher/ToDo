import { useEffect, useState } from "react";
import { deleteTask, getAllTasks } from "../services/task-services";
import Navbar from "../containers/Navbar";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((taskData) => setTasks(taskData))
      .catch((e) => console.warn(e.message));
    console.log(tasks);
  }, []);

  const handleClick = (id: number) => {
    deleteTask(id);
  };

  return (
    <div>
      <h1>TasksPage</h1>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
      </ul>
      <button onClick={() => handleClick(5)}>Delete</button>
      <Navbar />
    </div>
  );
};

export default TasksPage;
