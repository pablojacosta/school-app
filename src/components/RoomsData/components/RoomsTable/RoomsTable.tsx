import { IRoomsTable } from "interfaces/RoomsTable";
import styles from "./RoomsTable.module.scss";
import RoomManage from "../RoomManage";

const RoomsTable = ({ roomsData }: IRoomsTable) => {
  return (
    <div className={styles.roomsTable}>
      <div className={`${styles.header} ${styles.row}`}>
        <p className={styles.id}>ID</p>
        <p className={styles.name}>NAME</p>
        <p className={styles.students}>STUDENTS</p>
        <p className={styles.manage}>MANAGE</p>
      </div>
      <div>
        {roomsData.map((room) => {
          const { id, name, students } = room;

          return (
            <div className={styles.row}>
              <p className={styles.id}>{id}</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.students}>{students.length}</p>
              <RoomManage room={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsTable;
