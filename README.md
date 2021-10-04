## Loa-Hands - 로스트아크 유저 검색 앱

### 서버 및 API

- 이벤트 및, 유저 정보를 받아오기 위해 `heroku` 를 통해 프록시 겸 데이터를 받아오는 서버 활용

### 모듈

- `React-Router` : `UserInfo`에서의 검색된 값을 `path`로 기억하여, 새로고침을 하여도 바로 검색된 화면을 노출시키도록 함
- `React-Query` : `request`, `response`를 수행하는 비동기작업을 작동하는데 사용
- `axios` : `fetch api` 대용
- `StoryBook` : `UI test`
- `Jest`, `React-testing-library` : `Unit test`
- `styled-components` : `CSS-in-JS`

### src 디렉토리 구조

- `api` : 전반적인 서버와의 비동기 메소드 관리
- `components` : 재활용가능한 컴포넌트 관리. 대부분 단순 `UI`를 그리기 위한 컴포넌트
- `hooks` : 기능에 따라서 추상화된 로직들을 관리
- `json` : 정적인 `json`데이터 관리
- `pages` : 각종 로직이 연결되는 최상위 컴포넌트
  > `Route` 개념
- `layout` : 공통으로 사용되는 `UI`
- `style` : 폰트등의 정적인 스타일
- `utils` : 재사용 가능한 이벤트 매니저
- `constants` : 공통으로 사용되는 상수

### Components 규칙

1. `Text`, `Input`, `Button`과 같은 가장 작은 단위의 컴포넌트들은 최대한의 재사용성을 위해 기본 `Element`들을 확장하여 사용

```js
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./index.style";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: PropsWithChildren<IButton>) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

export default Button;
```

2. `margin`과 같은 컨텐츠 외부에 영향을 주는 스타일들은 상위컴포넌트에서 지정
3. 최대한 추상화 단계 통일화
4. `UI`를 구성하는데 사용되는 상태값을 계산하는 로직을 최대한 `hooks`로 추상화 하여 선언형으로 사용

### UX 개선사항

1. `Home`에서 `calendar`, `event` 컴포넌트의 비동기작업을 분리하여, 정적인 `data`들은 즉시 생성하고, 나머지 `data`들이 `response`된다면 그때 이어서 생성하도록 함.
   > `Next.js`를 사용하게 될 경우, `getStaticProps`로 대체될 것 같음.
2. 서버와의 통신을 하는 비동기작업을 수행할 때, 효율적으로 진행하기 위해 `React-Query` 사용
   > `Suspense`와 `ErrorBoundary`를 사용하여 컴포넌트의 기본적인 목적을 벗어나는 `loading`과 `error`를 외부로 분리
   > `Suspense`의 경우 불완전한 상태이기 때문에 다른 에러를 발생시켜 제거
   > `stale` 및 `cache` 시간을 설정하여 지정한 시간 이내에 재검색되었다면, 캐싱된 값으로 렌더링 그렇지 않다면 새롭게 `data` 요청
3. 서버로의 요청이 중첩될 경우, 이전의 요청을 취소하도록 함
4. `UserInfo`에서 `userData`, `collection` 두가지의 `data` 요청 비동기작업이 수행되는데, `collection`의 경우 `userData`의 값이 존재하여야 진행될 수 있는 상황에서 `collection`의 `response`를 받기까지 초기 렌더링이 지연되는 상황
   > 두가지를 분리하여 `userData`만 완료된다면 렌더링을 수행하고, 이후에 `collection`을 별도로 진행하도록 하여 1초의 시간 절약
5. 사용자에게서 권한을 허락받는다면, `timer`가 적용되어있는 컨텐츠들은 알림을 수행할 수 있음
