import React from "react";
import { render, screen, fireEvent } from "utils/test";
import Dialog from "./dialogProvider";

describe("Dialog", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Dialog 마운트, 언마운트", async () => {
    const setDialog = jest.fn();
    let expectBodyStyle = "position:fixed;top:-0px;left:0px;right:0px;";

    const { rerender } = render(
      <Dialog rerender="rerenderKey">
        <></>
      </Dialog>
    );

    expect(document?.body?.getAttribute("style")?.replace(/(\s)*/gi, "")).toBe(
      expectBodyStyle
    );
    expect(screen.getByTestId("dialog-content").textContent).toBe(
      "다이얼로그 등장!"
    );

    const closeDialog = screen.getByTestId("close-dialog");

    expect(setDialog.mock.calls[0]).toBe(undefined);

    fireEvent.click(closeDialog);

    expect(setDialog.mock.calls[0]).toEqual([null]);
  });
});
