import styles from "./Line.module.scss";
import cn from "classnames";

interface LineProps {
  type?: "horizontal" | "vertical";
}

export const Line = ({ type = "horizontal" }: LineProps) => (
  <div
    className={cn(styles.line, {
      [styles.lineHorizontal]: type === "horizontal",
      [styles.lineVertical]: type === "vertical",
    })}
  />
);
