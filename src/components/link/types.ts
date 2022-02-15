import type { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  external?: boolean;
  className?: string;
}
