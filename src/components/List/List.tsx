import { ReactNode } from "react";
import styles from "./List.module.scss";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  headerComponent?: ReactNode;
};

export const List = <T extends {}>({
  items,
  renderItem,
  headerComponent,
}: ListProps<T>) => {
  return (
    <div>
      {headerComponent ? headerComponent : null}
      <ul className={styles.container}>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};
