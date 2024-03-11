import { useEffect, useState } from "react";
import { getAllTasks } from "../services/task-services";
import Navbar from "../containers/Navbar";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import Button from "../components/Button/Button";
import { TaskItem } from "../services/task-services";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((taskData) => setTasks(taskData))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <div>
      <Title title={"Task List"} />
      <ul className={styles.list}>
        {tasks &&
          tasks.map((task: TaskItem, id: number) => {
            return (
              <li className={styles.listItem}>
                <Card
                  key={id}
                  taskId={task.id}
                  title={task.title}
                  content={task.content}
                  status={task.status.name}
                  setTasks={setTasks}
                />
              </li>
            );
          })}
        <Button dest={"/tasks/new"} />
      </ul>
      <div></div>
      <Navbar />
    </div>
  );
};

export default TasksPage;
