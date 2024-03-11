import { useContext, useEffect } from "react";
import Navbar from "../containers/Navbar";
import { CategoriesContext } from "../context/CategoriesContext";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { getAllCategories } from "../services/category-services";
import Button from "../components/Button/Button";
import { CategoryItem } from "../services/category-services";

const CategoriesPage = () => {
  const { setCategories, categories } = useContext(CategoriesContext);

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <div>
      <Title title={"Categories"} />
      <ul className={styles.list}>
        {categories &&
          categories.map((category: CategoryItem, id: number) => {
            return (
              <li key={category.name} className={styles.listItem}>
                <CategoryCard
                  key={id}
                  title={category.name}
                  taskCount={category.tasks.length}
                  categoryId={category.id}
                />
              </li>
            );
          })}
        <Button dest={"/tasks/categories/new"} />
      </ul>
      <Navbar />
    </div>
  );
};

export default CategoriesPage;
