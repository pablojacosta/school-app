import { TailSpin } from "react-loader-spinner";
import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";
import CreateButton from "../../shared/CreateButton";
import useGetRooms from "hooks/rooms/useGetRooms";
import { AxiosError } from "axios";
import ErrorMessage from "@components/shared/ErrorMessage";

const RoomsData = () => {
  const { rooms, roomsError, roomsIsLoading } = useGetRooms();

  const showRoomsTable = !roomsIsLoading && !roomsError;

  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <CreateButton isRoom />
      {showRoomsTable && <RoomsTable roomsData={rooms} />}
      {roomsIsLoading && (
        <div className={styles.spinner}>
          <TailSpin />
        </div>
      )}
      {(roomsError as AxiosError) && <ErrorMessage />}
    </div>
  );
};

export default RoomsData;
