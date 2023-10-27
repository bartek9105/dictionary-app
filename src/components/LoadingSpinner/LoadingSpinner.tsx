import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};
