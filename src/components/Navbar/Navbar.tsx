import { FontType, useFontFamily } from "../../hooks/useFontFamily";
import { ReactComponent as BookIcon } from "../../icons/book.svg";
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

  return (
    <nav className={styles.container}>
      <BookIcon className={styles.bookIcon} />
      <Select
        value={activeFontType}
        options={fontsOptions}
        onChange={(value) => setFontType(value)}
      />
    </nav>
  );
};
