import { ISuccessModal } from "interfaces/SuccessModal";
import { useModalStore } from "store/useModalStore";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@components/elements/Icons/CloseIcon";
import styles from "./SuccessContent.module.scss";

const SuccessContent = ({ isRoom }: ISuccessModal) => {
  const text = isRoom ? "created a Room" : "added a Student";
  const { setShowModal } = useModalStore();
  const navigate = useNavigate();

  const handleCloseOnClick = () => {
    setShowModal(false);
    navigate(-1);
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
