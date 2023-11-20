import EyeIcon from "@components/elements/Icons/EyeIcon";
import styles from "./RoomManage.module.scss";
import PencilIcon from "@components/elements/Icons/PencilIcon";
import TrashIcon from "@components/elements/Icons/TrashIcon";
import { Link } from "react-router-dom";
import { ROOM } from "@constants/routes";
import { IRoom } from "interfaces/Room";
import { useSelectedRoomStore } from "store/useSelectedRoomStore";

interface IRoomManage {
  room: IRoom;
}

const RoomManage = ({ room }: IRoomManage) => {
  const { setRoom } = useSelectedRoomStore();

  const handleViewOnClick = () => {
    setRoom(room);
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
