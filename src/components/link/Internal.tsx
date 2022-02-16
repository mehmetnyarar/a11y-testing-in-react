/* eslint-disable jsx-a11y/anchor-is-valid */

import cn from "classnames";
import NextLink from "next/link";
import React from "react";

import styles from "./Link.module.scss";
import { LinkProps } from "./types";

export const InternalLink: React.FC<LinkProps> = ({
  href,
  className,
  children,
  ...linkProps
}) => {
  return (
    <NextLink href={href} {...linkProps}>
      <a className={cn(styles.link, className)}>{children}</a>
    </NextLink>
  );
};
