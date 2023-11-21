import { IRoomsTable } from "interfaces/RoomsTable";
import styles from "./RoomsTable.module.scss";
import RoomManage from "../RoomManage";

const RoomsTable = ({ roomsData }: IRoomsTable) => {
  return (
    <div className={styles.roomsTable}>
      <div className={styles.tableHeader}>
        <p className={styles.id}>ID</p>
        <p className={styles.name}>NAME</p>
        <p className={styles.students}>STUDENTS</p>
        <p className={styles.manage}>MANAGE</p>
      </div>
      <ul className={styles.tableBody}>
        {roomsData.map((room) => {
          const { id, name, students } = room;

          return (
            <li className={styles.row}>
              <p className={styles.id}>{id}</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.students}>{students.length}</p>
              <RoomManage room={room} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomsTable;
