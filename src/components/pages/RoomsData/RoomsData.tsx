import ErrorMessage from "@components/shared/ErrorMessage";
import GoBackButton from "@components/shared/GoBackButton";
import Spinner from "@components/shared/Spinner";
import { AxiosError } from "axios";
import useGetRooms from "hooks/rooms/useGetRooms";
import CreateButton from "../../shared/CreateButton";
import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";

const RoomsData = () => {
  const { rooms, roomsError, roomsIsLoading } = useGetRooms();

  const showRoomsTable = !roomsIsLoading && !roomsError && rooms;

  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <CreateButton isRoom />
      {showRoomsTable && <RoomsTable roomsData={rooms} />}
      {roomsIsLoading && <Spinner />}
      {(roomsError as AxiosError) && <ErrorMessage />}
      <GoBackButton />
    </div>
  );
};

export default RoomsData;
