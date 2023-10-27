import { ReactNode } from "react";
import styles from "./List.module.scss";
import cn from "classnames";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  headerComponent?: ReactNode;
  className?: string;
};

export const List = <T extends {}>({
  items,
  renderItem,
  headerComponent,
  className,
}: ListProps<T>) => {
  return (
    <div>
      {headerComponent ? headerComponent : null}
      <ul className={cn(styles.container, className)}>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};
