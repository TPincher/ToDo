import { useNavigate, useLocation } from "react-router-dom";
import TaskForm from "../components/TaskForm/TaskForm";
import { editTask } from "../services/task-services";
import Navbar from "../containers/Navbar";
import Title from "../components/Title/Title";

const EditPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const taskId = searchParams.get("taskId");
  const navigator = useNavigate();
  console.log(taskId);

  const submit = (data: any) => {
    editTask(taskId, data)
      .then((data) => navigator("/tasks"))
      .catch((e) => console.warn(e));
  };

  return (
    <div>
      <Title title={"Edit Task"} />
      <TaskForm submit={submit} />
      <Navbar />
    </div>
  );
};

export default EditPage;
