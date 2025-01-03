import axios, { AxiosError } from "axios";
import { IRoom } from "interfaces/Room";
import { useQuery } from "react-query";
import { roomsConfig } from "utils/axiosConfig/rooms/roomsConfig";

const getRooms = async () => {
  const response = await axios(roomsConfig);

  return response.data;
};

const useGetRooms = () => {
  const {
    data: rooms,
    error: roomsError,
    isLoading: roomsIsLoading,
  } = useQuery<boolean, AxiosError, IRoom[], "roomsData">(
    "roomsData",
    getRooms
  );

  return { rooms, roomsError, roomsIsLoading };
};

export default useGetRooms;
