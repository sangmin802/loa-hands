import { Story } from "@storybook/react";
import React from "react";
import Header from "./header";

export default {
  title: "Header",
  component: Header,
};

const Template: Story = args => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};