import { Link } from "react-router-dom";
import { ROOM } from "@constants/routes/routes";
import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import { IRoomManage } from "interfaces/RoomManage";
import { TailSpin } from "react-loader-spinner";
import { useModalStore } from "store/useModalStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EyeIcon from "@components/elements/Icons/EyeIcon";
import TrashIcon from "@components/elements/Icons/TrashIcon";
import useDeleteRoom from "hooks/rooms/useDeleteRoom";
import styles from "./RoomManage.module.scss";

const RoomManage = ({ room, students }: IRoomManage) => {
  const { setRoom } = useSelectedRoomStore();
  const { setShowModal, setIsSuccess } = useModalStore();
  const {
    deleteRoomMutate,
    deleteRoomIsError,
    deleteRoomIsLoading,
    deleteRoomIsSuccess,
  } = useDeleteRoom(room.id!);

  const navigate = useNavigate();

  const handleViewOnClick = () => {
    setRoom(room, students);
  };

  const handleDeleteOnClick = () => {
    deleteRoomMutate();
  };

  useEffect(() => {
    if (!deleteRoomIsError) {
      return;
    }

    setIsSuccess(false);
    setShowModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteRoomIsError]);

  useEffect(() => {
    if (!deleteRoomIsSuccess) {
      return;
    }

    navigate(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteRoomIsSuccess]);

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
      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteOnClick()}
      >
        <TrashIcon />
      </button>
      {deleteRoomIsLoading && (
        <span className={styles.spinner}>
          <TailSpin height="20" width="20" />
        </span>
      )}
    </div>
  );
};

export default RoomManage;
