import styles from "./StudentsData.module.scss";
import StudentsTable from "../../shared/StudentsTable";
import CreateButton from "@components/shared/CreateButton";
import useGetStudents from "hooks/students/useGetStudents";

const StudentsData = () => {
  const { students, studentsError, studentsIsLoading } = useGetStudents();

  const showStudentsTable = !studentsIsLoading && !studentsError;

  return (
    <div className={styles.studentsData}>
      <h1>Students</h1>
      <CreateButton isRoom={false} />
      {showStudentsTable && <StudentsTable studentsData={students} showRoom />}
    </div>
  );
};

export default StudentsData;
