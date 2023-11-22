import { useMutation } from "react-query";
import { BACKEND_URL } from "@constants/env/env";
import axios from "axios";

const useDeleteRoom = (roomId: number) => {
  const {
    isLoading: deleteRoomIsLoading,
    isError: deleteRoomIsError,
    isSuccess: deleteRoomIsSuccess,
    mutate: deleteRoomMutate,
  } = useMutation(() => axios.delete(`${BACKEND_URL}/rooms/${roomId}`));

  return {
    deleteRoomIsLoading,
    deleteRoomIsError,
    deleteRoomIsSuccess,
    deleteRoomMutate,
  };
};

export default useDeleteRoom;
