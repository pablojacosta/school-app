import { FieldInputProps, FieldMetaState } from "react-final-form";

export interface ISelectAdapter {
  input: FieldInputProps<
    string | number | readonly string[] | undefined,
    HTMLElement
  >;
  meta: FieldMetaState<string | number | readonly string[] | undefined>;
}
