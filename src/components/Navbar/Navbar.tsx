import { useDarkMode } from "../../hooks/useDarkMode";
import { useFontFamily } from "../../hooks/useFontFamily";
import { ReactComponent as BookIcon } from "../../icons/book.svg";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { Line } from "../Line/Line";
import { Select } from "../Select/Select";
import { DROPDOWN_FONTS_OPTIONS } from "./Navbar.const";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const { activeFontType, setFontType } = useFontFamily();
  const { toggleTheme, activeTheme } = useDarkMode();

  return (
    <nav className={styles.container}>
      <BookIcon className={styles.bookIcon} />
      <div className={styles.rightSide}>
        <Select
          value={activeFontType}
          options={DROPDOWN_FONTS_OPTIONS}
          onChange={(value) => setFontType(value)}
        />
        <Line type="vertical" />
        <DarkModeToggle
          checked={activeTheme === "dark"}
          isDarkMode={activeTheme === "dark"}
          onClick={toggleTheme}
        />
      </div>
    </nav>
  );
};
