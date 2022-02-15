import cn from "classnames";
import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  onClick?(): void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  isDisabled,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      className={cn(styles.default, className)}>
      {children}
    </div>
  );
};
