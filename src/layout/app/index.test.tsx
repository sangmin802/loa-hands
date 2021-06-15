import { fireEvent, render, screen, waitFor } from "utils/test";
import App from "./index";

describe("App", () => {
  describe("Route", () => {
    beforeEach(() => {
      jest.spyOn(global, "alert").mockImplementation(null);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("유저 검색 실패시, alert 발생 후 / route 유지", async () => {
      const { container } = render(<App />);
      const input = container.querySelector("input");
      input.value = "ㄹㄹㄹㄹㄹ";

      fireEvent.click(screen.getByRole("button"));

      expect(screen.queryByRole("loading-spinner")).not.toBe(null);

      await waitFor(() => expect(global.alert as jest.Mock).toBeCalledTimes(1));

      expect(input.value).toBe("");
      expect(screen.queryByRole("home")).not.toBe(null);
      expect(screen.queryByRole("loading-spinner")).toBe(null);
    });

    it("유저 검색 시 UserInfo 컴포넌트 출력 및, /userInfo/:name route로 이동", async () => {
      const { container } = render(<App />);
      const input = container.querySelector("input");
      input.value = "모여요꿈동산";

      fireEvent.click(screen.getByRole("button"));

      expect(screen.queryByRole("loading-spinner")).not.toBe(null);

      await waitFor(() => {
        expect(screen.queryByRole("home")).toBe(null);
        expect(screen.queryByRole("user-info")).not.toBe(null);
      });

      expect(input.value).toBe("");
      expect(screen.queryByRole("loading-spinner")).toBe(null);
    });

    it("로고 클릭 시 Home 컴포넌트 출력 및, / route로 이동", async () => {
      render(<App />);

      fireEvent.click(screen.getByRole("go-home"));

      await waitFor(() => {
        expect(screen.queryByRole("home")).not.toBe(null);
        expect(screen.queryByRole("user-info")).toBe(null);
      });
    });
  });
});
