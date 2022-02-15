import { render } from "@testing-library/react";
import { mount } from "enzyme";
import { axe } from "jest-axe";
import React from "react";

import Home from "../pages";

describe("Home", () => {
  it("should not have any accessibility violations (react-testing-library)", async () => {
    const { container } = render(<Home />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have any accessibility violations (enzyme)", async () => {
    // We wrapped the page with a div because the Home has nested fragments
    const wrapper = mount(
      <div>
        <Home />
      </div>
    );

    const container = wrapper.getDOMNode();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
