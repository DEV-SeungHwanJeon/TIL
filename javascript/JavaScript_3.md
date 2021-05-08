# JavaScript 총 정리 3



## 함수

참조 타입 중 하나로써 **function 타입**에 속함

또한 자바 스크립트의 함수는 일급 객체(First-class citizens)에 해당한다.

함수에서 인자 작성 시 '=' 문자 뒤 기본 인자 선언이 가능하다.

- 일급 객체 : 아래의 조건들을 만족하는 객체
  - 변수에 할당 가능
  - 함수의 매개변수로 전달 가능
  - 함수의 반환 값으로 사용 가능



자바스크립트에서 함수 정의 방법 :

#### 함수 선언식

- 함수의 이름과 함께 정의하는 방식
- 타입 : function
- 3가지 구성
  - 함수의 이름
  - 매개변수
  - 코드 (중괄호 내부)
- var로 정의한 변수처럼 호이스팅이 발생할 수 있다.
  - 함수 호출 이후에 선언해도 동작



#### 함수 표현식

- 함수를 표현식 내에서 정의하는 방식

  - 표현식 : 어떤 하나의 값으로 결정되는 코드의 단위

- 함수의 이름을 생략하고 익명 함수로 정의 가능

  - 익명 함수: 이름이 없는 함수. 함수 표현식에서만 가능

- 타입 : function

- 3가지 구성

  - 함수의 이름 (생략 가능)
  - 매개변수
  - 코드 (중괄호 내부)

- 함수 정의 전에 호출 시 에러 발생

  - 함수 표현식으로 정의된 함수는 변수로 평가되어 변수의 scope 규칙을 따른다.

    - ```javascript
      sub(7,2) // Uncaught ReferenceError : Cannot access 'sub' befor initialization
      
      const sub = function (num1, num2) {
          return num1 - num2
      }
      ```

      

  - 함수 표현식을 var 키워드로 작성한 경우, 변수가 선언 전 undefined로 초기화 되어 다른 에러가 발생한다.

    - ```javascript
      console.log(sub) // undefined
      sub(7,2) // Uncaught TypeError : sub is not a function
      
      var sub = function (num1, num2) {
          return num1 - num2
      }
      ```

      



## Arrow Function



#### 화살표 함수(Arrow Function)

- 함수를 비교적 간결하게 정의할 수 있는 문법

- function 키워드 생랼 가능

- 함수의 매개변수가 단 하나 뿐이라면, '( )'도 생략 가능

- 함수 몸통(코드)이 표현식 하나라면 '{}'과 return도 생략 가능

- ```javascript
  const arrow = function (name) {
      return `hello! ${name}`
  }
  
  // 1. function 키워드 삭제
  const arrow = (name) => { return `hello! ${name}`}
  
  // 2. ( ) 생략 (함수 매개변수가 하나일 경우만 )
  const arrow = name => { return `hello! ${name}` }
  
  // 3. {} & return 생략 (바디가 표현식 1개인 경우만)
  const arrow = name => `hello! ${name}`
  ```





## 배열 (Arrays)

키와 속성들을 담고 있는 참조 타입의 객체(object)로 순서를 보장한다.

주로 대괄호[]를 이용하며 생성하고, 0을 포함한 양의 정수 인덱스로 특정 값에 접근 가능

배열의 길이는 array.lenght 형태로 접근 가능 ( 배열의 마지막 원소 : `array[array.length-1]` )



#### 기본 배열 조작 메서드

- reverse : 원본 배열의 요소들의 순서를 반대로 정렬
- push & pop : 배열의 가장 뒤에 요소를 추가/제거
- unshift & shift : 배열의 가장 앞에 요소를 추가/제거
- includes : 배열에 특정 값이 존재하는지 판별 후 참/거짓 반환
- indexOf : 배열에 특정 값이 존재하는지 판별 후 인덱스 반환 ( 요소가 없을 경우 -1 반환 )
- join : 배열의 모든 요소를 구분자를 이용하여 연결. 구분자 생략시 쉼표로 연결



#### 배열을 순회하며 특정 로직을 수행하는 메서드

메서드 호출 시 인자로 callback 함수(함수 내부에서 실행될 목적으로 인자로 넘겨받는 함수)를 받는것이 특징이다. 

- forEach : 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행 ( 반환 값 없음 )

  - `array.forEach(callback(element[, index[, array]]))`

  - 매개변수 3가지 

    - element: 배열의 요소

    - index : 배열 요소의 인덱스

    - array : 배열 자체

      

- map : 콜백 함수의 반환 값을 요소로 하는 새로운 배열 반환

  - `array.map(callback(element[, index[, array]]))`

  - 기존 배열 전체를 다른 형태로 바꿀 때 유용

    

- filter : 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열 반환

  - `array.filter(callback(element[, index[, array]]))`

  - 기존 배열의 요소들을 필터링 할 때 유용

    

- reduce : 콜백 함수의 반환 값들을 하나의 값(acc)에 누적 후 반환

  - `array.reduce(callback(acc, element, [index[, array]])[, initialValue])`

  - reduce 메서드의 주요 매개변수 :

    - acc : 이전 callback 함수의 반환 값이 누적되는 변수
    - initialValue : 최초 callback 함수 호출 시 acc에 할당되는 값으로, 선택적으로 설정 가능하며 직접 제공하지 않으면 배열의 첫 번째 값 사용 ( 빈 배열의 경우 initialValue를 제공하지 않으면 에러 발생 )

    

- find : 콜백 함수의 반환 값이 참이면 해당 요소를 반환

  - `array.find(callback(element[, index[, array]]))`

  - 찾는 값이 배열에 없으면 undefined 반환

    

- some : 배열의 요소 중 하나라도 판별 함수를 통과하면 true을 반환

  - `array.some(callback(element[, index[, array]]))`

  - 모든 요소가 통과하지 못하면 거짓 반환 ( 빈 배열은 항상 거짓 반환 )

    

- every : 배열의 모든 요소가 판별 함수를 통과하면 true를 반환

  - `array.every(callback(element[, index[, array]]))`
  - 모든 요소가 통과하지 못하면 거짓 반환 ( 빈 배열은 항상 참 반환 )





#### 배열 순회 방법 비교

- for loop
  - 모든 브라우저 환경에서 지원
  - 인덱스를 활용하여 배열의 요소에 접근
  - break, continue 사용 가능
- for... of
  - 일부 오래된 브라우저 환경 지원 X
  - 인덱스 없이 배열의 요소에 바로 접근
  - break, continue 사용 가능
- forEach
  - 대부분의 브라우저 환경에서 지원
  - **break, continue 사용 불가능**





## 객체

> 객체는 속성(property)의 집합이며 중괄호 내부에 key와 value의 쌍으로 표현

- key : 문자열 타입만 가능하며, key이름에 띄어쓰기 등의 구분자가 있을 경우 따옴표로 묶어서 표현
- value : 모든 타입이 가능하다. 객체 요소 접근은 점 또는 대괄호로 가능하며, key 이름에 띄어쓰기 등의 구분자가 있을 경우 대괄호 접근만 가능



#### 객체관련 ES6에 새로 도입된 문법

- 속성명 축약 ( shorthand )

  - 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 축약 가능

  - ```javascript
    let books = ['JS', 'Python']
    let magazines = null
    
    var bookShop = {
        books,
        magazines,
    }
    console.log(bookShop.books) // ['JS', 'Python']
    ```

    

- 메서드명 축약

  - 메서드(어떤 객체의 속성이 참조하는 함수) 선언 시 function 키워드 생략 가능

  - ```javascript
    // ES5
    const obj = {
        greeting: function() {
            console.log('Hi!')
        }
    };
    obj.greeting() // Hi!
    
    //ES6
    const newObj = {
        greeting() {
            console.log('Hi!')
        }
    };
    
    newObj.greeting() // Hi!
    ```

    

- 계산된 속성명 사용하기

  - 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성 가능

  - ```javascript
    const key = 'regions'
    const value = ['광주', '대전', '구미', '서울']
    const ssafy = {
        [key]: value,
    }
    console.log(ssafy) // {regions: Array(4)}
    console.log(ssafy.regions) // ['광주', '대전', '구미', '서울']
    ```

    

- 구조 분해 할당

  - 객체(배열도 가능)를 분해하여 속성을 변수에 쉽게 할당할 수 있다.

  - ```javascript
    const userInformation = {
        name: 'SeungHwan Jeon',
        userId : 'DEV-SeungHwanJeon',
        phoneNumber: '010-1234-5678',
        email: 'tmd4347@gmail.com'
    }
    // ES5
    const name = userInformation.name
    const userId = userInformation.userId
    const phoneNumber = userInformation.phoneNumber
    const email = userInformation.email
    
    // ES6
    const { name } = userInformation
    const { userId } = userInformation
    const { phoneNumber } = userInformation
    const { email } = userInformation
    
    // 여러개도 가능
    const { name, userId } = userInformation
    ```



#### JSON (JavaScript Object Notation)

- key-value쌍의 형태로 데이터를 표기하는 언어 독립적 표준 포맷

- 자바스크립트의 객체와 유사하게 생겼으나 실제로는 문자열 타입

  - 따라서 JavaScript의 객체로써 조작하기 위해서는 구문 분석(parsing)이 필수

- 자바스크립트에서는 JSON을 조작하기 위한 두 가지 내장 메서드 제공

  - JSON.parse()
    - JSON => JavaScript Object ( 자바스크립트 객체 )
  - JSON stringify()
    - JavaScript Object => JSON

- ```javascript
  // Object => JSON
  const jsonData = JSON.stringify({
      coffee: 'Americano',
      iceCream: 'Cookie and cream',
  })
  
  console.log(jsonData)
  console.log(typeof jsonData) // string
  ```

- ```javascript
  // JSON => Object
  
  const jsonData = JSON.stringify({
      coffee: 'Americano',
      iceCream : 'Cookie and cream',
  })
  
  const parsedData = JSON.parse(jsonData)
  
  console.log(parseData)
  console.log(typeof parsedData) // object
  ```

- 