import styles from "./CategoryCard.module.scss";
import bin from "../../assets/icons8-garbage-can-91.png";
import pencil from "../../assets/icons8-pencil-100.png";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../services/category-services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const failNotify = (message: String) => toast.error(message);

interface CardProps {
  title: string;
  taskCount?: number;
  categoryId: number;
}

const deleteCategoryClick = (id: number, count: any) => {
  if (count > 0) {
    failNotify("Only empty categories can be deleted");
  }
  if (count == 0) {
    deleteCategory(id);
  }
};

const CategoryCard = (props: CardProps) => {
  //   console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.middle}>
        <h3>{props.title}</h3>
        {props.taskCount != null && props.taskCount >= 0 && (
          <p>This category has {props.taskCount} task(s)</p>
        )}
        <div>{props.content}</div>
        <div>{props.status}</div>
      </div>
      <div className={styles.outer}>
        <Link to={`/tasks/edit?taskId=${props.taskId}`}>
          <button className={styles.cardButton}>
            <img src={pencil} alt="Tasks" className={styles.cardIcon} />
          </button>
        </Link>
        <button
          onClick={() => deleteCategoryClick(props.categoryId, props.taskCount)}
          className={styles.cardButton}
        >
          <img src={bin} alt="Tasks" className={styles.cardIcon} />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
