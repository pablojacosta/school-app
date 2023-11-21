import { ISuccessModal } from "interfaces/SuccessModal";
import styles from "./SuccessContent.module.scss";
import CloseIcon from "@components/elements/Icons/CloseIcon";
import { useModalStore } from "store/useModalStore";

const SuccessContent = ({ isRoom }: ISuccessModal) => {
  const text = isRoom ? "created a Room" : "added a Student";
  const { setShowModal } = useModalStore();

  const handleCloseOnClick = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.successContent}>
      <div className={styles.closeIcon} onClick={handleCloseOnClick}>
        <CloseIcon />
      </div>
      <div className={styles.text}>
        <h1>Congrats!</h1>
        <p>You've successfully {text}!</p>
      </div>
    </div>
  );
};

export default SuccessContent;
