import Typography from "../../../../components/Typography/Typography";
import { ReactComponent as SadFace } from "../../../../icons/sad_face.svg";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <SadFace className={styles.icon} />
      <Typography.Heading as="h3" className={styles.heading}>
        Not Found
      </Typography.Heading>
      <Typography.Body size="m" className={styles.hint}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Typography.Body>
    </div>
  );
};
