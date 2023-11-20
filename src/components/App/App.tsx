import { HOME, ROOM, ROOMS, STUDENTS } from "constants/routes";
import { Routes, Route } from "react-router-dom";
import RoomsData from "@components/RoomsData";
import StudentsData from "@components/StudentsData";
import RoomDetails from "@components/RoomsData/components/RoomDetails";
import Home from "@components/Home";
import "@styles/globals.scss";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ROOM} element={<RoomDetails />} />
        <Route path={ROOMS} element={<RoomsData />} />
        <Route path={STUDENTS} element={<StudentsData />} />
      </Routes>
    </div>
  );
};

export default App;
