import { fireEvent, render, screen, waitFor } from "utils/test";
import UserInfo from "./index";

const name = "모여요꿈동산";

describe("UserInfo", () => {
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
      const button = screen.getByRole("button", { name: "expedition-button" });
      fireEvent.click(button);

      expect(screen.queryByRole("dialog-content")).not.toBe(null);
      // 백어택시너지있어요 - 블레이드
      const char = screen.getAllByRole("button", {
        name: "expedition-char",
      })[0];

      fireEvent.click(char);

      await waitFor(() => screen.getByText("블레이드"));

      expect(screen.getByRole("user-info").dataset.user).toBe(
        "백어택시너지있어요"
      );
    });
  });
});
