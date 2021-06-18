import React from "react";
import Button, { Props } from "./index";
import { Story } from "@storybook/react";
import styled from "styled-components";

const Text = styled.div`
  color: white;
`;

export default {
  title: "Button",
  component: Button,
};

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Text>Text</Text>,
};
