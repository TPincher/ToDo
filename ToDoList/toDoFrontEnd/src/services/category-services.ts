import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successNotify = (message: String) => toast.success(message);
const failNotify = (message: String) => toast.error(message);

export const getAllCategories = async () => {
  const response = await fetch("http://localhost:8080/categories");
  if (!response.ok) {
    failNotify("Failed to get categories");
    throw new Error("Failed to get categories");
  }
  const categoryData = await response.json();
  return categoryData;
};

export const addCategory = async (category: any) => {
  const response = await fetch("http://localhost:8080/categories", {
    method: "POST",
    body: JSON.stringify(category),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to add category");
    throw new Error("Failed to add category");
  }
  successNotify("Category created!");
  return response.json();
};

export const deleteCategory = async (id: number) => {
  const response = await fetch(`http://localhost:8080/categories/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    failNotify("Failed to delete category");
    throw new Error("Failed to delete category");
  }
  console.log(response);
  successNotify("Category deleted");
  return null;
};
