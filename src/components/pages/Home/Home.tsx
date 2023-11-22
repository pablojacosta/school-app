import Intro from "./components/Intro";
import Links from "./components/Links";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />
      <Links />
    </div>
  );
};

export default Home;
