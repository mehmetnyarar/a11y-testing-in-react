import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import React, { ReactElement } from "react";

jest.mock("next/image", () => {
  const Image: React.FC<ImageProps> = ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src as string} alt={alt} />
  );

  return Image;
});

jest.mock("next/link", () => {
  const Link: React.FC<LinkProps> = ({ children, href }) => {
    const anchor = children as ReactElement;

    return <anchor.type {...anchor.props} href={href} />;
  };

  return Link;
});
