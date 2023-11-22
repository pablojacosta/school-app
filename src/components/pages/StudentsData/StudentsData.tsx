import { AxiosError } from "axios";
import StudentsTable from "../../shared/StudentsTable";
import CreateButton from "@components/shared/CreateButton";
import useGetStudents from "hooks/students/useGetStudents";
import styles from "./StudentsData.module.scss";
import ErrorMessage from "@components/shared/ErrorMessage";
import Spinner from "@components/shared/Spinner";

const StudentsData = () => {
  const { students, studentsError, studentsIsLoading } = useGetStudents();

  const showStudentsTable = !studentsIsLoading && !studentsError && students;

  return (
    <div className={styles.studentsData}>
      <h1>Students</h1>
      <CreateButton isRoom={false} />
      {showStudentsTable && <StudentsTable studentsData={students} showRoom />}
      {studentsIsLoading && <Spinner />}
      {(studentsError as AxiosError) && <ErrorMessage />}
    </div>
  );
};

export default StudentsData;
