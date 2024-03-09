import { deleteTask, getAllTasks } from "../../services/task-services";
import styles from "./Card.module.scss";
import bin from "../../assets/icons8-garbage-can-91.png";
import checkbox from "../../assets/icons8-unchecked-checkbox-100.png";
import tickedbox from "../../assets/icons8-checkbox-50.png";
import pencil from "../../assets/icons8-pencil-100.png";
import { Link } from "react-router-dom";
import { useState } from "react";

interface CardProps {
  title?: string;
  content?: string;
  status?: string;
  taskId?: number;
  category?: string;
  setTasks: any;
}

const Card = (props: CardProps) => {
  const deleteTaskClick = async (id: number) => {
    await deleteTask(id);
    getAllTasks().then((data) => props.setTasks(data));
  };

  const [checked, setChecked] = useState(false);

  const classes = [styles.card];
  if (checked) classes.push(styles.cardchecked);

  const boxCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.join(" ")}>
      <div className={styles.outer}>
        <button onClick={() => boxCheck()} className={styles.cardButton}>
          {checked ? (
            <img src={tickedbox} alt="Tasks" className={styles.cardIcon} />
          ) : (
            <img src={checkbox} alt="Tasks" className={styles.cardIcon} />
          )}
        </button>
      </div>
      <div className={styles.middle}>
        <h3>{props.title}</h3>
        <div>{props.category}</div>
        <div>{props.content}</div>
        <div>Priority: {props.status}</div>
      </div>
      <div className={styles.outer}>
        <Link to={`/tasks/edit?taskId=${props.taskId}`}>
          <button className={styles.cardButton}>
            <img src={pencil} alt="Tasks" className={styles.cardIcon} />
          </button>
        </Link>
        <button
          onClick={() => deleteTaskClick(props.taskId)}
          className={styles.cardButton}
        >
          <img src={bin} alt="Tasks" className={styles.cardIcon} />
        </button>
      </div>
    </div>
  );
};

export default Card;
