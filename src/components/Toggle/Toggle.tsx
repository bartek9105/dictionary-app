import { InputHTMLAttributes, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Toggle.module.scss";

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  onClick: () => void;
};

export const Toggle = ({ checked, onClick, ...rest }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    onClick();
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <input
        checked={isChecked}
        onChange={handleOnChange}
        id="switch"
        className={styles.switchCheckbox}
        type="checkbox"
        {...rest}
      />
      <label
        className={cn(styles.label, {
          [styles.labelActive]: isChecked,
        })}
        htmlFor="switch"
      >
        <span className={styles.button} />
      </label>
    </>
  );
};
