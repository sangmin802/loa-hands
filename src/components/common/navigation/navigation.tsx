import React, {
  ReactElement,
  useCallback,
  useState,
  cloneElement,
} from "react";

interface NavigationProps {
  onSelected: (...args: any[]) => ReactElement;
  unSelected: (...args: any[]) => ReactElement;
  navigation: string[];
  children: ReactElement;
  buttonContainer?: (...args: any[]) => ReactElement;
}

function Navigation({
  onSelected: OnSelected,
  unSelected: UnSelected,
  navigation,
  children,
  buttonContainer: ButtonContainer = () => <></>,
}: NavigationProps) {
  const [nav, setNav] = useState(0);

  const handleNavDelegation = useCallback(e => {
    const { id } = e.target.closest(".nav-delegation").dataset;
    id && setNav(id * 1);
  }, []);

  return (
    <>
      <ButtonContainer onClick={handleNavDelegation}>
        {navigation.map((name, i) =>
          nav === i ? (
            <OnSelected key={i} data-id={i} className="nav-delegation">
              {name}
            </OnSelected>
          ) : (
            <UnSelected key={i} data-id={i} className="nav-delegation">
              {name}
            </UnSelected>
          )
        )}
      </ButtonContainer>
      {cloneElement(children, { nav: [nav, navigation[nav]] })}
    </>
  );
}

export default React.memo(Navigation);
