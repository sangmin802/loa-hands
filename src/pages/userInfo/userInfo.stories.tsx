import React from "react";
import UserInfo from "./userInfo";
import AsyncBoundary from "components/asyncBoundary";
import ErrorFallback from "components/errorFallback";
import SearchLoading from "pages/userInfo/searchLoading";

export default {
  title: "UserInfo",
  component: UserInfo,
};

const Template = args => (
  <AsyncBoundary
    suspenseFallback={<SearchLoading />}
    errorFallback={<ErrorFallback />}
  >
    <UserInfo {...args} />
  </AsyncBoundary>
);

export const Default = Template.bind({});

Default.args = {};
