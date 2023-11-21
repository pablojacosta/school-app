import { mockedRooms } from "@constants/mockedRooms";
import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";

const RoomsData = () => {
  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <RoomsTable roomsData={mockedRooms} />
    </div>
  );
};

export default RoomsData;
