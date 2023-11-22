import { useQuery } from "react-query";
import { roomsConfig } from "utils/axiosConfig/rooms/roomsConfig";
import axios, { AxiosError } from "axios";
import { IRoom } from "interfaces/Room";

const getRooms = async () => {
  const response = await axios(roomsConfig);
  return response.data.documents;
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
