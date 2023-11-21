import { mockedData } from "@constants/mockedData";
import RoomsTable from "./components/RoomsTable";
import styles from "./RoomsData.module.scss";
import CreateButton from "./components/CreateButton";

const RoomsData = () => {
  return (
    <div className={styles.roomsData}>
      <h1>Rooms</h1>
      <CreateButton />
      <RoomsTable roomsData={mockedData} />
    </div>
  );
};

export default RoomsData;
