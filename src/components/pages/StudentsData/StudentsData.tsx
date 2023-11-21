import { mockedStudents } from "@constants/mockedData";
import styles from "./StudentsData.module.scss";
import StudentsTable from "../../shared/StudentsTable";
import CreateButton from "@components/shared/CreateButton";

const StudentsData = () => {
  return (
    <div className={styles.studentsData}>
      <h1>Students</h1>
      <CreateButton isRoom={false} />
      <StudentsTable studentsData={mockedStudents} showRoom />
    </div>
  );
};

export default StudentsData;
