import cn from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

import styles from "./Image.module.scss";

interface ImageProps extends NextImageProps {
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ className, ...imageProps }) => {
  return (
    <figure className={cn(styles.container, className)}>
      <NextImage {...imageProps} />
    </figure>
  );
};
