import {
  ADD_STUDENT,
  CREATE_ROOM,
  HOME,
  ROOM,
  ROOMS,
  STUDENTS,
} from "@constants/routes/routes";
import { Routes, Route } from "react-router-dom";
import { useModalStore } from "store/useModalStore";
import RoomsData from "@components/pages/RoomsData";
import StudentsData from "@components/pages/StudentsData";
import RoomDetails from "@components/pages/RoomsData/components/RoomDetails";
import Home from "@components/pages/Home";
import Modal from "@components/shared/Modal";
import RoomCreate from "@components/pages/RoomsData/components/RoomCreate";
import AddStudent from "@components/pages/StudentsData/components/AddStudent";
import "@styles/globals.scss";
import styles from "./App.module.scss";

const App = () => {
  const { showModal } = useModalStore();

  return (
    <div className={styles.app}>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ROOM} element={<RoomDetails />} />
        <Route path={ROOMS} element={<RoomsData />} />
        <Route path={CREATE_ROOM} element={<RoomCreate />} />
        <Route path={STUDENTS} element={<StudentsData />} />
        <Route path={ADD_STUDENT} element={<AddStudent />} />
      </Routes>
      {showModal && <Modal />}
    </div>
  );
};

export default App;
