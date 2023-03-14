import styles from "./Loading.module.css";

export interface ILoading {
  children?: any;
}

const Loading: React.FC<ILoading> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        {children}
      </div>
    </div>
  );
};

export default Loading;