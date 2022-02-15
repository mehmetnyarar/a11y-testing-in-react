import cn from "classnames";
import React from "react";

import styles from "./Main.module.scss";

interface MainProps {
  title?: string;
  center?: boolean;
}

export const Main: React.FC<MainProps> = ({ title, center, children }) => {
  return (
    <div className={cn(styles.container, { [styles.center]: center })}>
      {title && <span className={styles.title}>{title}</span>}
      {children}
    </div>
  );
};
