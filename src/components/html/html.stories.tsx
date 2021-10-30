import { Story } from "@storybook/react";
import React from "react";
import HTML, { HTMLProps } from "./html";

export default {
  title: "HTML",
  component: HTML,
};

const Template: Story<HTMLProps> = args => <HTML {...args} />;

export const Default = Template.bind({});

Default.args = {
  html:
    "[바드] [<FONT COLOR='#FFD200'>사운드 홀릭</FONT>] 사운드 집중 <FONT COLOR='#73dc04'>Lv +2</FONT>",
};
