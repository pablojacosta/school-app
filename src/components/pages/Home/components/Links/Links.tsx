import { Link } from "react-router-dom";
import { ROOMS, STUDENTS } from "constants/routes";
import styles from "./Links.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <Link to={ROOMS} className={styles.links__rooms}>
        ROOMS
      </Link>
      <Link to={STUDENTS} className={styles.links__students}>
        STUDENTS
      </Link>
    </div>
  );
};

export default Links;
