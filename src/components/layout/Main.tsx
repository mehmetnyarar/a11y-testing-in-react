import cn from "classnames";
import React from "react";

import styles from "./Main.module.scss";

interface MainProps {
  title?: string;
  center?: boolean;
}

export const Main: React.FC<MainProps> = ({ title, center, children }) => {
  return (
    <main className={cn(styles.container, { [styles.center]: center })}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </main>
  );
};
