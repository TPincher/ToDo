import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import plusIcon from "../../assets/icons8-plus-250.png";

interface ButtonProps {
  dest: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <Link to={props.dest}>
        <img src={plusIcon} alt="New Task" className={styles.button} />
      </Link>
    </div>
  );
};

export default Button;
