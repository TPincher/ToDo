import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { CategoriesContext } from "../../context/CategoriesContext";
import { StatusContext } from "../../context/StatusContext";
import styles from "./TaskForm.module.scss";

const TaskForm = ({ submit, defaultValues = {}, formType = "Create" }) => {
  const { categories } = useContext(CategoriesContext);
  const { status } = useContext(StatusContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className={styles.TaskForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.TaskLine}>
        <label htmlFor="titleInput">Task Name</label>
        <input
          type="text"
          id="titleInput"
          {...register("title")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Category</label>
        <select {...register("categoryId")} className={styles.Field}>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.TaskLine}>
        <label>Priority</label>
        <select {...register("statusId")} className={styles.Field}>
          {status.map((status: any) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.TaskLine}>
        <label>Task Description</label>
        <textarea
          {...register("content")}
          className={styles.TextBox}
        ></textarea>
        <button>{formType === "Create" ? "Create Task" : "Update Task"}</button>
      </div>
    </form>
  );
};

export default TaskForm;
