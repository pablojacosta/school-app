import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>RATHER LABS - SCHOOL APP</h1>
      <div className={styles.intro__text}>
        <p>Hi! Welcome to Rather Labs' School App.</p>
        <p>
          In the "Rooms" section you'll be able to overview, create and delete
          rooms.
        </p>
        <p>
          In the "Students" section you can view all student's info and add
          students to the system.
        </p>
      </div>
    </div>
  );
};

export default Intro;
