import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import styles from "./RoomDetails.module.scss";
import StudentsTable from "@components/pages/StudentsData/components/StudentsTable";

const RoomDetails = () => {
  const { room } = useSelectedRoomStore();
  const { name, students } = room;

  return (
    <div className={styles.roomDetails}>
      <h1>Room Details</h1>
      <h2>{name}</h2>
      <StudentsTable studentsData={students} />
    </div>
  );
};

export default RoomDetails;
