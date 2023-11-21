import PlusIcon from "@components/elements/Icons/PlusIcon";
import styles from "./CreateButton.module.scss";
import { Link } from "react-router-dom";
import { ADD_STUDENT, CREATE_ROOM } from "@constants/routes/routes";
import { ICreateButton } from "interfaces/CreateButton";

const CreateButton = ({ isRoom }: ICreateButton) => {
  const link = isRoom ? CREATE_ROOM : ADD_STUDENT;
  const text = isRoom ? "Create Room" : "Add Student";

  return (
    <div className={styles.createButton}>
      <Link to={link}>
        <button>
          {text}{" "}
          <span>
            <PlusIcon />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CreateButton;
