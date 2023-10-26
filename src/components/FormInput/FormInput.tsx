import { InputHTMLAttributes } from "react";
import { TextInput } from "../TextInput/TextInput";
import styles from "./FormInput.module.scss";
import cn from "classnames";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  isError?: boolean;
};

export const FormInput = ({
  isError = false,
  errorMessage,
  className,
  ...props
}: FormInputProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <TextInput isError={isError} {...props} />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
