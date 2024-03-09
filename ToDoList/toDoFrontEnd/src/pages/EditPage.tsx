import { useNavigate, useLocation } from "react-router-dom";
import TaskForm from "../components/TaskForm/TaskForm";
import { editTask } from "../services/task-services";
import Navbar from "../containers/Navbar";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import CategoryForm from "../components/CategoryForm/CategoryForm";
import { editCategory } from "../services/category-services";

const EditPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const taskId = searchParams.get("taskId");
  const categoryId = searchParams.get("categoryId");
  const navigator = useNavigate();

  const submitTask = (data: any) => {
    editTask(taskId, data)
      .then((data) => navigator("/tasks"))
      .catch((e) => console.warn(e));
  };

  const submitCategory = (data: any) => {
    editCategory(categoryId, data)
      .then((data) => navigator("/tasks"))
      .catch((e) => console.warn(e));
  };

  return (
    <div>
      {taskId ? (
        <Title title={"Edit Task"} />
      ) : (
        <Title title={"Edit Category"} />
      )}
      <section className={styles.formContainer}>
        {taskId ? (
          <TaskForm submit={submitTask} />
        ) : (
          <CategoryForm submit={submitCategory} />
        )}
      </section>
      <Navbar />
    </div>
  );
};

export default EditPage;
