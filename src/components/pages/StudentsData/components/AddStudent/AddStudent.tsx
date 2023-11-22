import { Field, Form } from "react-final-form";
import { ageOptions } from "utils/forms/ageOptions";
import { useModalStore } from "store/useModalStore";
import { TailSpin } from "react-loader-spinner";
import { IStudent } from "interfaces/Student";
import SelectAdapter from "./components/SelectAdapter";
import styles from "./AddStudent.module.scss";
import useGetRooms from "hooks/rooms/useGetRooms";
import Spinner from "@components/shared/Spinner";
import ErrorMessage from "@components/shared/ErrorMessage";
import useCreateStudent from "hooks/students/useCreateStudent";
import { useEffect } from "react";
import GoBackButton from "@components/shared/GoBackButton";

const AddStudent = () => {
  const { setShowModal, setIsSuccess, setIsRoom } = useModalStore();
  const { rooms, roomsIsLoading, roomsError } = useGetRooms();
  const { studentMutate, studentIsError, studentIsLoading, studentIsSuccess } =
    useCreateStudent();

  const onSubmit = ({ firstName, lastName, gender, age, room }: IStudent) => {
    studentMutate({ firstName, lastName, gender, age, room });
  };

  const required = (value: string | number | readonly string[] | undefined) =>
    value ? undefined : "Required";

  useEffect(() => {
    if (studentIsSuccess) {
      setShowModal(true);
      setIsSuccess(true);
      setIsRoom(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentIsSuccess]);

  useEffect(() => {
    if (studentIsError) {
      setShowModal(true);
      setIsSuccess(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentIsError]);

  return (
    <>
      {roomsError && <ErrorMessage />}
      {roomsIsLoading && <Spinner />}
      {rooms && (
        <div className={styles.addStudent}>
          <h1>Add Student</h1>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <Field name="firstName" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <label className={styles.label}>First Name</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="First name"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className={styles.field}>
                  <Field name="lastName" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <label className={styles.label}>Last Name</label>
                        <input {...input} type="text" placeholder="Last name" />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className={styles.selectField}>
                  <label className={styles.label}>Age</label>
                  <Field
                    name="age"
                    component={SelectAdapter}
                    validate={required}
                    options={ageOptions}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Gender</label>
                  <div className={styles.radio}>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="rather not say"
                        initialValue="rather not say"
                      />{" "}
                      Rather not say
                    </label>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="non-binary"
                      />{" "}
                      Non-Binary
                    </label>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="male"
                      />{" "}
                      Male
                    </label>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="female"
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>
                <div className={styles.selectField}>
                  <label className={styles.label}>Room</label>
                  <Field
                    name="room"
                    component={SelectAdapter}
                    validate={required}
                    options={rooms.map((room) => ({
                      label: room.name,
                      value: room.name,
                    }))}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
                {studentIsLoading && (
                  <span className={styles.spinner}>
                    <TailSpin height="20" width="20" />
                  </span>
                )}
              </form>
            )}
          </Form>
          <GoBackButton />
        </div>
      )}
    </>
  );
};

export default AddStudent;
