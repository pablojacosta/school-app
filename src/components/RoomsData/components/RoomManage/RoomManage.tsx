import { Link } from "react-router-dom";
import { ROOM } from "@constants/routes";
import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import { IRoomManage } from "interfaces/RoomManage";
import EyeIcon from "@components/elements/Icons/EyeIcon";
import TrashIcon from "@components/elements/Icons/TrashIcon";
import styles from "./RoomManage.module.scss";

const RoomManage = ({ room, students }: IRoomManage) => {
  const { setRoom } = useSelectedRoomStore();

  const handleViewOnClick = () => {
    setRoom(room, students);
  };

  return (
    <div className={styles.roomManage}>
      <Link to={ROOM}>
        <button
          className={styles.viewButton}
          onClick={() => handleViewOnClick()}
        >
          <EyeIcon />
        </button>
      </Link>
      <button className={styles.deleteButton}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default RoomManage;
