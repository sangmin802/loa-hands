import React from "react";
import { fireEvent, render, screen } from "utils/test";
import InfoItem from "./infoItem";

const initialData = {
  backSrc: "",
  type: "",
  detail: {
    src: "",
    grade: "3",
    subTitle: ["서브타이틀1", "서브타이틀2"],
    title: "타이틀",
    hover: true,
  },
};

describe("InfoItem", () => {
  it("아이템 상세보기 다이얼로그 활성화", () => {
    const setDialog = jest.fn();
    render(<InfoItem data={initialData} dispatcher={setDialog} />);

    fireEvent.click(screen.getByTestId("list-item"));

    expect(setDialog).toBeCalledTimes(1);
    expect(setDialog.mock.calls[0][0].props.data).toEqual(initialData);
  });
});
