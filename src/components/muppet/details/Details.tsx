import React from "react";

import { Muppet } from "../../../data/muppets";
import { Image } from "../../image";
import { Link } from "../../link";
import { Chat } from "../chat";
import styles from "./Details.module.scss";

interface DetailsProps {
  data: Muppet;
}

export const Details: React.FC<DetailsProps> = ({ data }) => {
  const { name, img, info, more, chat } = data;

  return (
    <>
      <div className={styles.container}>
        <Image
          src={img.url}
          alt={img.description}
          layout="fill"
          className={styles.image}
        />
        <div className={styles.info}>
          {info.map(({ id, text }) => (
            <p key={id}>{text}</p>
          ))}
          {more && (
            <Link href={more.url} external>
              Read more
            </Link>
          )}
        </div>
      </div>

      {chat && <Chat name={name} data={chat} />}
    </>
  );
};
