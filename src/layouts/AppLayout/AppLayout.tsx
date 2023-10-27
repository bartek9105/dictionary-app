import { PropsWithChildren } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./AppLayout.module.scss";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </>
  );
};
