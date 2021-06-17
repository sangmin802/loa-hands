import {
  fireEvent,
  render,
  screen,
  waitFor,
  getByRole,
  queryAllByText,
} from "utils/test";
import UserInfo from "./index";

const navigation = (type, regex) => {
  const [prev, , next] = screen.getAllByRole(`${type}-nav`);

  expect(getByRole(prev, "nav-text").getAttribute("color")).toBe("white");
  expect(getByRole(next, "nav-text").getAttribute("color")).toBe("#666");

  fireEvent.click(getByRole(next, "button"));

  expect(getByRole(prev, "nav-text").getAttribute("color")).toBe("#666");
  expect(getByRole(next, "nav-text").getAttribute("color")).toBe("white");

  expect(queryAllByText(screen.getByRole(`${type}-content`), regex)).not.toBe(
    null
  );
};

describe("UserInfo", () => {
  const name = "모여요꿈동산";

  beforeEach(() => {
    window.scrollTo = jest.fn();
    window.alert = jest.fn();

    render(<UserInfo match={{ params: { name } }} />);
  });

  describe("UserInfo Data", () => {
    it("userInfo route에서 userData는 없고, url에 검색 기록이 있다면 fetch 하기", async () => {
      expect(screen.queryByRole("user-info")).toBe(null);

      await waitFor(() =>
        expect(screen.queryByRole("user-info")).not.toBe(null)
      );

      expect(screen.queryByRole("user-info").dataset.user).toBe(name);
    });
  });

  describe("navigation", () => {
    it("main navigation", () => {
      const regex = /섬의 마음/i;
      navigation("main", regex);
    });

    it("sub navigation", () => {
      const regex = /기본 특성/i;
      navigation("sub", regex);
    });
  });

  describe("원정대 이벤트", () => {
    it("원정대 팝업 활성화, 비활성화", () => {
      const button = screen.getByRole("button", { name: "expedition-button" });
      fireEvent.click(button);

      expect(screen.queryByRole("dialog-content")).not.toBe(null);

      const closeButton = screen.getByRole("close-dialog");
      fireEvent.click(closeButton);

      expect(screen.queryByRole("dialog-content")).toBe(null);
    });

    it("원정대 내 다른 캐릭터 검색", async () => {
      const otherClass = "블레이드";
      const otherName = "백어택시너지있어요";
      const button = screen.getByRole("button", { name: "expedition-button" });

      fireEvent.click(button);

      expect(screen.queryByRole("dialog-content")).not.toBe(null);

      const char = screen.getAllByRole("button", {
        name: "expedition-char",
      })[0];

      fireEvent.click(char);

      await waitFor(() => screen.getByText(otherClass));
      expect(screen.getByRole("user-info").dataset.user).toBe(otherName);
      expect(screen.queryByRole("dialog-content")).toBe(null);
    });
  });
});
