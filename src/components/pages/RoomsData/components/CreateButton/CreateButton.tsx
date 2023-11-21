import PlusIcon from "@components/elements/Icons/PlusIcon";
import styles from "./CreateButton.module.scss";
import { Link } from "react-router-dom";
import { CREATE_ROOM } from "@constants/routes";

const CreateButton = () => {
  return (
    <div className={styles.createButton}>
      <Link to={CREATE_ROOM}>
        <button>
          Create Room{" "}
          <span>
            <PlusIcon />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CreateButton;
