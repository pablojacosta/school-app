import PlusIcon from "@components/elements/Icons/PlusIcon";
import styles from "./CreateButton.module.scss";

const CreateButton = () => {
  return (
    <div className={styles.createButton}>
      <button>
        Create Room{" "}
        <span>
          <PlusIcon />
        </span>
      </button>
    </div>
  );
};

export default CreateButton;
