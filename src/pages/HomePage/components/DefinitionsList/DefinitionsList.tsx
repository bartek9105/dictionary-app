import { List } from "../../../../components/List/List";
import Typography from "../../../../components/Typography/Typography";
import { Meaning } from "../../../../models/word-definition.model";
import styles from "./DefinitionsList.module.scss";

type DefinitionsListProps = Pick<Meaning, "definitions">;

export const DefinitionsList = ({ definitions }: DefinitionsListProps) => (
  <List
    className={styles.list}
    headerComponent={
      <Typography.Body size="s" className={styles.hint}>
        Meaning
      </Typography.Body>
    }
    items={definitions}
    renderItem={({ definition, example }) => (
      <span className={styles.listItem}>
        {definition}
        {example && <div className={styles.definitionExample}>"{example}"</div>}
      </span>
    )}
  />
);
