import { useContext, useEffect, useState } from "react";
import { getAllTasks } from "../services/task-services";
import Navbar from "../containers/Navbar";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import { CategoriesContext } from "../context/CategoriesContext";
import Button from "../components/Button/Button";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const { categories } = useContext(CategoriesContext);

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
          tasks.map((task) => {
            const taskId = task.category.id;
            console.log(taskId);
            console.log(task);
            console.log(categories);
            return (
              <>
                <li className={styles.listItem}>
                  <Card
                    taskId={task.id}
                    title={task.title}
                    content={task.content}
                    status={task.status.name}
                    setTasks={setTasks}
                    // category={categories[taskId - 1].name}
                  />
                </li>
              </>
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
