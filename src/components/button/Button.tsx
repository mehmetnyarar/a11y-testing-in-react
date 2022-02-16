import cn from "classnames";
import React, { KeyboardEvent } from "react";

import styles from "./Button.module.scss";

const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, fn?: () => void) => {
  if (e.key === "Enter") fn?.();
};

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
      onKeyDown={isDisabled ? undefined : e => handleKeyDown(e, onClick)}
      onClick={isDisabled ? undefined : onClick}
      className={cn(styles.default, className)}>
      {children}
    </div>
  );
};
