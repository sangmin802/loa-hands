import { Story } from "@storybook/react";
import React from "react";
import Image, { ImageProps } from "./image";

export default {
  title: "Image",
  component: Image,
};

const Template: Story<ImageProps> = args => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: `${process.env.PUBLIC_URL}/img/event.jpg`,
};
