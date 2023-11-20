import { useSelectedRoomStore } from "store/useSelectedRoomStore";
import styles from "./RoomDetails.module.scss";
import { IStudent } from "interfaces/Student";

const RoomDetails = () => {
  const { room } = useSelectedRoomStore();
  const { name, students } = room;

  return (
    <div className={styles.roomDetails}>
      <h1>Room Details</h1>
      <p>Room's name: {name}</p>
      <ul>
        {students.map((student: IStudent) => {
          const { name, age, gender } = student;

          return (
            <>
              <p>{name}</p>
              <p>{age}</p>
              <p>{gender}</p>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomDetails;
