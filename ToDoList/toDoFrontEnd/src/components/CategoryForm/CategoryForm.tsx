import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { CategoriesContext } from "../../context/CategoriesContext";
import { StatusContext } from "../../context/StatusContext";
import styles from "./CategoryForm.module.scss";

const TaskForm = ({ submit, defaultValues = {}, formType = "Create" }) => {
  const { categories } = useContext(CategoriesContext);
  const { status } = useContext(StatusContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className={styles.CategoryForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.CategoryLine}>
        <label htmlFor="nameInput">Category Name</label>
        <input
          type="text"
          id="nameInput"
          {...register("name")}
          className={styles.Field}
        />
      </div>

      <div className={styles.CategoryLine}>
        <button>Create Category</button>
      </div>

      <div>
        <h3>Current categories</h3>
        {categories.map((category) => {
          return <p>{category.name}</p>;
        })}
      </div>
    </form>
  );
};

export default TaskForm;
