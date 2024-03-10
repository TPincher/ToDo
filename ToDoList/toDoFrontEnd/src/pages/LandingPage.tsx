import Navbar from "../containers/Navbar";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.introContainer}>
      <Title title={"About this Project"} />
      <div className={styles.intro}>
        <p>
          This to-do list project was created to practice developing an
          end-to-end application. It uses a Java/Spring backend, a MySQL
          database with three linked tables, and React with TypeScript.
        </p>
        <p>
          To use the application, you will need to edit the username and
          password on the example.properties file to connect to your own
          database.
        </p>
        <p>
          The buttons at the bottom will, from left to right, check, edit or
          delete current tasks, add new tasks, and check, edit or delete
          categories. You will have to add a category before adding any tasks,
          and categories cannot be deleted unless they are empty.
        </p>
        <p>More information is available in the Read.me file.</p>
      </div>
      <Navbar />
    </div>
  );
};

export default LandingPage;
