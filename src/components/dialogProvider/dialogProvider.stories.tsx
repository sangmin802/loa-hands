import React, { PropsWithChildren } from "react";
import Dialog, { DialogProps } from "./dialogProvider";
import styled from "styled-components";
import { Story } from "@storybook/react";

const Content = styled.div`
  color: #fff;
`;

export default {
  title: "Dialog",
  component: "Dialog",
};

const Template: Story<PropsWithChildren<DialogProps>> = props => (
  <Dialog {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: <Content>Dialog</Content>,
};
