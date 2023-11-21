import { mockedData } from "@constants/mockedData";
import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";

const RoomsData = () => {
  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <RoomsTable roomsData={mockedData} />
    </div>
  );
};

export default RoomsData;
