import styles from "./Title.module.scss";

interface CardProps {
  title: string;
}

const Title = (props: CardProps) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};

export default Title;
