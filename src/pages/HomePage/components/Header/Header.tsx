import Typography from "../../../../components/Typography/Typography";
import { WordDefinitionResponse } from "../../../../models/word-definition.model";
import styles from "./Header.module.scss";

type HeaderProps = Pick<WordDefinitionResponse, "word" | "phonetic">;

export const Header = ({ word, phonetic }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.word}>{word}</h2>
      <Typography.Body size="m" className={styles.phonetic}>
        {phonetic}
      </Typography.Body>
    </header>
  );
};
