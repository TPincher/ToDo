export const getAllTasks = async () => {
  const response = await fetch("http://localhost:8080/tasks");
  if (!response.ok) {
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
    throw new Error("Failed to add tasks");
  }
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
    throw new Error("Failed to edit tasks");
  }
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`http://localhost:8080/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  console.log(response);
  return null;
};
