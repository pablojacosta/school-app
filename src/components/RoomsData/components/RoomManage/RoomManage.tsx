import EyeIcon from "@components/elements/Icons/EyeIcon";
import styles from "./RoomManage.module.scss";
import PencilIcon from "@components/elements/Icons/PencilIcon";
import TrashIcon from "@components/elements/Icons/TrashIcon";

const RoomManage = () => {
  return (
    <div className={styles.roomManage}>
      <button className={styles.viewButton}>
        <EyeIcon />
      </button>
      <button className={styles.modifyButton}>
        <PencilIcon />
      </button>
      <button className={styles.deleteButton}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default RoomManage;
