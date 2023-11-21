import { CREATE_ROOM, HOME, ROOM, ROOMS, STUDENTS } from "constants/routes";
import { Routes, Route } from "react-router-dom";
import RoomsData from "@components/pages/RoomsData";
import StudentsData from "@components/pages/StudentsData";
import RoomDetails from "@components/pages/RoomsData/components/RoomDetails";
import Home from "@components/pages/Home";
import "@styles/globals.scss";
import styles from "./App.module.scss";
import RoomCreate from "@components/pages/RoomsData/components/RoomCreate";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ROOM} element={<RoomDetails />} />
        <Route path={ROOMS} element={<RoomsData />} />
        <Route path={CREATE_ROOM} element={<RoomCreate />} />
        <Route path={STUDENTS} element={<StudentsData />} />
      </Routes>
    </div>
  );
};

export default App;
