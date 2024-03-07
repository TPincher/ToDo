import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successNotify = (message: String) => toast.success(message);
const failNotify = (message: String) => toast.error(message);

export const getAllTasks = async () => {
  const response = await fetch("http://localhost:8080/tasks");
  if (!response.ok) {
    failNotify("Failed to get tasks");
    throw new Error("Failed to get tasks");
  }
  const taskData = await response.json();
  return taskData;
};

export const addTask = async (taskData: any) => {
  const response = await fetch("http://localhost:8080/tasks", {
    method: "POST",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to add tasks");
    throw new Error("Failed to add tasks");
  }
  successNotify("Task created!");
  return response.json();
};

export const editTask = async (id: number, taskData: any) => {
  const response = await fetch(`http://localhost:8080/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    failNotify("Failed to edit tasks");
    throw new Error("Failed to edit tasks");
  }
  successNotify("Task edited");
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`http://localhost:8080/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    failNotify("Failed to delete task");
    throw new Error("Failed to delete task");
  }
  console.log(response);
  successNotify("Task deleted");
  return null;
};
