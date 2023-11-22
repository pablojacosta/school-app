import { useQuery } from "react-query";
import { studentsConfig } from "utils/axiosConfig/students/studentsConfig";
import axios, { AxiosError } from "axios";
import { IStudent } from "interfaces/Student";

const getStudents = async () => {
  const response = await axios(studentsConfig);
  return response.data.documents;
};

const useGetStudents = () => {
  const {
    data: students,
    error: studentsError,
    isLoading: studentsIsLoading,
  } = useQuery<boolean, AxiosError, IStudent[], "studentsData">(
    "studentsData",
    getStudents
  );

  return { students, studentsError, studentsIsLoading };
};

export default useGetStudents;
