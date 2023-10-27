import { ButtonHTMLAttributes } from "react";
import { ReactComponent as PlayIcon } from "../../icons/play.svg";

import styles from "./PlayButton.module.scss";

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const PlayButton = ({ ...rest }: PlayButtonProps) => {
  return (
    <button {...rest} type="button" className={styles.button}>
      <PlayIcon className={styles.icon} />
    </button>
  );
};
