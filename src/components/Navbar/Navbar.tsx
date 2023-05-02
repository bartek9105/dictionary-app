import { ReactComponent as BookIcon } from "../../icons/book.svg";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <BookIcon className={styles.bookIcon} />
    </nav>
  );
};
