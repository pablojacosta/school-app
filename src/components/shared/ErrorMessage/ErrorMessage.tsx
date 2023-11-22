import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessage}>
      <p>Something happened. Please reload and try again.</p>
    </div>
  );
};

export default ErrorMessage;
