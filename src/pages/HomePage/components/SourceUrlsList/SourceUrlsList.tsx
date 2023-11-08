import { List } from "../../../../components/List/List";
import Typography from "../../../../components/Typography/Typography";
import { WordDefinitionResponse } from "../../../../models/word-definition.model";
import { ReactComponent as ExternalLinkIcon } from "../../../../icons/external_link.svg";

import styles from "./SourceUrlsList.module.scss";

type SourceUrlsListProps = Required<Pick<WordDefinitionResponse, "sourceUrls">>;

export const SourceUrlsList = ({ sourceUrls }: SourceUrlsListProps) => (
  <List
    className={styles.list}
    headerComponent={
      <Typography.Body size="s" className={styles.hint}>
        Source
      </Typography.Body>
    }
    items={sourceUrls}
    renderItem={(sourceUrl) => (
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <Typography.Body size="s" className={styles.linkText}>
          {sourceUrl}
          <ExternalLinkIcon />
        </Typography.Body>
      </a>
    )}
  />
);
