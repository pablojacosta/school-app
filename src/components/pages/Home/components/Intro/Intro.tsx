import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>ROOM APP</h1>
      <div className={styles.intro__text}>
        <p>Hi! Welcome to Room Manager - School App.</p>
        <p>
          In the "Rooms" section you'll be able to overview, create and delete
          rooms.
        </p>
        <p>
          In the "Students" section you can view all student's info and add
          students to the system.
        </p>
        <p>
          IMPORTANT: Please, bear in mind that the backend is deployed at Render
          on a free account, so you will experience a bit of delay on your first
          request.
        </p>
      </div>
    </div>
  );
};

export default Intro;
