import { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.scss";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import cn from "classnames";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

export const TextInput = ({ isError = false, ...props }: TextInputProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        {...props}
        className={cn(styles.textInput, {
          [styles.textInputError]: isError,
        })}
      />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};
