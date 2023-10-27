import { PropsWithChildren } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from "./LoadableContent.module.scss";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
