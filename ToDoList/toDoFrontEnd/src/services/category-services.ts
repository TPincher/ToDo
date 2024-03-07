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
