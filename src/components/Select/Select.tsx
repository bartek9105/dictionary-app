import { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import Typography from "../Typography/Typography";
import { ReactComponent as ChevronDrownIcon } from "../../icons/chevron_down.svg";

type Option<T> = {
  displayName: string;
  value: T;
};

interface SelectProps<T> {
  options: Array<Option<T>>;
  value?: T;
  onChange?: (option: Option<T>["value"]) => void;
}

export const Select = <T extends {}>({
  options,
  onChange,
  value,
}: SelectProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<Option<T>>(options[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionClick = (option: Option<T>) => {
    setSelectedOption(option);
    setIsExpanded(false);
    onChange?.(option.value);
  };

  useEffect(() => {
    if (value) {
      const foundOption = options.find(
        (option) => option.value === value
      ) as Option<T>;

      setSelectedOption(foundOption);
    }
  }, [options, value]);

  return (
    <div className={styles.container}>
      <div className={styles.dropdownHeader}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.button}
        >
          <Typography.Body size="m" className={styles.buttonText}>
            {selectedOption?.displayName}
          </Typography.Body>
        </button>
        <ChevronDrownIcon />
      </div>
      {isExpanded && (
        <ul className={styles.dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.dropdownItem}
            >
              <Typography.Body size="m" className={styles.optionText}>
                {option.displayName}
              </Typography.Body>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
