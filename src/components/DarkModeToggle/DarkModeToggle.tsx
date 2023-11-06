import { Toggle, ToggleProps } from "../Toggle/Toggle";
import styles from "./DarkModeToggle.module.scss";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";
import cn from "classnames";

type DarkModeToggleProps = {
  isDarkMode?: boolean;
} & ToggleProps;

export const DarkModeToggle = ({
  isDarkMode,
  ...rest
}: DarkModeToggleProps) => {
  return (
    <div className={styles.container}>
      <Toggle {...rest} />
      <MoonIcon
        className={cn(styles.moonIcon, {
          [styles.moonIconDarkMode]: isDarkMode,
        })}
      />
    </div>
  );
};
