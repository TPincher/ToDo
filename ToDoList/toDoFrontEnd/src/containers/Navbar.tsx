import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/tasks" className={styles.navbox}>
        <div>Tasks</div>
      </Link>
      <Link to="/tasks/new" className={styles.navbox}>
        <div>New Task</div>
      </Link>
      <Link to="/tasks/categories" className={styles.navbox}>
        <div>Categories</div>
      </Link>
    </div>
  );
};

export default Navbar;
