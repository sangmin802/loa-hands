import React from "react";
import Home from "./home";

export default {
  title: "Home",
  component: Home,
};

const Template = args => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {};
