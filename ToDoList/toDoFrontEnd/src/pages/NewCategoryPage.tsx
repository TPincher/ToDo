import { useNavigate } from "react-router-dom";
import Navbar from "../containers/Navbar";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";
import { addCategory } from "../services/category-services";
import CategoryForm from "../components/CategoryForm/CategoryForm";

const NewCategoryPage = () => {
  const navigator = useNavigate();
  const submit = (data: any) => {
    addCategory(data)
      .then(() => navigator("/tasks/categories"))
      .catch((e) => console.warn(e));
  };

  return (
    <div>
      <Title title={"Add a Category"} />
      <section className={styles.formContainer}>
        <CategoryForm submit={submit} />
      </section>

      <Navbar />
    </div>
  );
};

export default NewCategoryPage;
