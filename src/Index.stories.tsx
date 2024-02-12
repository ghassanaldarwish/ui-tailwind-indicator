import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TailwindIndicator } from "./index";

const meta: Meta<typeof TailwindIndicator> = {
  component: TailwindIndicator,
  title: "Marbella/TailwindIndicator",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => <TailwindIndicator />;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
