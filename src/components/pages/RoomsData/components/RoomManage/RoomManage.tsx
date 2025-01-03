import EyeIcon from "@components/elements/Icons/EyeIcon";
import TrashIcon from "@components/elements/Icons/TrashIcon";
import { ROOM } from "@constants/routes/routes";
import useDeleteRoom from "hooks/rooms/useDeleteRoom";
import { IRoomManage } from "interfaces/RoomManage";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useModalStore } from "store/useModalStore";
import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import styles from "./RoomManage.module.scss";

const RoomManage = ({ room, students }: IRoomManage) => {
  const { setRoom } = useSelectedRoomStore();
  const { setShowModal, setIsSuccess } = useModalStore();
  const {
    deleteRoomMutate,
    deleteRoomIsError,
    deleteRoomIsLoading,
    deleteRoomIsSuccess,
  } = useDeleteRoom(room._id ?? 0);

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
