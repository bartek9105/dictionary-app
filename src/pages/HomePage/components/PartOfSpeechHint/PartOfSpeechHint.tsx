import { Line } from "../../../../components/Line/Line";
import Typography from "../../../../components/Typography/Typography";
import { Meaning } from "../../../../models/word-definition.model";
import styles from "./PartOfSpeechHint.module.scss";

type PartOfSpeechHintProps = Pick<Meaning, "partOfSpeech">;

export const PartOfSpeechHint = ({ partOfSpeech }: PartOfSpeechHintProps) => (
  <div className={styles.container}>
    <Typography.Body size="m" className={styles.hint}>
      {partOfSpeech}
    </Typography.Body>
    <Line />
  </div>
);
