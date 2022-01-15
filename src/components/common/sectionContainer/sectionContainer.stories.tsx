import React, { PropsWithChildren } from "react";
import SectionContainer, { SectionContainerProps } from "./sectionContainer";
import styled from "styled-components";
import { Story } from "@storybook/react";

const Content = styled.div`
  color: #fff;
  text-align: center;
`;

export default {
  title: "SectionContainer",
  component: SectionContainer,
};

const Template: Story<PropsWithChildren<SectionContainerProps>> = args => (
  <SectionContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  children: <Content>Content</Content>,
};
