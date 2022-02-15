import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  id?: string;
}

export const Portal: React.FC<PortalProps> = ({ id = "portal", children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const portal = ref.current;

  useEffect(() => {
    if (portal ?? typeof window === "undefined") return;

    ref.current = document.getElementById(id) as HTMLDivElement;
  }, [id, portal]);

  return portal ? createPortal(children, portal) : null;
};
