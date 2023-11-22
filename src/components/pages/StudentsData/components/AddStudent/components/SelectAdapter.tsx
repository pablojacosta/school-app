import { ISelectAdapter } from "interfaces/SelectAdapter";
import Select from "react-select";
import styles from "./SelectAdapter.module.scss";

const SelectAdapter = ({ input, meta, ...rest }: ISelectAdapter) => (
  <>
    <Select {...input} {...rest} className={styles.selectAdapter} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </>
);

export default SelectAdapter;
