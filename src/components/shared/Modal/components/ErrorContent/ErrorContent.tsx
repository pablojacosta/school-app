import { useModalStore } from "store/useModalStore";
import CloseIcon from "@components/elements/Icons/CloseIcon";
import styles from "./ErrorContent.module.scss";

const ErrorModal = () => {
  const { setShowModal } = useModalStore();

  const handleCloseOnClick = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.errorContent}>
      <div className={styles.closeIcon} onClick={handleCloseOnClick}>
        <CloseIcon />
      </div>
      <div className={styles.text}>
        <h1>Oops!</h1>
        <p>Something happened.</p>
        <p>Please try again. Sorry!</p>
      </div>
    </div>
  );
};

export default ErrorModal;
