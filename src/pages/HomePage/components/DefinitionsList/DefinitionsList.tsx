import { List } from "../../../../components/List/List";
import { Meaning } from "../../../../models/word-definition.model";
import styles from "./DefinitionsList.module.scss";

type DefinitionsListProps = Pick<Meaning, "definitions">;

export const DefinitionsList = ({ definitions }: DefinitionsListProps) => (
  <List
    className={styles.list}
    headerComponent={<span className={styles.hint}>Meaning</span>}
    items={definitions}
    renderItem={({ definition, example }) => (
      <span className={styles.listItem}>
        {definition}
        {example && <div className={styles.definitionExample}>"{example}"</div>}
      </span>
    )}
  />
);
