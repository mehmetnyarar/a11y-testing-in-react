import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";

import Home from "../../pages/index";

export default {
  title: "Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Default: ComponentStory<typeof Home> = () => (
  <>
    <Home />
    <div id="portal"></div>
  </>
);

export const Talk = Default.bind({});
Talk.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Talk to Cookie Monster"));
  await waitFor(() => expect(canvas.getByText("Chat")).toBeTruthy());
};
