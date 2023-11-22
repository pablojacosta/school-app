import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import styles from "./RoomDetails.module.scss";
import StudentsTable from "@components/shared/StudentsTable";
import NoStudentsMessage from "./components/NoStudentsMessage";
import GoBackButton from "@components/shared/GoBackButton";

const RoomDetails = () => {
  const { room } = useSelectedRoomStore();
  const { name, students, subject } = room;

  return (
    <div className={styles.roomDetails}>
      <h1>Room Details</h1>
      <h2 className={styles.name}>Name: {name}</h2>
      <h2 className={styles.subject}>Subject: {subject}</h2>
      {students.length ? (
        <StudentsTable studentsData={students} />
      ) : (
        <NoStudentsMessage />
      )}
      <GoBackButton />
    </div>
  );
};

export default RoomDetails;
