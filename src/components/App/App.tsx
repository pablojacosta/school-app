import "@styles/globals.scss";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import RoomsData from "@components/RoomsData";
import StudentsData from "@components/StudentsData";
import { HOME, ROOMS, STUDENTS } from "constants/routes";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={HOME} element={<h1>School App</h1>} />
        <Route path={ROOMS} element={<RoomsData />} />
        <Route path={STUDENTS} element={<StudentsData />} />
      </Routes>
    </div>
  );
};

export default App;
