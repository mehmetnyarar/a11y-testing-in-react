import React from "react";
import ReactDOM from "react-dom";

export const checkA11yViolations = () => {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "development") return;

  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
};
