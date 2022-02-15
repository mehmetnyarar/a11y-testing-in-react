import cn from "classnames";
import React from "react";

import styles from "./Link.module.scss";
import { LinkProps } from "./types";

export const ExternalLink: React.FC<LinkProps> = ({
  href,
  className,
  children,
}) => (
  <a
    href={href as string}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(styles.link, className)}>
    {children}
  </a>
);
