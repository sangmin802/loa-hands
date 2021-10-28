import styled from "styled-components";
import Text from "components/text";

const Timer = styled.article<{ borderColor: string }>`
  overflow: hidden;
  position: relative;

  ${({ theme }) => theme.contentBox}
  border-color : ${({ borderColor }) => borderColor};
`;

const Background = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const TimerTitle = styled(Text)`
  padding: 0.1rem;
  text-align: center;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
`;

const TimerImg = styled.div`
  width: 25%;
  position: relative;
`;

const TimerLv = styled(Text)`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.1rem;
  border-radius: 3px;
`;

const Time = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimerPosition = styled(Text)`
  text-align: center;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

export {
  Timer,
  Background,
  TimerTitle,
  Content,
  TimerImg,
  TimerLv,
  Time,
  TimerPosition,
};
