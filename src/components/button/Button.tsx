import cn from "classnames";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

import styles from "./Button.module.scss";

type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends HtmlButtonProps {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", className, children, ...buttonProps }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(styles.default, className)}
        {...buttonProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
