import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface StatusItem {
  name: string;
}

const failNotify = (message: String) => toast.error(message);

export const getAllStatuses = async () => {
  const response = await fetch("http://localhost:8080/status");
  if (!response.ok) {
    failNotify("Failed to get statuses");
    throw new Error("Failed to get statuses");
  }
  const statusData = await response.json();
  return statusData;
};
