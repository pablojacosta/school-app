import { useMutation } from "react-query";
import { BACKEND_URL } from "@constants/env/env";
import { IStudent } from "interfaces/Student";
import axios from "axios";

const useCreateStudent = () => {
  const {
    isLoading: studentIsLoading,
    isError: studentIsError,
    isSuccess: studentIsSuccess,
    mutate: studentMutate,
  } = useMutation(({ firstName, lastName, gender, age, room }: IStudent) =>
    axios.post(`${BACKEND_URL}/students`, {
      firstName,
      lastName,
      gender,
      age,
      room,
    })
  );

  return { studentIsLoading, studentIsError, studentIsSuccess, studentMutate };
};

export default useCreateStudent;
