import cn from "classnames";
import React, {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
} from "react";

import styles from "./Input.module.scss";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HtmlInputProps {
  label: string;
  labelHidden?: boolean;
  value: string;
  onChange(value: string): void; // eslint-disable-line
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", id, label, labelHidden, onChange, ...inputProps }, ref) => {
    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <div className={styles.field}>
        <label
          htmlFor={id}
          className={cn(styles.label, { [styles.hidden]: labelHidden })}>
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          onChange={handleChange}
          className={styles.default}
          {...inputProps}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
