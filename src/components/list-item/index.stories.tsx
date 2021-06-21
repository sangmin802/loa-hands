import React from "react";
import ListItem from "./index";

export default {
  title: "ListItem",
  component: ListItem,
};

const Template = args => <ListItem {...args} />;

export const Detail = Template.bind({});
export const NoDetail = Template.bind({});

Detail.args = {
  data: {
    backSrc: `${process.env.PUBLIC_URL}/img/bg-item.png`,
    detail: {
      grade: 4,
      src: `${process.env.PUBLIC_URL}/img/item.png`,
      subTitle: ["subTitle1", "subTitle2"],
      title: "title",
    },
  },
};

NoDetail.args = {
  data: {
    backSrc: `${process.env.PUBLIC_URL}/img/bg-item.png`,
  },
};
