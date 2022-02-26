import React from "react";
import Button from "./button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    buttonType: {
      description: "타입별 버튼입니다.<br> `default` `black` `gray` `submit`",
      defaultValue: "default",
      control: { type: "radio" },
      options: ["default", "black", "gray", "submit"],
    },
    children: {
      description: "버튼의 컨텐츠 입니다",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const StoryButton = Template.bind({});
