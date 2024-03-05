export const getAllCategories = async () => {
  const response = await fetch("http://localhost:8080/categories");
  if (!response.ok) {
    throw new Error("Failed to get categories");
  }
  const data = await response.json();
  return data;
};
