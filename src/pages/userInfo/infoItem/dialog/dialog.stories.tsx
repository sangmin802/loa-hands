import React from "react";
import Dialog, { DialogProps } from "./dialog";
import { Story } from "@storybook/react";

export default {
  title: "Detail",
  component: Dialog,
};

const Template: Story<DialogProps> = args => <Dialog {...args} />;

export const Equipment = Template.bind({});
export const Avatar = Template.bind({});
export const Skill = Template.bind({});
