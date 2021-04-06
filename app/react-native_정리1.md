## 리액트 네이티브 다루기

브라우저의 DOM으로 렌더링하는 대신에 리액트 네이티브는 오브젝티브-C API 호출하여 iOS 컴포넌트로 렌더링하고, 자바 API를 호출하여 안드로이드 컴포넌트로 렌더링한다. 웹 기반의 화면으로 최종 렌더링되는 대부분의 크로스 플랫폼 앱 개발 방법들과 구별되는 리액트 네이티브의 특징이다.

이는 리액트 네이티브의 'bridge'가 대상 플랫폼의 네이티브 UI 요소에 접근하는 인터페이스를 제공하기 때문에 가능한 일이다.

- 리액트 컴포넌트는 렌더 함수에서 어떻게 보여야 하는지가 설명되어 있는 마크업을 전달한다
- 이는 웹 페이지를 위한 리액트에서는 바로 브라우저의 DOM으로 전환된다.
- 리액트 네이티브에서 이 마크업은 대상 플랫폼에 맞춰서 전환된다.
  - 예를 들어 `<View>`는 iOS의 경우 `<UIView>` 가 된다.

가상 DOM이라는 이 추상화 레이어 덕분에 리액트 네이티브는 다른 플랫폼까지 지원할 수 있다.

최근에는 리액트 네이티브로 윈도우와 우분투 데스크톱 앱을 만들 수 있게 해주는 오픈소스도 있다.



#### 렌더링 라이프사이클

리액트 라이프사이클:

- 브라우저에서 리액트가 동작할 때, 리액트 컴포넌트를 마운팅하면서 시작한다.
  - 페이지 렌더
  - 리액트 컴포넌트를 DOM에 마운팅
  - 리액트 컴포넌트 렌더링
- 그 후 리액트는 필요에 따라 컴포넌트를 여러 번 렌더링하게 된다.
  - state/props 변경
  - 가상 DOM에서 차이점 계산
  - 리액트 컴포넌트를 다시 렌더링
- 렌더링 단계에 필요한 HTML 마크업은 리액트 컴포넌트의 render메서드를 통해 리액트에 전달된다. 리액트는 필요에 따라 이 마크업을 페이지에 직접 렌더링한다.



리액트 네이티브도 라이프사이클은 웹에서의 렌더링과 같지만 렌더링 절차는 조금 다르다. ( 리액트 네이티브는 브리지에 의존하기 때문 )

브리지는 자바스크립트에서 발생하는 호출을 대상 플랫폼의 API와 UI 앨리먼트에 연결한다. 리액트 네이티브는 메인 UI 스레드에서 동작하지않기 때문에 사용자 경험에 영향을 주지 않고 비동기적으로 실행할 수 있다.



#### 리액트 네이티브 컴포넌트 만들기

모든 리액트의 코드는 리액트 컴포넌트 안에 존재한다. 

- 리액트 컴포넌트
  - 웹페이지를 만들 때 일반적인 HTML 요소 (div, p, span, a, 등)를 사용하여 렌더링한다.
- 리액트 네이티브 컴포넌트
  - HTML 요소 대신에 플랫폼에 종속적인 리액트 컴포넌트를 사용한다. ( View )
    - View는 div와 유사하다

| 리액트 | 리액트네이티브         |
| ------ | ---------------------- |
| div    | View                   |
| span   | Text                   |
| li, ul | FlastList, 자식 아이템 |
| img    | Image                  |

모든 UI 요소는 리액트 컴포넌트로 div와 같은 기본 HTML 요소와는 달리, 사용하기 원하는 다른 컴포넌트를 명시적으로 import할 필요가 있다. 

( 리액트 네이티브 깃허브 프로젝트에 포함되어있는 RNTester 앱을 실행하면 리액트 네이티브가 지원하는 모든 UI 요소를 살펴볼 수 있다.)





#### JSX(JavaScript XML) 사용하기

JSX로 마크업과 이를 다루는 자바스크립트를 한 파일 안에 작성하게 된다.



- 기본 자바스크립트 파일로 만든 리액트 컴포넌트의 예

  - ```javascript
    class HelloMessage extends React.Component {
        render() {
            return React.createElement(
            	"div",
            	null,
            	"Hello ",
            	this.props.name
            );
        }
    }
    ReactDOM.render(
    React.createElement(HelloMessage, {name: "Bonnie"}), mountNode);
    ```

- JSX를 이용한 리액트 컴포넌트의 예

  - React.Element를 호출하고 HTML 속성을 넘기는 대신에 XML 형식의 마크업을 사용한다.

  - ```jsx
    class HelloMessage extends Component {
        render() {
            return <div>Hello {this.props.name}</div>;
        }
    }
    
    ReactDOM.render(<HelloMessage name="Bonnie"/>,mountNode);
    ```

- 앞의 두 코드는 모두 다음 HTML과 같은 페이지에 렌더링한다.

  - `<div>Hello Bonnie</div>`



#### 네이티브 컴포넌트 스타일링

리액트 네이티브에서는 스타일을 적용하는 하나의 표준을 사용한다.

리액트와 대상 플랫폼 사이의 브리지는 매우 간결하게 정리된 CSS 구현체를 갖고 있다. 여기서는 flexbox 위주로 레이아웃을 한다. 

```react
// 스타일 정의
const style={
    backgroundColor: 'white',
    fontSize: '16px'
};

// 스타일 적용
const txt = (
	<Text style={style}>
    	A styled Text
    </Text>);
```





## 애플리케이션 만들어보기

#### 환경설정

리액트 네이티브 개발 환경 설정 방법은 크게 2가지로 나눌 수 있다.

- Create React Native App 라는 도구를 사용하는 방법이다.
  - 자바스크립트만 사용하는 앱만 지원한다.
  - 손쉽게 테스트 및 프로토타이핑할 수 있게 해준다.
- react-native init 명령어를 활용한다
  - 리액트 네이티브와 그 디펜던시(dependency)까지 모두 설치하게 되는 방법이다.



#### Create React Native App 개발 환경 설정

- create-react-native-app 패키지를 npm(node.js package manager)을 이용하여 설치하자. 리액트 네이티브는 npm을 이용하여 디펜던시를 관리한다. npm에는 node.js 관련 패키지만 있는 것이 아니라 자바스크립트 프로젝트를 위한 패키지라면 무엇이든 상관없이 등록되어 있다.
  - `npm install -g create-react-native-app`

- create-react-native-app을 이용하여 첫 앱 생성하기
  - `create-react-native-app first-project`
  - 생성된 프로젝트 구조는 간단한 자바스크립트 프로젝트에서 볼 수 있는 구조이다.
  - 구조:
    - App.js : 실제 앱 코드이다.
    - App.test.js : 간단한 테스트 코드가 들어있다. (`__tests__/App.js`파일로 바뀐 듯)
    - README.md : 프로젝트 실행 방법에 대해 설명되어 있다 ( 현재는 없음)
    - app.json
    - node_modules
    - package.json : 프로젝트 관련 메타데이터와 디펜던시 정보가 포함되어있다.
    - yarn.lock

- 앱 실행하기
  - `cd first-project`
  - `npm start`