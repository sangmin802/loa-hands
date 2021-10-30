import React from "react";
import TimerList, { TimerListProps } from "./timerList";
import { DAILY_ISLAND } from "json/timer";
import { Story } from "@storybook/react";

export default {
  title: "TimerList",
  component: TimerList,
};

const Template: Story<TimerListProps> = args => <TimerList {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DAILY_ISLAND,
};
