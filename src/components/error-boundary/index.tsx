import React from "react";
import { Text, Button, Image } from "components/";
import * as Styled from "./index.style";

interface Props {
  keys: any[];
  resetKey: (T: Error) => void;
  resetQuery: () => void;
}

interface States {
  hasError: boolean;
  error?: Error;
}
const initialState = { hasError: false, error: null };

export default class ErrorBoundary extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true, error };
  }

  // componentDidCatch(error, errorInfo) {
  //   // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  //   logErrorToMyService(error, errorInfo);
  // }

  // Fallback 컴포넌트의 내부 이벤트를 통한 리렌더링
  resetBoundary = () => {
    this.props.resetKey?.(this.state.error);
    this.setState(initialState);
  };

  // 부모 컴포넌트에서의 props 변경 감지를 통한 리렌더링
  // componentDidUpdate(prev) {
  //   if (prev.keys !== this.props.keys) {
  //     this.resetBoundary();
  //   }
  // }

  componentDidMount() {
    const submit = document.querySelector(".submit-area");
    submit.addEventListener("submit", e => {
      e.preventDefault();
      this.resetBoundary();
    });
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.

      return (
        <>
          <Styled.TextContainer>
            <Text>{this.state.error.message}</Text>
          </Styled.TextContainer>
          <Styled.ButtonContainer>
            <Button onClick={this.resetBoundary}>
              <Text>재시도</Text>
            </Button>
          </Styled.ButtonContainer>
          <Styled.ImageContainer>
            <Image src={`${process.env.PUBLIC_URL}/img/emoticon_3.gif`} />
          </Styled.ImageContainer>
        </>
      );
    }

    return this.props.children;
  }
}
