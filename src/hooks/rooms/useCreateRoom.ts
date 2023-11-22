import { useMutation } from "react-query";
import { BACKEND_URL } from "@constants/env/env";
import { IRoom } from "interfaces/Room";
import axios from "axios";

const useCreateRoom = () => {
  const {
    isLoading: roomIsLoading,
    isError: roomIsError,
    isSuccess: roomIsSuccess,
    mutate: roomMutate,
  } = useMutation(({ name, subject }: IRoom) =>
    axios.post(`${BACKEND_URL}/rooms`, { name, subject })
  );

  return { roomIsLoading, roomIsError, roomIsSuccess, roomMutate };
};

export default useCreateRoom;
