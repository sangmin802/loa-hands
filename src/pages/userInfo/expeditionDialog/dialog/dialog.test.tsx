import React from "react";
import { fireEvent, render, screen } from "utils/test";
import Dialog from "./dialog";
import Char from "../char/char";

describe("Dialog", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Dialog 컴포넌트 닫기", () => {
    const setDialog = jest.fn();
    const setUserData = jest.fn();
    const userData = {
      expeditionInfo: {
        expeditionUserWrap: [],
      },
    };
    render(
      <Dialog
        userData={userData}
        setUserData={setUserData}
        setDialog={setDialog}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(setDialog).toBeCalledTimes(1);
    expect(setDialog).toBeCalledWith(null);
  });

  it("선택한 모험단 유저 검색 호출", () => {
    const setUserData = jest.fn();
    const char = {
      lv: "레벨",
      name: "이름",
    };
    render(<Char data={char} />);

    fireEvent.click(screen.getByRole("button"));

    expect(setUserData).toBeCalledTimes(1);
    expect(setUserData).toBeCalledWith("이름");
  });
});
