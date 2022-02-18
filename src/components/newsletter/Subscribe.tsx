import React, { useCallback, useState } from "react";

import { Button } from "../button";
import { Input } from "../form";
import styles from "./Subscribe.module.scss";

interface SubscribeProps {}

export const Subscribe: React.FC<SubscribeProps> = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const subscribe = useCallback(() => {
    setTimeout(() => {
      alert("Success!");
      setEmailSent(true);
    }, 1000);
  }, []);

  const disabled = !email.length || emailSent;

  return (
    <div className={styles.newsletter}>
      <h2>Newsletter</h2>
      <Input
        required
        type="email"
        id="nss-email"
        labelHidden
        label="E-mail"
        placeholder="Your e-mail"
        value={email}
        onChange={setEmail}
      />
      <Button disabled={disabled} onClick={subscribe} className={styles.button}>
        Subscribe
      </Button>
    </div>
  );
};
