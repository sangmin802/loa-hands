import React from "react";
import UserInfo from "./index";

export default {
  title: "UserInfo",
  component: UserInfo,
};

const Template = args => <UserInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  match: {
    params: { name: "모여요꿈동산" },
  },
};
