export const getAllStatuses = async () => {
  const response = await fetch("http://localhost:8080/status");
  if (!response.ok) {
    throw new Error("Failed to get statuses");
  }
  const statusData = await response.json();
  return statusData;
};
