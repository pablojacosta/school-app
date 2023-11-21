import { IStudentsTable } from "interfaces/StudentsTable";
import { IStudent } from "interfaces/Student";
import styles from "./StudentsTable.module.scss";

const StudentsTable = ({ studentsData, showRoom }: IStudentsTable) => {
  return (
    <div
      className={`${styles.studentsTable} ${showRoom ? styles.showRoom : ""}`}
    >
      <div className={styles.tableHeader}>
        <p className={styles.name}>NAME</p>
        <p className={styles.age}>AGE</p>
        <p className={styles.gender}>GENDER</p>
        {showRoom && <p className={styles.room}>ROOM</p>}
      </div>
      <ul className={styles.tableBody}>
        {studentsData.map((student: IStudent) => {
          const { name, age, gender, room } = student;

          return (
            <li className={styles.row} key={name}>
              <p className={styles.name}>{name}</p>
              <p className={styles.age}>{age}</p>
              <p className={styles.gender}>{gender}</p>
              {showRoom && <p className={styles.room}>{room}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentsTable;
