import { useEffect, useState } from "react";
import { getAllTasks } from "../services/task-services";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((taskData) => setTasks(taskData))
      .catch((e) => console.warn(e.message));
    console.log(tasks);
  }, []);

  return (
    <div>
      <h1>TasksPage</h1>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TasksPage;
