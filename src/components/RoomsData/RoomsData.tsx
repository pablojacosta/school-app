import styles from "./RoomsData.module.scss";
import { mockedRooms } from "@constants/mockedRooms";
import RoomManage from "./components/RoomManage";

const RoomsData = () => {
  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <div className={styles.table}>
        <div className={`${styles.header} ${styles.row}`}>
          <p className={styles.id}>ID</p>
          <p className={styles.name}>NAME</p>
          <p className={styles.students}>STUDENTS</p>
          <p className={styles.manage}>MANAGE</p>
        </div>
        <div>
          {mockedRooms.map((room) => {
            const { id, name, students } = room;

            return (
              <div className={styles.row}>
                <p className={styles.id}>{id}</p>
                <p className={styles.name}>{name}</p>
                <p className={styles.students}>{students.length}</p>
                <RoomManage />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomsData;
