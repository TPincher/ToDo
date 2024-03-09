import { useContext } from "react";
import Navbar from "../containers/Navbar";
import { CategoriesContext } from "../context/CategoriesContext";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import CategoryCard from "../components/CategoryCard/CategoryCard";

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
                <CategoryCard
                  title={category.name}
                  taskCount={category.tasks.length}
                  categoryId={category.id}
                />
              </li>
            );
          })}
      </ul>
      <Navbar />
    </div>
  );
};

export default CategoriesPage;
