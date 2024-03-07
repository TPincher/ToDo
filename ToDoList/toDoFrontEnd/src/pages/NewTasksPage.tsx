import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm/TaskForm";
import { addTask } from "../services/task-services";
import Navbar from "../containers/Navbar";
import Title from "../components/Title/Title";

const NewTasksPage = () => {
  const navigator = useNavigate();
  const submit = (data: any) => {
    addTask(data)
      .then((data) => navigator("/tasks"))
      .catch((e) => console.warn(e));
  };

  return (
    <div>
      <Title title={"Add a Task"} />
      <TaskForm submit={submit} />
      <Navbar />
    </div>
  );
};

export default NewTasksPage;
