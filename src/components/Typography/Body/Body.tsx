import { PropsWithChildren } from "react";
import styles from "./Body.module.scss";
import cn from "classnames";

export interface BodyProps {
  size: "s" | "m";
}

export const Body = ({ children, size }: PropsWithChildren<BodyProps>) => {
  return (
    <p
      className={cn({
        [styles.bodySizeS]: size === "s",
        [styles.bodySizeM]: size === "m",
      })}
    >
      {children}
    </p>
  );
};
