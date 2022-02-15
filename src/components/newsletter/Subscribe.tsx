import React, { useCallback, useState } from "react";

import { Button } from "../button";
import { Input } from "../form";
import styles from "./Subscribe.module.scss";

interface SubscribeProps {}

export const Subscribe: React.FC<SubscribeProps> = () => {
  const [email, setEmail] = useState("");
  const subscribe = useCallback(() => {
    setTimeout(() => {
      alert("Success!");
    }, 1000);
  }, []);

  return (
    <div className={styles.newsletter}>
      <strong>Newsletter</strong>
      <Input type="email" value={email} onChange={setEmail} />
      <Button onClick={subscribe} className={styles.button}>
        Subscribe
      </Button>
    </div>
  );
};
