import React from "react";

import { app } from "../../config/app";
import { home } from "../../config/routes";
import { Link } from "../link";
import { Subscribe } from "../newsletter";
import styles from "./Layout.module.scss";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.header}>
        <Link href={home.path} className={styles["header-title"]}>
          {app.title}
        </Link>
      </div>

      {children}

      <div className={styles.footer}>
        <div className={styles["footer-copy"]}>
          <span>{app.copy}</span>
        </div>
        <Subscribe />
        <div className={styles["footer-contact"]}>
          <strong>Contact</strong>
          <span>{app.contact.phone}</span>
          <span>{app.contact.address}</span>
        </div>
      </div>
    </>
  );
};
