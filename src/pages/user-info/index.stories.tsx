import React from "react";
import UserInfo from "./index";
import { AsyncBoundary, SearchLoading, ErrorFallback } from "components/";

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
