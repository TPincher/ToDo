import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { CategoriesContext } from "../../context/CategoriesContext";
import { StatusContext } from "../../context/StatusContext";

const TaskForm = ({ submit, defaultValues = {}, formType = "Create" }) => {
  const { categories } = useContext(CategoriesContext);
  const { status } = useContext(StatusContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="titleInput">Title</label>
        <input type="text" id="titleInput" {...register("title")} />
      </div>

      <div>
        <label>Category</label>
        <select {...register("categoryId")}>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Status</label>
        <select {...register("statusId")}>
          {status.map((status: any) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Content</label>
        <textarea {...register("content")}></textarea>
        <button>{formType === "Create" ? "Create Task" : "Update Task"}</button>
      </div>
    </form>
  );
};

export default TaskForm;
