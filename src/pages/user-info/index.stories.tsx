import React from "react";
import UserInfo from "./index";
import AsyncBoundary from "components/async-boundary";
import ErrorFallback from "components/error-fallback";
import SearchLoading from "components/search-loading";

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
