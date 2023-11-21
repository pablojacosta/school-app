import { Field, Form } from "react-final-form";
import { mockedRooms } from "@constants/mockedData";
import SelectAdapter from "./components/SelectAdapter";
import styles from "./AddStudent.module.scss";

const AddStudent = () => {
  const onSubmit = () => {
    console.log("SUBMITTED");
  };

  const required = (value: string | number | readonly string[] | undefined) =>
    value ? undefined : "Required";

  return (
    <div className={styles.addStudent}>
      <h1>Add Student</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <>
                    <label className={styles.label}>First Name</label>
                    <input {...input} type="text" placeholder="First name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <div className={styles.field}>
              <Field name="age" validate={required}>
                {({ input, meta }) => (
                  <>
                    <label className={styles.label}>Age</label>
                    <input {...input} type="number" placeholder="Age" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
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
            <div className={styles.roomField}>
              <label className={styles.label}>Room</label>
              <Field
                name="room"
                component={SelectAdapter}
                validate={required}
                options={mockedRooms.map((room) => ({
                  label: room.name,
                  value: room.name,
                }))}
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              onClick={form.reset}
            >
              Submit
            </button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default AddStudent;
