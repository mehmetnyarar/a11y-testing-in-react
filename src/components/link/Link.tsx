import React, { useMemo } from "react";

import { ExternalLink } from "./External";
import { InternalLink } from "./Internal";
import { LinkProps } from "./types";

export const Link: React.FC<LinkProps> = ({
  external,
  children,
  ...linkProps
}) => {
  const Component = useMemo(
    () => (external ? ExternalLink : InternalLink),
    [external]
  );

  return <Component {...linkProps}>{children}</Component>;
};
