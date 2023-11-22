import { TailSpin } from "react-loader-spinner";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <TailSpin />
    </div>
  );
};

export default Spinner;
