# React

## 1. 리액트가 만들어진 계기

JavaScript를 사용하여 HTML로 구성된 UI를 제어할 때, DOM 관리와 상태값 업데이트 관리를 최소화하고, 오직 기능 개발, 그리고 UI 구현에 집중할 수 있도록 하기 위한 여러 라이브러리/프레임워크가 만들어졌다.



**라이브러리/프레임워크의 선택**

- Angular
  - UI 구현 시 Angular만의 문법이 다양하게 존재한다. 특정 기능을 구현 할 때 편리하게 대신 해주는 것이 많다. 라우터, HTTP 클라이언트 등 웹 프로젝트에서 필요한 대부분의 도구들이 프레임워크 안에 내장되어있다. Angular2의 경우 주로 TypeScript와 함께 사용된다.
- React
  - "컴포넌트"(데이터를 넣으면 우리가 지정한 UI를 조립해서 보여준다.) 라는 개념에 집중이 되어있는 라이브러리이다. HTTP 클라이언트, 라우터, 심화적 상태 관리 등의 기능들은 내장되어있지 않다. 따로 공식 라이브러리가 있는 것도 아니어서, 개발자가 원하는 스택을 마음대로 골라서, 라이브러리를 마음대로 만들어서 사용할 수 있다.
- Vue
  - 대부분 Webpack 같은 모듈 번들러를 사용하여 프로젝트를 구성해야하는 Angular와 React와는 달리, 단순 CDN에 있는 파일을 로딩하는 형태로 스크립트를 불러와서 사용하기 편하다. HTML을 템플릿처럼 그대로 사용할 수 있어서 마크업을 만들어주는 디자이너/퍼블리셔가 있는 경우 작업 흐름이 매우 매끄럽다. 공식 라우터, 상태관리 라이브러리가 존재한다.



수많은 프레임워크들은 데이터단을 담당하는 모델(Model), 사용자의 화면에서 보여지게 되는 뷰(View), 그리고 사용자가 발생시키는 이벤트를 처리해주는 컨트롤러 (Controller)로 이뤄진 MVC 패턴, 그리고 MVC에서 파생된 MVVM(View Model), MVW(Whatever) 등의 패턴으로 이뤄져있다.

공통점은 바로 모델(Model)이다. 방금 언급했던 프레임워크들의 모델은, 대부분 양방향 바인딩을 통하여 모델에 있는 값이 변하면, 뷰에서도 이를 변화시켜준다.

"변화"는 복잡한 작업이다. 특정 이벤트가 발생했을 때, 모델에 변화를 일으키고, 변화를 일으킴에 따라 어떤 DOM을 가져와서 어떠한 방식으로 뷰를 업데이터 해줄 지 로직을 정해줘야 한다.

리액트의 매뉴얼에는 "우리는 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다."라는 내용이 있다.

React의 경우에는 어떠한 상태가 바뀌었을 때, 그 상태에 따라 DOM을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라, 아예 다 날려버리고 처음부터 새로 만들어서 보여준다는 아이디어에서 개발이 시작됐다. 이렇게 되면 업데이트를 어떻게 할지에 대한 고민을 전혀 안해도 되기 때문에 개발이 쉬워진다.

하지만 동적인 UI를 보여주기 위해서 그때 그때 새로운 뷰를 만들면 속도가 느릴 것이다. 그렇다면 규모가 큰 웹어플리케이션에서는 불가능한 것인가? React에서는 Virtual DOM 이라는 것을 사용해서 가능하게 만들었다.

![image-20210315235643994](React_1.assets/image-20210315235643994.png)

Virtual DOM은 가상의 DOM이다. 브라우저에 실제로 보여지는 DOM이 아닌, 메모리에 가상으로 존재하는 DOM으로서 그냥 javascript 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM을 보여주는 것보다 속도가 훨씬 빠르다. 리액트는 상태가 업데이트가 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM에 한번 렌더링을 하고, 기존의 DOM과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해준다. 즉, 데이터가 바뀌었을 때 일단 바뀐 데이터로 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔주는 것이다. 

이러한 방식을 통하여 업데이트를 어떻게 할 지에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 된다.



**리액트의 특별한 점**

- 엄청난 생태계
  - jQuery, 혹은 일반 자바스크립트로 만들어진 라이브러리들도 리액트로 포팅되서 많이 작성되고 있다. 또한 그냥 단순히 특정 기능을 구현한 라이브러리(form, carousel, animation, ui)가 아닌, 프로젝트의 구조와 강하게 묶여있는 라우터, 상태관리 라이브러리들도 매우 다양하다.
- 사용하는 곳이 많다.
  - 기존에 만들어진 프로젝트들 중에서 이미 jQuery, Angular, Ember 등으로 만들어진 프로젝트들을 제외하고 새로 만들어지는 프로젝트, 혹은 리뉴얼되는 프로젝트에서 많이 사용된다.
- 지속적으로 사용하게 된다.
  - 설문조사에서 약 93%가 리액트를 다시 사용할 의향이 있다고 했음.
  - 2017년 가장 사랑을 많이 받은 라이브러리.



**리액트 라이브러리들**

라우터 라이브러리 : React-router, Next.js, After.js

상태관리 라이브러리 : Redux, MobX, fr(e)actal

리액트 라이브러리는 뷰 쪽만 관리하게 하고, 나머지 기능은 써드파티라이브러리가 담당하게 함으로서, 리액트는 리액트 라이브러리로서 더욱 성숙해질 수 있다.





## 2. 리액트 프로젝트 시작하기

리액트 프로젝트를 제대로 작업하려면 Node, yarn, Webpack, Babel 등의 도구를 설치하여 프로젝트를 설정해줘야한다. 페이스북에서 제공하는 create-react-app 도구를 통해 이 작업을 간단하게 준비해보자.



**Webpack, Babel 의 용도**

리액트 프로젝트를 만들게 되면서, JSX문법으로 작성된 **컴포넌트** 를 여러가지 파일로 분리해서 저장 할 것이다. 여러가지의 파일을 한개로 결합하기 위해서 우리는 Webpack을 사용하고, JSX를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해서 우리는 Babel을 사용한다.

**Node.js의 용도**

Webpack과 Babel 같은 도구들이 자바스크립트 런타임인 Node.js를 기반으로 만들어져있다. 해당 도구들을 사용하기 위해서 Nodel.js를 설치해야한다.

**Yarn의 용도**

Yarn은 조금 개선된 버전의 npm(Node.js를 설치하게 될 때 같이 딸려오는 패키지 매니저 도구)이다. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용한다. Yarn을 사용하는 이유는 더 나은 속도, 더 나은 캐싱 시스템을 사용하기 위함이다.



`create-react-app 앱이름` 명령어로 프로젝트를 생성한다.



## 3. JSX

리액트 컴포넌트에 대하여 조금 더 자세히 알아보자.



**컴포넌트 파일 파헤치기**

리액트를 사용하면 여러분의 웹 애플리케이션에서 사용하는 유저 인터페이스를 재사용 가능한 컴포넌트로 분리하여 작성함으로서, 프로젝트의 유지보수성을 우수하게 해준다.

컴포넌트에 해당하는 코드는 App.js에서 확인할 수 있다.

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```

리액트와 그 내부의 Component를 불러온다. 파일에서 JSX를 사용하려면, 꼭 react를 import 해줘야 한다.

이후 같은 디렉토리에 있는 파일 logo.svg와 App.css 파일을 불러왔다.

이렇게 import하는 것은 webpack 을 사용하기에 가능한 작업이다. 이렇게 불러오고나면 나중에 프로젝트를 빌드하게 됐을 때 webpack에서 파일의 확장자에 따라 다른 작업을 하게 된다. CSS 파일을 불러오게되면, 나중에 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행하고, 자바스크립트 파일을 불러오게되면 모든 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의 파일로 합쳐준다.

svg 처럼 사전에 설정되지 않은 확장자의 경우, 그냥 파일로 불러온 후에 나중에 특정 경로에 사본을 만들어주고, 해당 사본의 경로를 텍스트로 받아오게 된다.

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```

class를 통해서 컴포넌트를 만들었다. class형태로 만들어진 컴포넌트에는 꼭 render 함수가 있어야 한다. 그 내부에서는 JSX를 return 해주어야 한다. 위에 보이는 return안의 HTML같은 코드가 바로 JSX이다.



```javascript
export default App;
```

우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기를 해준다.

index.js 파일을 보면 다음 코드를 확인할 수 있다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

우리가 만든 컴포넌트를 불러올 때는 `import App from './App'`처럼 import를 사용해서 불러온다. 그리고 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 `ReactDOM.render` 함수를 사용한다. 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지 정해준다.

id가 root인 DOM을 찾아서 그리도록 한다. `<div id="root"></div> `. 해당 DOM은 public/index.html파일에서 찾아볼 수 있다.



**JSX**

JSX는 자바스크립트 이다. HTML과 비슷한 문법으로 작성을 하면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환시켜준다. XML 형태의 코드를 자바스크립트로 변환해야하기 때문에 JSX를 제대로 사용하기 위해서는 몇가지 규칙을 준수해줘야 한다.

- 태그는 꼭 닫혀있어야 한다.

- 두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다.

- JSX안에 자바스크립트 값 사용하기

- 조건부 렌더링 ( if 문을 사용할 수 없다. 사용하려면 IIFE(즉시 실행 함수 표현)을 사용해야 한다. )

- style 과 className

  - ```react
    import React, { Component } from 'react';
    
    class App extends Component {
      render() {
        const style = {
          backgroundColor: 'black',
          padding: '16px',
          color: 'white',
          fontSize: '12px'
        };
    
        return (
          <div style={style}>
            hi there
          </div>
        );
      }
    }
    
    export default App;
    ```

  - 







html

css bootstrap





























`본 문서는 벨로퍼트님의 강의를 보고 정리한 것입니다.`