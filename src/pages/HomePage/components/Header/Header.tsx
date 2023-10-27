import useSound from "use-sound";
import { PlayButton } from "../../../../components/PlayButton/PlayButton";
import Typography from "../../../../components/Typography/Typography";
import { WordDefinitionResponse } from "../../../../models/word-definition.model";
import styles from "./Header.module.scss";

type HeaderProps = Pick<
  WordDefinitionResponse,
  "word" | "phonetic" | "phonetics"
> & {
  audio?: string;
};

export const Header = ({ word, phonetic, audio }: HeaderProps) => {
  const [play] = useSound(audio || "");

  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <h2 className={styles.word}>{word}</h2>
        <Typography.Body size="m" className={styles.phonetic}>
          {phonetic}
        </Typography.Body>
      </div>
      {audio && <PlayButton onClick={() => play()} />}
    </header>
  );
};
