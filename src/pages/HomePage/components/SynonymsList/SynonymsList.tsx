import { List } from "../../../../components/List/List";
import { Meaning } from "../../../../models/word-definition.model";
import styles from "./SynonymsList.module.scss";

type SynonymsListProps = Pick<Meaning, "synonyms">;

export const SynonymsList = ({ synonyms }: SynonymsListProps) => (
  <List
    items={synonyms}
    renderItem={(synonym) => (
      <span className={styles.synonymItem}>{synonym}</span>
    )}
    headerComponent={<span className={styles.hint}>Synonyms</span>}
  />
);
