import React, { ReactElement } from "react";

interface ErrorBoundaryProps {
  resetQuery?: () => void;
  errorFallback: (...args: any[]) => ReactElement;
  children: ReactElement;
  keys: any;
}

interface ErrorBoundaryStates {
  hasError: boolean;
  error: Error | null;
}
const initialState = { hasError: false, error: null };

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryStates
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  prevKeys = null;

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    console.log("error ");
    return { hasError: true, error };
  }

  // componentDidCatch(error, errorInfo) {
  //   // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  // }

  // Fallback 컴포넌트의 내부 이벤트를 통한 리렌더링
  resetBoundary = () => {
    this.props.resetQuery?.();
    this.prevKeys = this.props.keys;
    this.setState(initialState);
  };

  // 부모 컴포넌트에서의 props 변경 감지를 통한 리렌더링
  componentDidUpdate(prev: ErrorBoundaryProps) {
    if (prev.keys !== this.props.keys) this.resetBoundary();

    return false;
  }

  componentDidMount() {
    this.resetBoundary();
  }

  render() {
    if (this.prevKeys !== this.props.keys) return null;
    if (this.state.hasError) {
      const { errorFallback: ErrorFallback } = this.props;
      const { error } = this.state;
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.

      return <ErrorFallback error={error} resetBoundary={this.resetBoundary} />;
    }

    return this.props.children;
  }
}
