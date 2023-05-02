import { InputHTMLAttributes } from "react";
import { TextInput } from "../TextInput/TextInput";
import styles from "./FormInput.module.scss";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  isError?: boolean;
};

export const FormInput = ({
  isError = false,
  errorMessage,
  ...props
}: FormInputProps) => {
  return (
    <div className={styles.container}>
      <TextInput isError={isError} {...props} />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
