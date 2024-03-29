import { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Heading.module.scss";

type HeadingElement = "h1" | "h2" | "h3";

export type HeadingProps = PropsWithChildren<{
  as: HeadingElement;
  className?: string;
}>;

export const Heading = ({ children, as, className }: HeadingProps) => {
  const Element = as;
  return (
    <Element
      className={cn(
        (styles.heading,
        {
          [styles.headingLevel1]: as === "h1",
          [styles.headingLevel3]: as === "h2",
          [styles.headingLevel2]: as === "h3",
        },
        className)
      )}
    >
      {children}
    </Element>
  );
};
