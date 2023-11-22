import styles from "./NoStudentsMessage.module.scss";

const NoStudentsMessage = () => {
  return (
    <div className={styles.noStudentsMessage}>
      <p>No students added to this room yet.</p>
    </div>
  );
};

export default NoStudentsMessage;
