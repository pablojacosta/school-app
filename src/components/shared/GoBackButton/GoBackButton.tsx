import { useNavigate } from "react-router-dom";
import ArrowIcon from "@components/elements/Icons/ArrowIcon";
import styles from "./GoBackButton.module.scss";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBackOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.goBackButton}>
      <button onClick={handleGoBackOnClick}>
        <span>
          <ArrowIcon />
        </span>
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
