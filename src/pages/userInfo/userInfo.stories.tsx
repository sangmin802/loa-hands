import React from "react";
import UserInfo, { UserInfoProps } from "./userInfo";
import AsyncBoundary from "components/asyncBoundary/asyncBoundary";
import ErrorFallback from "components/errorFallback/errorFallback";
import SearchLoading from "pages/userInfo/searchLoading/searchLoading";
import { Story } from "@storybook/react";

export default {
  title: "UserInfo",
  component: UserInfo,
};

const Template: Story<UserInfoProps> = args => (
  <AsyncBoundary
    suspenseFallback={<SearchLoading />}
    errorFallback={<ErrorFallback />}
  >
    <UserInfo {...args} />
  </AsyncBoundary>
);

export const Default = Template.bind({});

Default.args = {};
