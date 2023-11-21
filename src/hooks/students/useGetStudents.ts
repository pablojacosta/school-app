import { useQuery } from "react-query";
import { studentsConfig } from "utils/axiosConfig/students/studentsConfig";
import axios from "axios";

const getStudents = async () => {
  const response = await axios(studentsConfig);
  return response.data.documents;
};

const useGetStudents = () => {
  const {
    data: students,
    error: studentsError,
    isLoading: studentsIsLoading,
  } = useQuery("studentsData", getStudents);

  return { students, studentsError, studentsIsLoading };
};

export default useGetStudents;
