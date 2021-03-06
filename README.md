# Loa-Hands

## ⚒ 21-03-06/11:43
* `IndentString` 컨텐츠의 경우, 구조가 달라 `ImgText`컴포넌트가 아닌 템플릿으로 직접생성

## ⚒ 21-03-05/17:24
* `AJAX` 결과값 커스텀 구조로 변경 완료
> 커스텀 구조로 변경하면서 컴포넌트 대량 감소, 재활용 가능성 향상
* 일부분 `css` 변경
* 특정 컴포넌트들은 역할군상 템플릿이 적합하다 생각하여 이동

## ⚒ 21-03-04/17:51
* `AJAX` 결과값 커스텀 구조로 변경중
> `ability`까지 완료, `skill`이후부터 진행해야함
* `detail`관련 데이터 모델 재활용가능
> 커스텀 구조로 변경하면서 컴포넌트 대량 감소

## ⚒ 21-03-03/17:30
* `Proxy`서버를 거쳐서가 아닌 `Node.js`서버 자체에서 `AJAX` 통신을 하도록 함
* 이미지, 텍스트 형식을 대부분 재활용한 컴포넌트로 교체

## ⚒ 21-02-26/17:06
* 리팩토링 v2
* 기존 두가지 타입의 컴포넌트를 통한 리팩토링이 아닌, 다른 기준으로 리팩토링
> Redux 사용의 의미가 사라짐.

1. 재사용 가능한 컴포넌트를 위해 `chldren`기능을 좀 더 잘 사용해보자.
> 재사용 가능한 컴포넌트를 사용한다는점에서, 최대한 부품부품별로 잘게 나누는것도 중요할 것 같다.
2. 비즈니스 로직을 생성하는 훅을 만들고, 필요한 컴포넌트에서는 생성된 훅을 가져다 사용한다.
> 사실, 이 방법이 올바른 방법인지는 잘 모르겠지만, `useDispatch`나 `useSelector` 등도 이와같이 하면, 해당 훅으로 생성되는 함수만 컴포넌트에서 받아오기때문에, 추후 기술스택이 업데이트되거나 바뀌더라도 해당 파일의 훅만 수정해주면 된다는 점이다.
3. 특정 컴포넌트에서만 사용되거나 뷰를 구성할 때 필요한 훅들 `useEffect`, `useState`또한 재사용할 수 있도록 분리하자.
4. `Redux`의 경우, 사실상 `Redux`를 사용한 순간 데이터 흐름 방식은 `Flux` 패턴이지만 디렉토리 구조는 `MVC`패턴을 따르기로 했다.

* 번외로, 상태값 변경을 통한 컴포넌트 생성 특유의 깜빡임 제거

## ⚒ 21-01-05/16:27
* 타입스크립트화 완료
 * 외부 데이터의 구조를 알 수 없어 `interface`를 구성하는데에 조금 어려움이 있었다.
   > 최소한 디스트럭쳐링을 하여 가져오는 속성의 경우는 무조건 `interface`에 포함시켜줬다.
   
## ⚒ 20-12-15/13:11
* 리팩토링 완료
  * 비즈니스로직과 뷰 구성파트 구분
  * 리액트 훅을 사용하였지만, 좀 더 확실하게 구분하기 위해 컴포넌트를 컨테이너와 프리젠테이셔널을 사용하였음.
    > 분명 다른 방법이 있을듯 함..