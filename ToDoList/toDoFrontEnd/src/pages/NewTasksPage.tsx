import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm/TaskForm";
import { addTask } from "../services/task-services";
import Navbar from "../containers/Navbar";

const NewTasksPage = () => {
  const navigator = useNavigate();
  const submit = (data: any) => {
    addTask(data)
      .then((data) => navigator("/tasks"))
      .catch((e) => console.warn(e));
  };

  return (
    <div>
      <h1>Add new Tasks</h1>
      <TaskForm submit={submit} />
      <Navbar />
    </div>
  );
};

export default NewTasksPage;
