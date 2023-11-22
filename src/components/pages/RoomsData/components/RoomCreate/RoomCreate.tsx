import { Field, Form } from "react-final-form";
import { useModalStore } from "store/useModalStore";
import { TailSpin } from "react-loader-spinner";
import { IRoom } from "interfaces/Room";
import { useEffect } from "react";
import useCreateRoom from "hooks/rooms/useCreateRoom";
import styles from "./RoomCreate.module.scss";
import GoBackButton from "@components/shared/GoBackButton";

const RoomCreate = () => {
  const { setShowModal, setIsSuccess, setIsRoom } = useModalStore();
  const { roomMutate, roomIsError, roomIsSuccess, roomIsLoading } =
    useCreateRoom();

  const onSubmit = ({ name, subject }: IRoom) => {
    roomMutate({ name, subject });
  };

  const required = (value: string | number | readonly string[] | undefined) =>
    value ? undefined : "Required";

  useEffect(() => {
    if (roomIsSuccess) {
      setShowModal(true);
      setIsSuccess(true);
      setIsRoom(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomIsSuccess]);

  useEffect(() => {
    if (roomIsError) {
      setShowModal(true);
      setIsSuccess(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomIsError]);

  return (
    <div className={styles.roomCreate}>
      <h1>Create Room</h1>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <>
                    <label className={styles.label}>Name</label>
                    <input {...input} type="text" placeholder="Room's name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Subject</label>
              <div className={styles.radio}>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="math"
                  />{" "}
                  Math
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="literature"
                  />{" "}
                  Literature
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="geography"
                  />{" "}
                  Geography
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="biology"
                  />{" "}
                  Biology
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="history"
                  />{" "}
                  History
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="music"
                  />{" "}
                  Music
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="technology"
                  />{" "}
                  Technology
                </label>
                <label>
                  <Field
                    name="subject"
                    component="input"
                    type="radio"
                    value="other"
                    initialValue="other"
                  />{" "}
                  Other
                </label>
              </div>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            {roomIsLoading && (
              <span className={styles.spinner}>
                <TailSpin height="20" width="20" />
              </span>
            )}
          </form>
        )}
      </Form>
      <GoBackButton />
    </div>
  );
};

export default RoomCreate;
