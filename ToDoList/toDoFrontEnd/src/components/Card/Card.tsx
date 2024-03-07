import { deleteTask } from "../../services/task-services";
import styles from "./Card.module.scss";
import bin from "../../assets/icons8-garbage-can-91.png";
import checkbox from "../../assets/icons8-unchecked-checkbox-100.png";
import pencil from "../../assets/icons8-pencil-100.png";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  status: string;
  taskId: number;
}

const deleteTaskClick = (id: number) => {
  deleteTask(id);
};

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.outer}>
        <button onClick={() => deleteTaskClick(props.taskId)}>
          <img src={checkbox} alt="Tasks" className={styles.cardButton} />
        </button>
      </div>
      <div className={styles.middle}>
        <h3>{props.title}</h3>
        <div>{props.content}</div>
        <div>{props.status}</div>
      </div>
      <div className={styles.outer}>
        <Link to={`/tasks/edit?taskId=${props.taskId}`}>
          <button>
            <img src={pencil} alt="Tasks" className={styles.cardButton} />
          </button>
        </Link>
        <button onClick={() => deleteTaskClick(props.taskId)}>
          <img src={bin} alt="Tasks" className={styles.cardButton} />
        </button>
      </div>
    </div>
  );
};

export default Card;
