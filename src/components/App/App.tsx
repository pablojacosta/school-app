import "@styles/globals.scss";
import styles from "./App.module.scss";
import RoomsData from "@components/RoomsData";
import StudentsData from "@components/StudentsData";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>School App</h1>
      <RoomsData />
      <StudentsData />
    </div>
  );
};

export default App;
