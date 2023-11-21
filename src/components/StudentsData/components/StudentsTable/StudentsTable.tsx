import { IStudentsTable } from "interfaces/StudentsTable";
import { IStudent } from "interfaces/Student";
import styles from "./StudentsTable.module.scss";

const StudentsTable = ({ studentsData }: IStudentsTable) => {
  return (
    <div className={styles.studentsTable}>
      <div className={`${styles.header} ${styles.row}`}>
        <p className={styles.name}>NAME</p>
        <p className={styles.age}>AGE</p>
        <p className={styles.gender}>GENDER</p>
      </div>
      <div>
        {studentsData.map((student: IStudent) => {
          const { name, age, gender } = student;

          return (
            <div className={styles.row}>
              <p className={styles.name}>{name}</p>
              <p className={styles.age}>{age}</p>
              <p className={styles.gender}>{gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsTable;
