# JavaScript 총 정리 2



## 데이터 타입

자바스크립트의 모든 값은 특정한 데이터 타입을 가진다.



#### 원시 타입 ( Primitive Type )

> 객체(object)가 아닌 기본 타입들을 말함. 변수에 해당 타입의 값이 담기며, 다른 변수에 복사할 때 실제 값이 복사된다.

- **숫자** ( Number ) : 정수, 실수 구분 없는 하나의 숫자 타입. 부동소수점 형식을 따른다. ( NaN(Not-A-Number) : 계산 불가능한 경우 반환되는 값 )
- **문자열** ( String ) : 텍스트 데이터. 16비트 유니코드 문자의 집합. 작은 따옴표 또는 큰 따옴표 모두 가능. ES6 부터 템플릿 리터럴을 지원한다. ( 따옴표 대신 backtick(`)으로 표현, ${expression} 형태로 표현식 삽입 가능 )
- **불리언** ( Boolean ) : 논리적 참/거짓을 나타내는 타입. true 또는 false로 표현됨. 조건문 또는 반복문에서 불리언이 아닌 데이터 타입은 자동 형변환 규칙에 따라 true 또는 false로 변환된다.
- **undefined** : 변수의 값이 없음을 나타내는 데이터 타입. 변수 선언 이후 직접 값을 할당하지 않으면 자동으로 undefined가 할당 된다. **typeof 연산자의 결과는 undefined로 표현된다.**
- **null** : 변수의 값이 없음을 의도적으로 표현할 때 사용하는 데이터 타입. **null 타입**은 ECMA 명세의 원시 타입의 정의에 따라 원시 타입에 속하지만, **typeof 연산자의 결과는 객체(object)로 표현된다.**



#### 참조 타입 ( Reference Type )

> 객체(object) 타입의 자료형들을 말함. 변수에 해당 객체의 참조 값이 담기며, 다른 변수에 복사할 때 참조 값이 복사된다.

- Objects

  - Array

  - Function

  - 등등

    

#### 자동 형변환

> 조건문 또는 반복문에서 표현식의 결과가 참/거짓으로 판별되는 경우 발생

| 데이터타입         | 거짓       | 참      |
| ------------------ | ---------- | ------- |
| undefined          | 항상 거짓  | X       |
| null               | 항상 거짓  | X       |
| number             | 0, -1, NaN | 나머지  |
| string             | 빈 문자열  | 나머지  |
| object (참조 타입) | X          | 항상 참 |





## 연산자



#### 할당 연산자

오른쪽에 있는 피연산자의 평가 결과를 왼쪽 피연산자에 할당하는 연산자

+, -, *, /가 있으며 단축 연산자(+=) 지원.

- Increment 연산자 (++) : 피연산자의 값을 1 증가시키는 연산자

- Decrement 연산자 (--) : 피연산자의 값을 1 감소시키는 연산자



#### 비교 연산자

피연산자들(숫자, 문자, Boolean 등)을 비교하고 비교의 결과값을 불리언으로 반환하는 연산자

문자열은 유니코드 값을 사용하며 표준 사전순서를 기반으로 비교

ex) 알파벳끼리 비교할 경우 : 알파벳 오름차순으로 우선순위를 지님. 소문자가 대문자보다 우선순위를 지님



#### 동등 비교 연산자 (==)

암묵적 타입 변환을 통해 타입을 일치시킨 후 두 피연산자가 같은 값으로 평가되는지 비교 후 불리언 값을 반환

두 피연산자가 모두 객체일 경우 메모리의 같은 객체를 바라보는지 판별



#### 일치 비교 연산자 (===)

두 피연산자가 같은 값으로 평가되는지 비교 후 불리언 값을 반환

엄격한 비교(두 비교 대상의 타입과 값 모두 같은지 비교)가 이뤄지며 암묵적 타입 변환이 발생하지 않음

두 피연산자가 모두 객체일 경우 메모리의 같은 객체를 바라보는지 판별



#### 논리 연산자

- and 연산 : &&
- or 연산 : ||
- not 연산 : ! 

단축 평가 지원

ex) false %% true => false

ex) true || false => true



#### 삼항 연산자

세 개의 피연산자를 사용하여 조건에 따라 값을 반환하는 연산자

삼항 연산자의 결과는 변수에 할당 가능

```javascript
const result = Math.PI > 4 ? 'Yes' : 'No'
console.log(result) // No
```



## 조건문

- **if statement** 

  - 조건 표현식의 결과를 Boolean 타입으로 변환 후 참/거짓을 판단

  - if, else if, else

    - 조건은 소괄호(condition) 안에 작성
    - 실행할 코드는 중괄호안에 작성
    - 블록 스코프 생성

  - ```javascript
    const nation = 'Korea'
    
    if (nation === 'Korea') {
        console.log('안녕하세요!')
    } else if (nation === 'France') {
        console.log('Bonjour!')
    } else {
        console.log('Hello!')
    }
    ```

    

- **switch statement**

  - 조건 표현식의 결과값이 어느 값(case)에 해당하는지 판별

  - break 및 default문은 선택적으로 사용 가능

  - break 문이 없는 경우 break 문을 만나거나 default 문을 실행할 때까지 다음 조건문 실행

  - 블록 스코프 생성

  - 주로 특정 변수의 값에 따라 조건을 분기할 때 활용하며 조건이 많아질 경우 if문보다 가독성이 나을 수 있음

  - ```javascript
    const nation = 'Korea'
    
    switch(nation) {
        case 'Korea': {
            console.log('안녕하세요!')
            break
        }
        case 'France': {
            console.log('Bonjour!')
            break
        }
        default: {
            console.log('Hello!')
        }
    }
    // break가 없는 경우 만약 Korea case라면 안녕하세요, Bonjour, Hello가 모두 출력되고 멈춘다.
    ```



## 반복문



#### while

- 조건문이 참(true)인 동안 반복 시행

- 조건은 소괄호(condition) 안에 작성

- 실행할 코드는 중괄호{} 안에 작성

- 블록 스코프 생성

- ```javascript
  let i = 0
  while (i < 6) {
      console.log(i)
      i += 1
  }
  ```



#### for

- 세미콜론(;)으로 구분되는 세 부분으로 구성

- initialization : 최초 반복문 진입 시 1회만 실행되는 부분

- condition : 매 반복 시행 전 평가되는 부분

- expression : 매 반복 시행 이후 평가되는 부분

- 블록 스코프 생성

- ```javascript
  for (let i = 0; i < 6; i++) {
      console.log(i) // 0, 1, 2, 3, 4, 5
  }
  ```



#### for... in

- 주로 객체(object)의 속성들을 순회할 때 사용

- 배열도 순회 가능하지만 인덱스 순으로 순회한다는 보장이 없으므로 권장하지 않음

- 블록 스코프 생성

- ```javascript
  const capitals = {
      Korea : '서울',
      France : '파리',
      USA : '워싱턴 D.C.'
  }
  
  for (let capital in capitals) {
      console.log(capital) // Korea, France, USA
  }
  ```





#### for... of

- 반복 가능한 객체(Array, Map, Set, String, 등)를 순회하며 값을 꺼낼 때 사용

- 블록 스코프 생성

- ```javascript
  const fruits = ['딸기', '바나나', '메론']
  
  for (let fruit of fruits) {
      console.log(fruit) // 딸기, 바나나, 메론
  }
  ```

  

