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



#### 전형적인 방법으로 개발 환경 설정

리액트 네이티브와 그 디펜던시 설치 방법(http://facebook.github.io/react-native)



리액트 네이티브 버전에 따라 설치방법에 차이가 있다.

공통적으로 준비되어야 할 항목:

- node.js
- 리액트 네이티브
- iOS 개발 환경(Xcode)
- 안드로이드 개발 환경(JDK, 안드로이드 SDK, 안드로이드 스튜디오)



`npm ins tall -g react-native-cli` 로 설치.

`react-native init FirstProject` 로 프로젝트 생성

- ios/ 와 /android 디렉터리에는 각 플랫폼별로 자동 생성된 기본 코드가 있다.
- 생성된 리액트 네이티브 앱의 실행 시작점에 해당하는 리액트 코드는 index.ios.js와 index.android.js에 들어있다.
- npm을 통해 설치된 디펜던시는 node_modules에 위치한다.



#### 안드로이드에서 앱 실행하기

`react-native run-android`



### 샘플코드 살펴보기

기본 앱을 살펴보자.

리액트 네이티브에서 한 가지 불편한 점으로는, 사용하려는 네이티브로 제공되는 모듈을 모두 명시적으로 import해야한다는 점이다.

StyleSheet나 AppRegistry와 같은 라이브러리 함수의 경우에도 명시적으로 불러와야한다.

```react
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
```



컴포넌트 클래스를 살펴보자. 차이점으로는 div나 span 대신, Text나 View를 사용한다는 점과 style 객체를 사용한다는 점이 있다.

```react
export default class FirstProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload, {'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
```



리액트 네이티브의 모든 스타일은 스타일시트 대신 스타일 객체를 통해 작성하게 된다.

StyleSheet 라이브러리를 활용하여 스타일 객체를 작성하는 것이 표준 방법이다.

레이아웃은 flexbox를 이용하여 지정한다.





### 날씨 앱 만들기

- StyleSheets
- flexbox
- 네트워크 통신
- 사용자 입력
- 이미지를 활용하여 안드로이드와 iOS 디바이스에 배포 가능한 유용한 앱을 어떻게 만드는지





1. 샘플 앱의 기본 코드를 수정한다.

   - 초기 컴포넌트를 WeatherProject.js라는 파일로 분리한다.

   - 전형적인 리액트 네이티브 설정이라면 (index.android.js의 코드)

     - ```react
       import { AppRegistry } from "react-native";
       import WeatherProject from ".WeatherProject";
       AppRegistry.registerComponent("WeatherProject", () => WeatherProject);
       ```

   - Create React Native App이라면 ( App.js 의 코드)

     - ```react
       import WeatherProject from ".WeatherProject";
       export default WeatherProject;
       ```

2. 사용자 입력 다루기

   - zip코드를 입력받아 입력된 지역의 일기예보를 얻어오도록 만들어보자.

   - 텍스트필드를 추가하여 사용자 입력을 받자.

     - zip 코드를 컴포넌트의 초기 state로 지정할 수 있다.

     - ```react
       constructor(props) {
           super(props);
           this.state = { zip: "" };
       }
       ```

     - 컴포넌트 클래스를 생성할 때, construct 함수 안에서 this.state에 값을 할당하여 리액트 컴포넌트의 state 초깃값을 지정한다.

   - Text 컴포넌트 중 하나를 this.state.zip의 내용이 표시되도록 바꾸자.

     - ```react
       <Text style={styles.welcome}>
       	You input {this.state.zip}
       </Text>
       ```

   - 이와 별도로 TextInput 컴포넌트를 추가하자. 이 컴포넌트는 사용자로부터 텍스트 입력을 받을 수 있는 기본 컴포넌트이다.

     - ```react
       <TextInput
           style={styles.input}
           onSubmitEditing={this._handleTextChange}/>
       ```

     - TextInput에 onChange나 OnFocus 같은 이벤트를 다루는 콜백함수를 추가할 수 있다.

3. 스타일시트에 input스타일을 추가하자.

   - ```react
     const styles = StyleSheet.create({
         input: {
             fontSize: 20,
             borderWidth: 2,
             height: 40
         }
     });
     ```

4. props의 onSubmitEditing에 지정하는 콜백은 함수로 컴포넌트에 추가되어야 한다.

   - ```react
     _handleTextChange = event => {
         this.setState({zip: event.nativeEvent.text})
     }
     ```

   - 두꺼운 화살표 문법(=>)으로 콜백 함수를 지정하여 콜백 함수가 컴포넌트 인스턴스에 바인딩 되도록 한다.

5. import 에 TextInput 넣기

   - ```react
     import {
         ...
         TextInput
         ...
     } from "react-native";
     ```

6. 중간 결과: ( WeatherProject.js )

   - ```react
     import React, { Component } from "react";
     
     import { StyleSheet, Text, View, TextInput } from "react-native";
     
     class WeatherProject extends Component {
         constructor(props) {
             super(props);
             this.state = { zip: "" };
         }
         
         _handleTextChange = event => {
             this.setState({ zip: event.nativeEvent.text });
         };
     
     	render() {
             return (
             	<View style={styles.container}>
                     <Text style={styles.welcome}>
                     	You input {this.state.zip}
                     </Text>
                     <TextInput
                         style={styles.input}
                         onSubmitEditing={this._handleTextChange}
                     />
                 </View>
             );
         }
     }
     
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: "center",
             alignItems: "center",
             backgroundColor: "#F5FCFF"
         },
         welcome: { fontSize: 20, textAlign: "center", margin: 10},
         input: {
             fontSize: 20,
             borderWidth: 2,
             padding: 2,
             height: 40,
             width: 100,
             textAlign: "center"
         }
     });
     
     export default WeatherProject;
     ```

7. 데이터 표시하기

   - zip 코드에 해당하는 지역의 일기예보 표시

     - ```react
       constructor(props) {
           super(props);
           this.state = { zip: "", forecast: null };
       }
       ```

     - 명백히 하기 위해 ,일기예보 렌더링을 별도의 컴포넌트로 분리.

       - Forecast.js 라는 파일 생성

         - Forecast.js에 선언된 `<Forecast>` 컴포넌트

           ```react
           import React, { Component } from "react";
           
           import { StyleSheet, Text, View } from "react-native";
           
           class Forecast extends Component {
               render() {
                   return (
                   	<View style={styles.container}>
                       	<Text style={styles.bigText}>
                           	{this.props.main}
                           </Text>
                       	<Text style={styles.mainText}>
                           	Current conditions: {this.props.description}
                           </Text>
                       	<Text style={styles.bigText}>
                           	{this.props.temp}_F
                           </Text>
                       </View>
                   );
               }
           }
           
           const styles = StyleSheet.create({
               container: { hgeight: 130 },
               bigText: {
                   flex: 2,
                   fontSize: 20,
                   textAlign: "center",
                   margin: 10,
                   color: "#FFFFFF"
               },
               mainText: {
                   flex: 1,
                   fontSize: 16,
                   textAlign: "center",
                   color: "#FFFFFF"
               }
           });
           
           export default Forecast;
           ```

         - `<Forecast>`컴포넌트는 자신의 props를 기반으로 몇 개의 `<Text>`를 렌더링할 뿐이다.

   - Forecast 컴포넌트를 불러오고 render 함수에 추가.

   - this.state.forecast를 props로 컴포넌트에 전달

8. 중간 결과: ( WeatherProject.js )

   - ```react
     import React, { Component } from "react";
     
     import { StyleSheet, Text, View, TextInput } from "react-native";
     import Forecast from "./Forecast";
     
     class WeatherProject extends Component {
         constructor(props) {
             super(props);
             this.state = { zip: "", forecast: null };
         }
         
         _handleTextChange = event => {
             this.setState({ zip: event.nativeEvent.text });
         };
     
     	render() {
             let content = null;
             if (this.state.forecast !== null){
                 content = (
                 	<Forecast
                         main={this.state.forecast.main}
                         description={this.state.forecast.description}
                         temp={this.state.forecast.temp}
                     />
                 );
             }
             
             return (
             	<View style={styles.container}>
                     <Text style={styles.welcome}>
                     	You input {this.state.zip}
                     </Text>
                     {content}
                     <TextInput
                         style={styles.input}
                         onSubmitEditing={this._handleTextChange}
                     />
                 </View>
             );
         }
     }
     
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: "center",
             alignItems: "center",
             backgroundColor: "#F5FCFF"
         },
         welcome: { fontSize: 20, textAlign: "center", margin: 10},
         input: {
             fontSize: 20,
             borderWidth: 2,
             padding: 2,
             height: 40,
             width: 100,
             textAlign: "center"
         }
     });
     
     export default WeatherProject;
     ```

9. 웹에서 데이터 가져오기

   - 네트워킹 API

     - 모바일 디바이스에서 AJAX 요청을 보내기 위해서 jQuery를 사용하지 않을 것이다.

     - 대신 리액트 네이티브가 구현한 Fetch API를 사용한다. (Promise 기반의 문법)

     - 리액트 네이티브에서 Fetch API 사용하기

       ```react
       fetch('http:www.somesite.com')
       .then((response) => response.text())
       .then((responseText) => {
           console.log(responseText);
       });
       ```

   - zip 코드에 해당하는 지역의 현재 날씨를 제공해주는 OpenWeatherMap API를 사용해보자.

     - 이 API 사용을 위해 open_weather_map.js에 포함된 간단한 라이브러리 ( src/weather/open_weather_map.js )를 불러오자.

     - `import OpenWeatherMap from "./open_weather_map";`

     - 이 API를 연동하기 위해 TextInput 컴포넌트의 콜백에서 OpenWeatherMap API에 요청하도록 수정한다.

     - ```react
       _handleTextChange = event => {
           let zip = event.nativeEvent.text;
           OpenWeatherMap.fetchForecast(zip).then(forecast => {
               console.log(forecast);
               this.setState({ forecast: forecast });
           });
       };
       ```

10. 일기예보 글자가 보이도록 컨테이너 스타일을 수정하자

    - ```react
      container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#666666"
      }
      ```

