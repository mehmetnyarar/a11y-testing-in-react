import cn from "classnames";
import React, { useCallback, useRef, useState } from "react";

import { MuppetChat, MuppetMessage } from "../../../data/muppets";
import { Button } from "../../button";
import { Input } from "../../form";
import { Modal } from "../../modal";
import styles from "./Chat.module.scss";

const RESPONSE_DELAY = 500;

interface ChatProps {
  name: string;
  data: MuppetChat;
}

export const Chat: React.FC<ChatProps> = ({ name, data }) => {
  const { initialMessage, responses } = data;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MuppetMessage[]>([]);
  const [message, setMessage] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const handleOpen = useCallback(() => {
    setMessages([initialMessage]);
    setIsOpen(true);
  }, [initialMessage]);

  const handleClose = useCallback(() => {
    setMessages([]);
    setIsOpen(false);
    setMessages([]);
    setMessage("");
    setIsBusy(false);
  }, []);

  const canSend = message && !isBusy;
  const sendMessage = useCallback(() => {
    setMessages(items =>
      items.concat({
        id: `u${items.length + 1}`,
        text: message,
        isUser: true,
      })
    );
    setMessage("");

    if (!responses.length) return;

    setTimeout(() => {
      setMessages(items => items.concat(responses[0]));
      setIsBusy(true);
      inputRef.current?.focus();
    }, RESPONSE_DELAY);
  }, [message, responses]);

  return (
    <>
      <Button className={styles.launch} onClick={handleOpen}>
        Talk to {name}
      </Button>
      <Modal title="Chat" isOpen={isOpen} onClose={handleClose}>
        <div className={styles.messages}>
          {messages.map(message => (
            <div
              key={message.id}
              className={cn(styles.message, {
                [styles.user]: message.isUser,
              })}>
              <div
                className={cn(styles["message-image"], {
                  [styles.user]: message.isUser,
                })}></div>
              <p className={styles["message-text"]}>{message.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <Input
            ref={inputRef}
            id="user-message"
            labelHidden
            label="Message"
            placeholder="Your message..."
            value={message}
            onChange={value => setMessage(value)}
          />
          <Button onClick={sendMessage} disabled={!canSend}>
            SEND
          </Button>
        </div>
      </Modal>
    </>
  );
};
