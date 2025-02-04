import ErrorMessage from "@components/shared/ErrorMessage";
import Spinner from "@components/shared/Spinner";
import useGetStudents from "hooks/students/useGetStudents";
import { IRoomsTable } from "interfaces/RoomsTable";
import RoomManage from "../RoomManage";
import styles from "./RoomsTable.module.scss";

const RoomsTable = ({ roomsData }: IRoomsTable) => {
  const { students, studentsIsLoading, studentsError } = useGetStudents();
  const showRoomsTable = students && !studentsIsLoading && !studentsError;

  return (
    <>
      {studentsError && <ErrorMessage />}
      {studentsIsLoading && <Spinner />}
      {showRoomsTable && (
        <div className={styles.roomsTable}>
          <div className={styles.tableHeader}>
            <p className={styles.name}>NAME</p>
            <p className={styles.students}>STUDENTS</p>
            <p className={styles.subject}>SUBJECT</p>
            <p className={styles.manage}>VIEW / REMOVE</p>
          </div>
          <ul className={styles.tableBody}>
            {roomsData.map((room) => {
              const { _id: id, name, subject } = room;
              const fileteredStudents = students.filter(
                (student) => student.room === name
              );

              return (
                <li className={styles.row} key={id}>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.students}>{fileteredStudents.length}</p>
                  <p className={styles.subject}>{subject}</p>
                  <RoomManage room={room} students={fileteredStudents} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default RoomsTable;
