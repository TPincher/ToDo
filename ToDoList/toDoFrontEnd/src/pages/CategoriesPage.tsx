import { useContext } from "react";
import Navbar from "../containers/Navbar";
import { CategoriesContext } from "../context/CategoriesContext";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";

const CategoriesPage = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      <Title title={"Categories"} />
      <ul className={styles.list}>
        {categories &&
          categories.map((category: any) => {
            console.log(category);
            return (
              <li key={category.name} className={styles.listItem}>
                {category.name}
              </li>
            );
          })}
      </ul>
      <Navbar />
    </div>
  );
};

export default CategoriesPage;
