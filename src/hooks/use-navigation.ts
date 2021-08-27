import { useCallback, useMemo, useState } from "react";

export function useNavigation() {
  const [subNav, setSubNav] = useState(0);
  const [mainNav, setMainNav] = useState(0);

  const subNavs = useMemo(
    () => [
      ["착용 아이템", "착용 아바타", "각인·특성"],
      ["전투스킬", "생활스킬"],
      ["", "", "", "", "", "", "", ""],
    ],
    []
  );

  const mainNavs = useMemo(() => ["능력치", "스킬", "수집형포인트"], []);

  const handleMainNavigation = useCallback(
    index => {
      setMainNav(index);
      setSubNav(0);
    },
    [setMainNav, setSubNav]
  );

  const handleResetNavigation = useCallback(() => {
    setSubNav(0);
    setMainNav(0);
  }, [setSubNav, setMainNav]);

  return {
    subNav,
    mainNav,
    setSubNav,
    setMainNav,
    subNavs,
    mainNavs,
    handleMainNavigation,
    handleResetNavigation,
  };
}
