import React from "react";
import { fireEvent, render, screen, getRoles } from "utils/test";
import Header from "./index";

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("홈으로 이동", () => {
    const setHomeData = jest.fn();
    render(<Header setHomeData={setHomeData} setUserData={null} />);

    fireEvent.click(screen.getByRole("go-home"));

    expect(setHomeData).toBeCalledTimes(1);
  });

  it("유저 검색", () => {
    const setUserData = jest.fn();
    const { container } = render(
      <Header setHomeData={null} setUserData={setUserData} />
    );

    container.querySelector("input").value = "모여요꿈동산";

    fireEvent.submit(screen.getByRole("form"));

    expect(setUserData).toBeCalledTimes(1);
    expect(setUserData).toBeCalledWith("모여요꿈동산");
  });
});
