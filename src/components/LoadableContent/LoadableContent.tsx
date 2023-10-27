import { PropsWithChildren } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./LoadableContent.module.scss";

interface LoadableContentProps {
  isLoading: boolean;
}

export const LoadableContent = ({
  isLoading,
  children,
}: PropsWithChildren<LoadableContentProps>) => {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );
  }

  return <>{children}</>;
};
