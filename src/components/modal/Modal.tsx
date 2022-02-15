import React from "react";

import { Button } from "../button";
import styles from "./Modal.module.scss";
import { Portal } from "./Portal";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose(): void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Portal>
      {isOpen && (
        <>
          <div className={styles.backdrop}></div>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <Button onClick={onClose}>X</Button>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </>
      )}
    </Portal>
  );
};
