import React from "react";
import Button, { ButtonProps } from "./button";
import { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
export const Black = Template.bind({});
export const Gray = Template.bind({});
export const Submit = Template.bind({});

Default.args = {};
Black.args = {
  buttonType: "black",
};
Gray.args = {
  buttonType: "gray",
};
Submit.args = {
  buttonType: "submit",
};
