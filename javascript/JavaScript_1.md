# JavaScript 총 정리 1



## ECMA

ECMA (ECMA International) : 정보 통신에 대한 표준을 제정하는 비영리 표준화 기구이다.

ECMA Script는 ECMA에서 ECMA-262 규격(범용적인 목적의 프로그램이 언어에 대한 명세)에 따라 정의한 언어. ECMA Script6(2015)는 ECMA에서 제안하는 6번째 표준 명세를 말한다.



## 자바스크립트에서의 세미콜론

자바스크립트는 세미콜론을 선택적으로 사용 가능하다.

세미콜론이 없을 경우 ASI(자동 세미콜론 삽입 규칙)에 의해 자동으로 세미콜론이 삽입된다.



## 코딩 스타일 가이드

- 합의된 원칙과 일관성
  - 절대적인  하나의 정답은 없으며, 상황에 맞게 원칙을 정하고 일관성 있게 사용하는 것이 중요
- 코드의 품질에 직결됨
  - 코드의 가독성, 유지보수 또는 팀원과의 커뮤니케이션 등 개발 과정 전체에 영향을 끼침
- 코딩 스타일 가이드 종류
  - Aribnb Javascript Style Guide
  - Google Javascript Style Guide
  - standardjs



## 변수와 식별자



#### 식별자

> 변수를 구분할 수 있는 변수명

- 반드시 문자, 달러($), 밑줄(_)로 시작

- 대소문자를 구분하며, 클래스명 외에는 모두 소문자로 시작

- 예약어(for, if, case, 등등) 사용 불가능
- 식별자 작성 스타일:
  - 카멜 케이스 ( `camelCase`, lower-camel-case )
    - 변수, 객체, 함수에 사용
  - 파스칼 케이스 ( `PascalCase`, upper-camel-case )
    - 클래스, 생성자에 사용
  - 대문자 스네이크 케이스 ( `SNAKE_CASE` )
    - 상수(개발자의 의도와 상관없이 변경될 가능성이 없는 값)에 사용



#### 변수

- 선언(Declaration) : 변수를 생성하는 행위 또는 시점
  - 변수 선언 키워드 :

    - let

      - **재할당** 할 수 **있는** 변수 선언
      - 변수 **재선언 불가능**
      - 블록 스코프 ( if, for, 함수 등의 중괄호 내부를 가리킴. 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능 )

    - const

      - **재할당** 할 수 **없는** 변수 선언
      - 변수 **재선언 불가능**
      - 블록 스코프 ( if, for, 함수 등의 **중괄호 내부**를 가리킴. 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능 )

    - var

      - **재할당 가능**

      - 변수 **재선언 가능**

      - **호이스팅** 되는 특성으로 문제 발생 가능 ( 그래서 현재는 var 사용 X)

        - 호이스팅 : 변수를 선언 이전에 참조할 수 있는 현상. 변수 선언 이전의 위치에서 접근 시 undefined를 반환

          ```javascript
          console.log(username) // undefined
          var username = '홍길동'
          
          console.log(email) // Uncaught ReferenceError
          let email = 'gildong@gmail.com'
          
          console.log(age) // Uncaught ReferenceError
          const age = 50
          ```

      - 함수 스코프 ( **함수 내부**를 가리킴. 함수 바깥에서 접근 불가능 )

- 할당(Assignment) : 선언된 변수에 값을 저장하는 행위 또는 시점

- 초기화(Initialization) : 선언된 변수에 처음으로 값을 저장하는 행위 또는 시점

- 

  