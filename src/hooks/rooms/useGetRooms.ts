import { useQuery } from "react-query";
import { roomsConfig } from "utils/axiosConfig/rooms/roomsConfig";
import axios from "axios";

const getRooms = async () => {
  const response = await axios(roomsConfig);
  return response.data.documents;
};

const useGetRooms = () => {
  const {
    data: rooms,
    error: roomsError,
    isLoading: roomsIsLoading,
  } = useQuery("roomsData", getRooms);

  return { rooms, roomsError, roomsIsLoading };
};

export default useGetRooms;
