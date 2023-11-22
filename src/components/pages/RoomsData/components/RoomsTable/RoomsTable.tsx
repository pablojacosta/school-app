import { IRoomsTable } from "interfaces/RoomsTable";
import styles from "./RoomsTable.module.scss";
import RoomManage from "../RoomManage";
import useGetStudents from "hooks/students/useGetStudents";

const RoomsTable = ({ roomsData }: IRoomsTable) => {
  const { students } = useGetStudents();

  return (
    <div className={styles.roomsTable}>
      <div className={styles.tableHeader}>
        <p className={styles.id}>ID</p>
        <p className={styles.name}>NAME</p>
        <p className={styles.students}>STUDENTS</p>
        <p className={styles.subject}>SUBJECT</p>
        <p className={styles.manage}>VIEW / REMOVE</p>
      </div>
      <ul className={styles.tableBody}>
        {roomsData.map((room) => {
          const { id, name, subject } = room;
          const fileteredStudents = students?.filter(
            (student) => student.room === name
          );

          return (
            <li className={styles.row} key={name}>
              <p className={styles.id}>{id}</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.students}>{students?.length}</p>
              <p className={styles.subject}>{subject}</p>
              {fileteredStudents && (
                <RoomManage room={room} students={fileteredStudents} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomsTable;
