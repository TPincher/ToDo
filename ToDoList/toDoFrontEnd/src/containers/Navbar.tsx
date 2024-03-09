import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import plusIcon from "../assets/icons8-plus-250.png";
import checkbox from "../assets/icons8-choose-100.png";
import categories from "../assets/icons8-categorize-64.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/tasks" className={styles.navbox}>
        <div>
          <img src={checkbox} alt="Tasks" className={styles.icon} />
        </div>
      </Link>
      <Link to="/tasks/new" className={styles.navboxcenter}>
        <div>
          <img src={plusIcon} alt="New Task" className={styles.icon} />
        </div>
      </Link>
      <Link to="/tasks/categories" className={styles.navbox}>
        <div>
          <img src={categories} alt="Categories" className={styles.icon} />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
