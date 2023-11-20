import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { ROOMS, STUDENTS } from "constants/routes";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>School App</h1>
      <Link to={ROOMS}>ROOMS</Link>
      <Link to={STUDENTS}>STUDENTS</Link>
    </div>
  );
};

export default Home;
