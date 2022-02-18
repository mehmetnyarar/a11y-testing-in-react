import React, { useEffect, useRef } from "react";

import { useA11yChecker } from "../../hooks/a11y";
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
  useA11yChecker({ skip: !isOpen });

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <>
          <div className={styles.backdrop}></div>
          <aside className={styles.container}>
            <header className={styles.header}>
              <h2>{title}</h2>
              <Button
                ref={closeButtonRef}
                aria-label="Close chat"
                onClick={onClose}>
                X
              </Button>
            </header>
            <div className={styles.content}>{children}</div>
          </aside>
        </>
      )}
    </Portal>
  );
};
