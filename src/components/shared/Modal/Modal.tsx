import { useModalStore } from "store/useModalStore";
import SuccessContent from "./components/SuccessContent";
import ErrorContent from "./components/ErrorContent";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { isSuccess, isRoom } = useModalStore();

  return (
    <div className={styles.modal}>
      {isSuccess ? <SuccessContent isRoom={isRoom} /> : <ErrorContent />}
    </div>
  );
};

export default Modal;
