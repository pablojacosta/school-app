import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";
import CreateButton from "../../shared/CreateButton";
import useGetRooms from "hooks/rooms/useGetRooms";

const RoomsData = () => {
  const { rooms, roomsError, roomsIsLoading } = useGetRooms();

  const showRoomsTable = !roomsIsLoading && !roomsError;

  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <CreateButton isRoom />
      {showRoomsTable && <RoomsTable roomsData={rooms} />}
    </div>
  );
};

export default RoomsData;
