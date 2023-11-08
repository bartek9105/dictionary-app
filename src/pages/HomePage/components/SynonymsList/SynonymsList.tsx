import { List } from "../../../../components/List/List";
import { Meaning } from "../../../../models/word-definition.model";
import styles from "./SynonymsList.module.scss";

type SynonymsListProps = Pick<Meaning, "synonyms"> & {
  onClick: (synonym: string) => void;
};

export const SynonymsList = ({ synonyms, onClick }: SynonymsListProps) => (
  <List
    className={styles.synonymsList}
    headerComponent={<span className={styles.hint}>Synonyms</span>}
    items={synonyms}
    renderItem={(synonym) => (
      <span className={styles.synonymItem} onClick={() => onClick(synonym)}>
        {synonym}
      </span>
    )}
  />
);
