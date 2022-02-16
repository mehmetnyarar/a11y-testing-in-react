import { useEffect } from "react";

import { checkA11yViolations } from "../utils/a11y";

interface A11yCheckerOptions {
  skip?: boolean;
}

export const useA11yChecker = (options: A11yCheckerOptions = {}) => {
  const { skip } = options;

  useEffect(() => {
    if (!skip) {
      checkA11yViolations();
    }
  }, [skip]);
};
