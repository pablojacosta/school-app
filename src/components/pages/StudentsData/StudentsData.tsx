import { TailSpin } from "react-loader-spinner";
import StudentsTable from "../../shared/StudentsTable";
import CreateButton from "@components/shared/CreateButton";
import useGetStudents from "hooks/students/useGetStudents";
import styles from "./StudentsData.module.scss";

const StudentsData = () => {
  const { students, studentsError, studentsIsLoading } = useGetStudents();

  const showStudentsTable = !studentsIsLoading && !studentsError;

  return (
    <div className={styles.studentsData}>
      <h1>Students</h1>
      <CreateButton isRoom={false} />
      {showStudentsTable && <StudentsTable studentsData={students} showRoom />}
      {studentsIsLoading && (
        <div className={styles.spinner}>
          <TailSpin />
        </div>
      )}
    </div>
  );
};

export default StudentsData;
