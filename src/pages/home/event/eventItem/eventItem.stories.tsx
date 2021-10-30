import { Story } from "@storybook/react";
import React from "react";
import Event, { EventProps } from "./eventItem";

export default {
  title: "Event",
  component: Event,
};

const Template: Story<EventProps> = args => <Event {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    date: "2021.05.12 06:00 ~ 07.07 06:00",
    href: "",
    img: `${process.env.PUBLIC_URL}/img/event.jpg`,
    name: "함께 돌아왔소! 도전 출근왕",
  },
};
