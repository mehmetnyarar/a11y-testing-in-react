import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useCallback,
} from "react";

import styles from "./Input.module.scss";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange(value: string): void; // eslint-disable-line
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => onChange(e.target.value),
    [onChange]
  );

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className={styles.default}
    />
  );
};
