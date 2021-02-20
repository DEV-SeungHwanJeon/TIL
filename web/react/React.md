# React

1. 설치 node.js
2. Visual Studio Code 에디터 설치
3. 코드 저장할 폴더 생성 (저는 'MY_PROJECT로 생성')
4. 작업폴더를 VS Code 에디터로 Open Folder
5. 리액트 프로젝트 생성
   - TERMINAL ( 명령 프롬프트 )에서 MY_PROJECT 디렉토리로 이동한 후 명령어 `npx create-react-app 프로젝트명` 를 실행한다. (저는 프로젝트명을 'firstapp' 으로 생성)
   - create-react-app란, 리액트 셋팅이 다 완료된 boilerplate를 만들기 쉽게 도와주는 라이브러리이다.
   - firstapp 폴더 안에 리액트 개발에 필요한 모든 파일이 전부 설치된다.
6. 미리보기
   - MY_PROJECT/firstapp 에서 `npm start` 명령어를 실행하면 코드짠 것을 볼 수 있는 미리보기를 크롬에 띄운다.



App.js : 메인페이지에 들어갈 HTML을 짜는 곳.

사실 public 폴더의 index.html가 메인페이지이다.

그러나 App.js 의 내용들을 index.html에 넣어서 보여주기 때문에 메인페이지라고 하는 것이다. (넣는 기능은 index.js 파일의 `document.getElementByID('root')`를 통하여 구현)



node_modules : 라이브러리 모은 폴더

public : static 파일 보관함

src : 소스코드 보관함

package.json : 설치한 라이브러리 목록





Create-React-App : https://create-react-app.dev/docs/getting-started



## JPX (react 문법)

1. 태그에 class를 주고 싶으면

   `className` attribute로 접근한다.

   ex)

   

   ```react
   <div className="App"></div>
   ```

2.  리액트에서 데이터 바인딩(데이터를 HTML에 꽂아 넣는 것) 쉽게 하는 법 (React, Vue, Angular를 사용하는 이유)

   - 전통적인 JS 데이터바인딩:

     ```javascript
     document.getElementById().innerHTML = ''?
     ```

   - React :

     ```react
     { 변수명 }
     ```

3. 리액트에서 이미지 넣는 법

   - 기존:

     ```html
     <img src='dsadasd.jpg'></img>
     ```

     

   - React:

     ```react
     import logo from '.,/dsadasd.jpg';
     
     <img src={logo} />
     ```

     기존의 문법도 가능하긴 하다.

     리액트에서는 상상하는 모든 곳에 {}로 변수 집어넣기가 가능하다.

4. 스타일 적용

   - 기존:

     ```html
     <div style="font-size : 16px">안녕하세요</div>
     ```

     

   - 리액트:

     ```react
     <div style= { { color: 'blue'} }>안녕하세요</div>
     ```

5. 리액트의 데이터 저장공간 state 만드는 법

   - 상단에 import React, {useState } from 'react'; 로 변경하여 작성
   - 내장함수 useState 를 가져오겠다는 뜻.
   - `useState('남자 코트 추천');` 이렇게 작성하면 [a, b] array가 생성된다. a에는 '남자 코트 추천'이 있고, b에는 '남자 코트 추천' state를 정정해주는 함수가 들어있다.
   - `let [a,b] = useState('남자 코트 추천');` 처럼 작성하여 사용 (ES6 destructuring 문법)
   - 즉, state는 
     - 변수 대신 쓰는 데이터 저장공간
     - useState()를 이용하여 만들어야 함
     - 문자, 숫자 array, object 다 저장 가능
   - state에 데이터를 저장해놓는 이유:
     - 웹을 App처럼 동작하게 만들고 싶어서이다.
     - state가 변경되면 HTML을 새로고침 할 필요 없이 자동으로 재렌더링이 된다.

6. 이벤트 리스너

   - 기존 JS:

     ```javascript
     <span onclick= "1+1">
         따봉
     </span>
     ```

     

   - 리액트:

     ```react
     <span onClick= {함수()}>
         따봉
     </span>
     /* 또는
     <span onClick= { () => { 1 + 1} }>
         따봉
     </span>
     */
     ```

     C를 대문자로 변경하고 클릭될 때 실행할 함수를 대괄호로 감싸준다. (함수밖에 안된다.) function 대신에 `() => {실행할 내용}` 가 가능해졌다 (ES6)

     또한 onClick = {} 안에다가 함수()를 적으면 안된다. 함수를 바로 실행하라는 것이므로 소괄호를 제외한 그냥 함수명만 넣으면 된다.

7. state 데이터 수정 (깊은 복사)

   - `var newArray=글제목` 처럼 작성하면 단순한 값 공유이다. (reference data type)
   - 그래서 `var newArray=[...글제목]` 처럼 작성하여 deep copy 해줘야한다.

8. Modal 창으로 띄우는 상세 페이지

   - 페이지 전환을 위해서는 라우터를 배워야 한다.
   - return () 안에는 한개의 태그만 있어야 한다. ( 그래서 여러 태그를 한 태그로 감싸서 return 안에 넣어야 한다.)
     - 만약 의미없는 div를 쓰기 싫다면 `<>`와 `</>`로 묶어주자. (fregment 문법)

9. HTML을 줄여서 쓸 수 있는 방법:

   - HTML을 한 단어로 줄여서 쓸 수 있는 방법.

   - 리액트의 Componenet 문법

     - 나만의 특별한 태그를 만들 수 있게 해줌.

     - `function App()` 과 동일한 계층에다가 `function Modal()`을 생성해준다.

     - ```react
       function Modal() {
           return (
           <div>제목</div>
           <p>날짜</p>)
       }
       
       <Modal></Modal>
       ```

     - 어떤 것을 Component로 만드는 게 좋을까?

       - 반복출현하는 HTML 덩어리들
       - 자주 변경되는 HTML UI들 (재랜더링이 많이 발생하는 UI들을 Component로 만들어두면 성능면에서 좋음)
       - 다른 페이지 만들 때도 컴포넌트로 만듦

     - 단점:

       - state를 써야되면 복잡해진다.

10. 

