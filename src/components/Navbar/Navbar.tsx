import { useDarkMode } from "../../hooks/useDarkMode";
import { FontType, useFontFamily } from "../../hooks/useFontFamily";
import { ReactComponent as BookIcon } from "../../icons/book.svg";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { Select } from "../Select/Select";
import styles from "./Navbar.module.scss";

const fontsOptions = [
  {
    displayName: "Monospace",
    value: FontType.MONOSPACE,
  },
  {
    displayName: "Sans Serif",
    value: FontType.SANS_SERIF,
  },
  {
    displayName: "Serif",
    value: FontType.SERIF,
  },
];

export const Navbar = () => {
  const { activeFontType, setFontType } = useFontFamily();
  const { toggleTheme, activeTheme } = useDarkMode();

  return (
    <nav className={styles.container}>
      <BookIcon className={styles.bookIcon} />
      <div className={styles.rightSide}>
        <Select
          value={activeFontType}
          options={fontsOptions}
          onChange={(value) => setFontType(value)}
        />
        <DarkModeToggle
          isDarkMode={activeTheme === "dark"}
          onClick={toggleTheme}
        />
      </div>
    </nav>
  );
};
