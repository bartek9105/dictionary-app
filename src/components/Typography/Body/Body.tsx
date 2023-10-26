import { PropsWithChildren } from "react";
import styles from "./Body.module.scss";
import cn from "classnames";

export type BodyProps = PropsWithChildren<{
  size: "s" | "m";
  className?: string;
}>;

export const Body = ({ children, size, className }: BodyProps) => {
  return (
    <p
      className={
        (cn({
          [styles.bodySizeS]: size === "s",
          [styles.bodySizeM]: size === "m",
        }),
        className)
      }
    >
      {children}
    </p>
  );
};
