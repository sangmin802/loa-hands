import React from "react";
import Button, { ButtonProps } from "./button";
import { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  // controls에 추가할 속성들
  argTypes: {
    // controls에 추가될 속성
    buttonType: {
      // control 방식
      control: { type: "radio" },
      // 속성들
      options: ["default", "black", "gray", "submit"],
    },
  },
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

// default story 생성
export const StoryButton = Template.bind({});

StoryButton.args = {
  children: "Button",
};
