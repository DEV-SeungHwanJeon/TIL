# JavaScript Basic

크롬 Console 탭에 출력하기 : console.log(`내용`)



## 변수, 상수 선언

> 특정 이름에 특정한 값을 넣는다. 다른 블록 범위에서는 똑같은 이름으로 선언할 수도 있다.

### 변수

`let 특정이름 = 특정 값` : 수정 가능하다. 한번 선언했으면 똑같은 이름으로 선언하지 못한다. (SyntaxError)



`var 특정이름 = 특정 값` : 모던 자바스크립트에서는 더 이상 사용하지 않는다.(몰라도 된다) 수정 가능하다. 똑같은 이름으로 여러 번 선언할 수 있다. 또한 var과 ler은 사용 할 수 있는 범위가 다르다.



### 상수

`const 특정이름 = 특정 값 ` : 값이 고정적이다 (수정 불가능). 한번 선언했으면 똑같은 이름으로 선언하지 못한다. 





## 데이터 타입

- 숫자 (Number)
  - 숫자는 바로 값을 대입하면 된다.
  - ex) `let value = 1;`
- 문자열, 텍스트 (String)
  - 작은 따옴표(큰 따옴표)로 감싸서 선언
  - ex) `let text = 'hello'`
- 참/거짓 (Boolean)
  - 참 혹은 거짓 두가지 종류의 값만 나타낼 수 있다.
  - ex) `let good = true;`
- null 과 undefined
  - "없음"을 의미하는 데이터 타입
  - null : 이 값이 없다
  - undefined : 이 값이 아직 설정되지 않았다.





## 연산자

- 산술 연산자

  - `+` : 덧셈
  - `-` : 뺄셈
  - `*` : 곱셈
  - `/` : 나눗셈
  - `++` : 특정 변수에 1을 바로 더해준다.
    - 변수 이름 뒤에 있을 경우(`a++`) :
      - 1을 더하기 직전 값을 보여준다.
    - 변수 이름 앞에 있을 경우(`++a`) :
      - 1을 더한 다음의 값을 보여준다.

- 대입 연산자

  - 특정 값에 연산을 한 값을 바로 설정할 때 사용할 수 있는 연산자
  - `=` : 대입 연산자
  - `변수 += 값` : 변수에 값을 더한 것을 변수로 선언한다.
    - `+=` , `-=`, `/=`, `*=`  등이 가능함.

- 논리 연산자

  - boolean 타입을 위한 연산자이다.
  - `!` : NOT
    - true는 false로, false는 true로 바꿔준다.
    - ex) !true라고 하면 false
  - `&&` : AND
    - 양쪽의 값이 둘 다 true일 때만 결과물이 true이다.
    - ex) true && true 라고 하면 true
  - `||` : OR
    - 양쪽의 값 중 하나라도 true면 결과물이 true이다.
    - ex) true && false 라고 하면 true
  - 연산 순서
    - ()
    - NOT
    - AND
    - OR

- 비교 연산자

  - 두 값을 비교할 때 사용할 수 있다.
  - `===` : 두 값과 타입이 일치하는지를 확인
  - `==` : 두 값이 일치하는지를 확인 (타입검사 X)
    - ex) 숫자 1과 문자 '1'이 동일한 값으로 간주됨
    - 0과 false가 같은 값으로 간주됨
    - undefined와 null도 같은 값으로 간주됨
  - `!==` : 두 값과 타입이 일치하지 않는지 확인
  - `!=` : 두 값이 일치하지 않는지를 확인 (타입검사 X)

- 크고 작음

  - 두 값의 대소 비교
  - <, >, <=, >=

- 문자열 붙이기

  - 두 문자열을 붙일 때에는 `+`로 붙일 수 있다.

  - ES6의 템플릿 리터럴 (문자열 조합 편하게 하기)

    ```javascript
    const name = 'JSH'
    console.log(`Hello, ${name}!`)
    ```



## 조건문

> 조건문을 사용하면 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있다.



- if 문

  - "조건이 만족한다면 행동해라"

    ```javascript
    if (조건) {
    	코드;
    } // {}를 코드블록이라고 한다.
    ```

  - 조건이 만족됐을 때만 특정 코드를 실행

  - 변수 선언할 때, 다른 코드 블록 범위에서는 똑같은 이름으로 선언할 수도 있다.

- if-else 문

  - 조건이 만족한다면 행동1을 하고 아닐 경우에는 행동2를 해라

    ```javascript
    if (조건) {
        코드;
    } else {
        코드
    }
    ```

- if-else if 문

  - 여러 조건에 따라 다른 행동을 한다.

    ```javascript
    if (조건1) {
        코드;
    } else if (조건2) {
        코드;
    } else if (조건3) {
        코드;
    } else {
        코드;
    }
    ```

- switch/case 문

  - 특정 값이 무엇이냐에 따라 다른 행동을 한다.

    ```javascript
    switch (변수) {
        case '특정값1':
        	코드;
    	    break;
        case '특정값2':
        	코드;
            break;
        case '특정값3':
        	코드;
            break;
        default:
        	코드;
    }
    ```

  - switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 `break;` 를 해줘야 한다. `break;`를 하지 않으면 그 다음 case의 코드까지 실행해버린다.

  - `default:` 는 변수의 값이 우리가 case로 준비하지 않은 값일 경우를 의미한다.





## 함수

> 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능

```javascript
function 함수명(파라미터) {
    return 코드;
}
```

return 키워드를 사용하여 함수의 결과물을 지정할 수 있다. return을 하게 되면 함수가 끝난다.



### 화살표 함수

함수를 선언하는 또 다른 방식

```javascript
const add = (a, b) => {
    return a+b;
};
```

function 키워드 대신에 `=>` 문자를 사용해서 함수를 구현한다. `파라미터 => 코드블록`

만약 코드 블록 내부에서 한줄로 바로 return을 하는 경우는 줄여서 쓸 수도 있다.

```javascript
const add = (a, b) => a + b;
```

여러 줄로 구성되어있는 경우에는 코드 블록을 만들어야 한다.

- 일반 function으로 만든 함수와의 차이점:
  - 화살표 함수에서 가르키는 this와 function에서 가르키는 this가 서로 다르다.



## 객체

> 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.

```javascript
const 이름 = {
    키: 원하는 값,
    키2: 원하는 값,
    '키 3': 원하는 값
};
```

- 키에 해당하는 부분은 공백이 없어야 한다.
  - 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어준다.



### 함수에서 객체를 파라미터로 받기

```javascript
function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
```

파라미터로 들어오는 `hero` 객체의 `alias`, `name`, `actor`에 해당하는 키 들의 값들이 출력된다.



### 객체 비구조화 할당

함수에서 객체를 파라미터로 받아서 사용할 때 내부의 값을 조회할 때마다 `hero.키` 처럼 하지않기 위하여 "객체 비구조화 할당"을 사용한다. "객체 구조 분해"라고 불리기도 한다.

```javascript
function print(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
```

`const { alias, name, actor } = hero;` 코드에서 객체에서 값들을 추출하여 새로운 상수로 선언해준다.

더 나아가면 파라미터 단계에서 객체 비구조화 할당을 할 수도 있다.

```javascript
function print({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
```



### 객체 안에 함수 넣기

```javascript
const dog = {
    name : '멍멍이',
    sound : '멍멍',
    say : function say() {
        console.log(this.sound);
    }
	/*
	say : function() {
        console.log(this.sound);
    }
    */
};

dog.say();
```

함수가 객체안에 들어가게 되면, `this`는 자신이 속해있는 객체를 가르키게 된다.

함수를 선언 할 때에는 이름이 없어도 된다.

- 객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않는다.

  - function으로 선언한 함수는 this가 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문이다.

    

### Getter 함수와 Setter 함수

객체 안의 특정 값을 수정하거나, 조회할 때 우리가 원하는 코드를 실행 시킬 수 있다.



- Getter 함수:

  특정 값을 조회할 때 우리가 설정한 함수로 연산된 값을 반환한다.

  ```javascript
  const numbers = {
      a: 1,
      b: 2,
      get sum() {
          console.log('sum 함수가 실행됩니다!');
          return this.a + this.b;
      }
  };
  
  console.log(numbers.sum);
  numbers.b = 5;
  console.log(numbers.sum);
  ```

  `numbers.sum()`이 아닌 `number.sum`을 조회했을 뿐인데 함수가 실행되고 결과값이 출력되었다.

  

- Setter 함수:

  ```javascript
  const numbers = {
      _a : 1,
      _b : 2,
      sum : 3,
      calculate() {
          console.log('calculate');
          this.sum = this._a + this._b;
      },
      get a() {
          return this._a;
      },
      get b() {
          return this._b;
      },
      set a(value) {
          console.log('a가 바뀝니다.');
          this._a = value;
          this.calculate();
      },
      set b(value) {
          console.log('b가 바뀝니다.');
          this._b = value;
          this.calculate();
      }
  };
  
  console.log(numbers.sum); //단순히 sum 출력
  numbers.a = 5;  //this._a의 값을 바꿈 (set 함수 호출(calculate함수 호출 -> this.sum에 값 저장))
  numbers.b = 7;  // 위와 동일 
  numbers.a = 9;  // 위와 동일
  console.log(numbers.sum); //단순히 sum 출력
  console.log(numbers.sum); //단순히 sum 출력
  console.log(numbers.sum); //단순히 sum 출력
  ```

  - Setter 함수를 설정할 때는 함수의 앞부분에 set 키워드를 붙인다.
  - `set a(value)` 처럼 설정하면, `numbers.a=5` 처럼 값을 설정했을 때 5를 함수의 파라미터로 받아오게 된다.
  - 위 코드에서는 객체 안에 _a, _b라는 숫자를 선언하고, 이 값들을 위한 Getter와 Setter 함수를 설정했다.
  - a 혹은 b 값이 바뀔 때마다 sum 값을 연산한다.



## 배열

> 여러 개의 항목들이 들어있는 리스트와 같다.



### 배열 선언

```javascript
const array = [1, 2, 3, 4, 5]; // 숫자 배열
const objects = [ {name: '멍멍이'}, {name: '야옹이'} ];  // 객체 배열
```



### 배열 조회

첫 번째 항목은 array[0] 이다.

```javascript
console.log(array[0])
```



### 배열에 새 항목 추가하기

배열의 내장 함수 `push` 함수를 사용한다.

```javascript
const objects =  [ {name: '멍멍이'}, {name: '야옹이'} ];  // 객체 배열

objects.push({name: '짹쨱이'});
```



### 배열의 크기 알아내기

배열의 `length`값을 확인한다.

```javascript
console.log(objects.length);
```









## 반복문

> 특정 작업을 반복적으로 할 때 사용할 수 있는 구문



### for 문

특정 값에 변화를 주며 우리가 정한 조건이 만족된다면 계속 반복한다.

```javascript
/*
for (초기 구문; 조건 구문; 변화 구문;) {
	코드
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

- 배열과 for문 활용

  ```javascript
  const names = ['멍멍이','야옹이','짹짹이'];
  
  for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
  }
  ```

  names 배열 안에 있는 원소들을 하나하나 나열할 수 있다.



### While 문

특정 조건이 참이라면 계속해서 반복하는 반복문.

조건문 내부에서 변화를 직접 주어야 한다.

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

조건문이 언젠가 false가 되도록 해야 한다. false로 전환이 되지 않는다면 반복문이 끝나지 않고 영원히 반복된다.



### for...of 문

배열에 관한 반복문을 돌리기 위해서 만들어진 반복문이다.

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}
```



### 객체를 위한 for...in 문

객체가 지니고 있는 값에 대하여 반복을 하고 싶다면

- 객체의 정보를 배열 형태로 받아올 수 있는 함수

  - Object.entries : [[키, 값], [키, 값]] 형태의 배열로 반환
  - Object.keys : [키, 키, 키] 형태의 배열로 반환
  - Object.values : [값, 값, 값] 형태의 배열로 반환

- for...in 구문

  ```javascript
  const doggy = {
      name : '멍멍이',
      sound : '멍멍',
      age : 2
  };
  
  for (let key in doggy) {
      console.log(`${key}: ${doggy[key]}`);
  }
  ```

  

### break 와 continue

반복문 내에서 반복문에서 벗어나거나 그 다음 루프를 돌게 할 수 있다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프 실행
    console.log(i);
    if (i === 5) break;  //반복문 끝내기
}
```





## 배열 내장함수

### forEach

> 기존에 우리가 배웠던 for 문을 대체할 수 있다.

배열 내의 모든 원소들을 출력해야 한다면 forEach 함수를 사용하여 구현할 수 있다.

```javascript
const superheroes = ['아이언맨','캡틴 아메리카', '토르','닥터 스트레인지'];

superheroes.forEach(hero => {
    console.log(hero);
});
```

forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 파라미터 hero는 각 원소를 가르키게 된다.

이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 한다. 함수를 등록해주면, forEach가 실행을 해준다.



### map

배열 안의 각 원소를 변환할 때 사용하며, 새로운 배열이 만들어진다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 방법 1 : for문으로 push
const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(array[i]*array[i]);
}

// 방법 2 : forEach문으로 push
const = squared = [];

array.forEach(n => {
    squared.push(n * n);
});

// 방법 3 : map 사용
const square = n => n * n;
const squared = array.map(square);
```

map 함수의 파라미터로는 변화를 주는 함수를 전달해준다. (여기서는 변화함수 "square"를 전달)

변화함수에 꼭 이름을 붙일 필요는 없다.

```javascript
const squared = array.map(n => n * n);
```



### indexOf

원하는 항목이 몇번째 원소인지 찾아주는 함수이다.

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
```

결과는 2가 나온다.



### findIndex

만약에 배열 안에 있는 값이 객체이거나 배열이라면 indexOf로 찾지 못한다. indexOf는 숫자, 문자열, 불리언만 가능하다.

```javascript
const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
// 출력: 2
```

todo가 객체나 배열 안의 각각의 대상이 된다.

그래서 id 값이 3인 대상의 index를 찾아서 반환한다.



### find

찾아낸 값의 인덱스를 반환하는 것이 아닌 `찾아낸 값 자체`를 반환한다.

```javascript
const todo = todos.find(todo => todo.id === 3);
console.log(index);
// 출력: {id: 3, text: "객체와 배열 배우기", done: true}
```

id 값이 3인 값을 반환한다. 





### filter

배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다.

```javascript
// done 값이 false인 항목들만 따로 추출하여 새로운 배열 만들기

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);
```

filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며 이 함수의 파라미터로 각 원소의 값을 받아오게 된다.



### splice

배열에서 특정 항목을 제거할 때 사용

splice(인덱스, 몇개를 지울지)

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);
// 출력: [10, 20, 40]
```



### slice

배열을 잘라낼 때 사용. 기존의 배열은 건들지 않는다.

```javascript
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); //0부터 2전 까지 : 0, 1
console.log(sliced); // [10, 20]
```



### shift와 pop

- shift : 첫번째 원소를 배열에서 추출해준다.

  ```javascript
  const numbers = [10, 20, 30 ,40];
  const value = numbers.shift();
  ```

- pop : 맨 마지막 원소를 배열에서 추출해준다.

  ```javascript
  const numbers = [10, 20, 30 ,40];
  const value = numbers.pop();
  ```



### unshift

배열의 맨 앞에 새 원소를 추가한다.

```javascript
const numbers = [10, 20, 30 ,40];
numbers.unshifg(5);

// [5, 10, 20, 30, 40]
```



### concat

여러 개의 배열을 하나의 배열로 합쳐준다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

// [1, 2, 3, 4, 5, 6]
```

concat 함수는 arr1과 arr2에 변화를 주지 않는다.



### join

배열 안의 값들을 문자열 형태로 합쳐준다.

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

join의 default값은 `,` 이다.



### reduce

주어진 배열에 대하여 총합을 구해야 하는 상황이라면

```javascript
const numbers = [1, 2, 3, 4, 5];

// 방법 1 : forEach 활용
let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);

// 방법 2 : reduce(콜백함수, 초깃값)
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```

reduce 함수에는 두 개의 파라미터를 전달한다.

첫 번째 파라미터는 accumulator(누적된 값을 의미)와 current를 파라미터로 가져와서 결과를 반환하는 콜백함수이다. `(accumulator, current) => accumulator + current`

두 번째 파라미터는 reduce 함수에서 사용 할 초깃값이다. `0`

reduce를 사용해서 평균도 구할 수 있다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);
```

가장 마지막 숫자를 더하고 나서 배열의 length로 나눠준다.

또한 위 코드에서는 추가 파라미터로 index와 array를 받아왔다. index는 현재 처리하고 있는 항목이 몇 번째인지 가르치고, array는 현재 처리하고 있는 배열 자신을 의미한다.





## 프로토타입과 클래스



## 객체 생성자

객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현할 수 있게 해준다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

객체 생성자를 사용할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 `new` 키워드를 앞에 붙여줘야 한다.



### 프로토타입

같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있다.

객체 생성자 함수 아래에 `.prototype.[원하는키] =` 코드를 입력하여 설정한다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  /*
  this.say = function() {
  console.log(this.sound);
  */
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
```



### 객체 생성자 상속받기

해당 객체 생성자들에서 Animal의 기능을 재사용한다

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```

새로 만든 Dog와 Cat 함수에서 `Animal.call`을 호출한다. 

call 함수의 첫 번째 인자는 this 를 넣어줘야 하고, 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어줘야 한다.

추가적으로 prototype를 공유하기 위해 상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype으로 설정해주었다.



### 클래스

ES6 부터는 `class`라는 문법이 추가되었다. 우리가 객체 생성자로 구현했던 코드를 좀 더 명확하고, 깔끔하게 구현 할 수 있다. 

```javascript
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();
```

여기서 say 라는 함수를 클래스 내부에 선언하였는데, 클래스 내부의 함수를 '메서드'라고 부른다. 이렇게 메서드를 만들면 자동으로 prototype으로 등록이 된다.



`class`는 다른 클래스 상속도 훨씬 쉽게 해준다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개',name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이',name, sound);
    }
}

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('야옹이','야옹');

dog.say()
cat.say()
```

상속을 할 때는 `extends` 키워드를 사용하며, constructor에서 사용하는 `super()` 함수가 상속받은 클래스의 생성자를 가르킨다.



# 유용한 자바스크립트 문법



## 삼항 연산자

```javascript
조건 ? true일때 : false일때
```



특정 조건에 따라 text 값이 달라야 하는 상황에서 사용한다.

```javascript
const array = [];

// 방법 1 : if-else문
let text = '';
if (array.length === 0) {
    text = '배열이 비어 있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);

// 방법 2 : 삼항 연산자
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.'
```



## Truthy and Falsy

undefined 와 null은 Falsy한 값이기 때문에 느낌표를 붙여주면 true로 전환된다.



`값`이 undefined 이거나, null 인 상황을 대비하기 위하여 `!값` 처럼 해준다.

```javascript
function print(person) {
    if (!person) {
        console.log('person이 없네요');
        return;
    }
    console.log(person.name);
}

const person = null;
print(person);
```

- Falsy 한 값들:

  - undefined

  - null

  - 0

  - ''

  - NaN

    - 문자열을 숫자로 변환하는 자바스크립트 기본 함수 parseInt 함수를 사용할 때 볼 수 있다.

      ```javascript
      const num = parseInt('15', 10); // 10진수 15를 숫자로 변환하겠다는 의미
      console.log(num); // 10
      const notnum = parseInt('야호~', 10);
      console.log(notnum); // NaN
      ```

- Truthy 한 값들:

  - Falsy 한 값들 외의 값은 전부 Truthy한 값들이다.





## 단축 평가 (short-circuit evaluation) 논리 계산법



함수에서 파라미터 값이 제대로 주어졌을 때만 해당 값을 조회하고, 그렇지 않을 때는 그냥 undefined를 반환하게 한다.

```javascript
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
```

이러한 코드를 논리 연산자를 사용하면 코드를 단축시킬 수 있다.



### &&연산자로 코드 단축시키기

```javascript
/*
function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}
*/
function getName(animal) {
  return animal && animal.name;
}
```

A && B 연산자를 사용하게 될 때에는 A가 Truthy한 값이라면, B가 결과 값이 된다. 반면, A 가 Falsy한 값이라면 결과는 A가 된다.

&& 연산자의 속성을 잘 알아두면, 특정 값이 유효할때에만 어떤 값을 조회하는 작업을 해야할 때 유용하다.



### ||연산자로 코드 단축시키기

만약 어떤 값이 Falsy 하다면 대체로 사용할 값을 지정해줄 때 유용하게 쓰인다.

```javascript
const namelessDog = {
  name: ''
};

/*
function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}
*/
function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

A||B 는 만약 A가 Truthy 할 경우 A가 된다. 반면, A가 Falsy 하다면 결과는 B가 된다.





## 함수의 기본 파라미터

함수의 기본 파라미터를 설정하는 방법

```javascript
// ES5
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

// ES6
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

// 화살표 함수에서도 가능
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592
```





## 조건문 더 스마트하게 쓰기



### 특정 값이 여러 값 중 하나인지 확인할 때

```javascript
/*
function isAnimal(name) {
    return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리');
}
*/

function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')) // false
```



### 값에 따라 다른 결과물을 반환해야 할 때

```javascript
function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
```



- 값에 따라 실행해야하는 코드 구문이 다를 때

  ```javascript
  function makeSound(animal) {
      const tasks = {
          개() {
              console.log('멍멍');
          },
          고양이() {
              console.log('고양이');
          }
      };
      if (!tasks[animal]) {
          console.log('...?');
          return;
      }
      tasks[animal]();
  }
  
  makeSound('개');
  ```

  

## 비구조화 할당 (구조분해) 문법

비구조화 할당 문법을 사용하면 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언해줄 수 있다.

```javascript
const object = { a: 1, b: 2};

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2
```

함수의 파라미터에서도 비구조화 할당이 가능하다.

```javascript
const object = { a: 1, b: 2};

function print({a, b}) {
    console.log(a);
    console.log(b);
}

print(object);
```



### 비구조화 할당시 기본값 설정

```javascript
const object = { a: 1 };

function print({ a, b = 2}) {
    console.log(a);
    console.log(b);
}

print(object);
```

함수가 아닌 변수, 상수 선언에서도 활용할 수 있다.

```javascript
const object = {a: 1};

const { a, b=2} = object;
```



### 비구조화 할당시 이름 바꾸기

```javascript
const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal
// animal 객체 안에 있는 name을 nickname이라고 선언한다는 뜻
```



### 배열 비구조화 할당

비구조화 할당을 배열에서 해보자.

```javascript
const array = [1, 2];
const [one, two = 0] = array;
// 기본값 지정이 가능
console.log(one); // 1
console.log(two); // 2
```



### 깊은 값 비구조화 할당

객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법

```javascript
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean','english','chinese']
        }
    },
    value: 5
};

// name, languages, value 값들을 밖으로 꺼내주고 싶다면?
// 방법 1: 비구조화 할당 문법을 두번 사용
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

// ES6의 object-shorthand 문법
const extracted = {
    name,
    languages,
    value
}
/*
const extracted = {
    name: name,
    languages: languages,
    value: value
}
와 같다
*/

// 방법 2
const {
    state: {
        information: { name, languages },
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
};
```



## spread와 rest

ES6에서 도입된 spread와 rest에 대하여 알아보자.



### spread

객체 혹은 배열을 펼칠 수 있다.

```javascript
const slime = {
  name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};
/*
const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};
*/

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};
/*
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};
*/
console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

이렇게 기존의 것을 건들이지 않고, 새로운 객체를 만들 때 사용할 수 있는 유용한 문법이 spread이다.



spread 연산자는 배열에서도 사용할 수 있다.

```javascript
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

// 배열에서 spread 연산자를 여러 번 사용할 수도 있다.
const spreadNumbers = [...numbers, 1000, ...numbers];
```

기존의 animals 는 건들이지 않으면서, 새로운 anotherAnimals 배열에 animals 가 갖고 있는 내용을 모두 집어넣고, 추가적으로 항목을 넣었다.









### rest

rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능하다.



- 객체에서의 rest

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color); //purple
console.log(rest); //Object {name: "슬라임", attribute: "cute"}
```

rest 안에 color값을 제외한 값이 들어있다.

rest는 객체와 배열에서 사용할 때는 비구조화 할당 문법과 함께 사용된다. 또한 추출한 값의 이름이 꼭 rest일 필요는 없다.

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color); //purple
console.log(cuteSlime); //Object {name: "슬라임", attribute: "cute"}

const { attribute, ...slime } = cuteSlime;
console.log(attribute);  //cute
console.log(slime);  //Object {name: "슬라임"}
```



- 배열에서의 rest

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
//const [...rest, last] = numbers;는 불가능
console.log(one);
console.log(rest);
```



- 함수 파라미터에서의 rest

함수 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용하다.

```javascript
function sum(...rest) {
	// rest = [1, 2, 3, 4, 5, 6]
    return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```



배열 안에 있는 원소들을 모두 파라미터로 넣고 싶을 때spread와 rest을 활용하면 편하다.

```javascript
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);
```





## Scope에 대한 이해

Scope란 우리가 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 의미한다.

- Global (전역) Scope : 코드 모든 범위에서 사용 가능
- Function (함수) Scope : 함수 안에서만 사용 가능
- Block (블록) Scope : if, for, switch 등 특정 블록 내부에서만 사용 가능



`var`는 블록 내부에서 선언한 값이 블록 밖의 값에도 영향을 미친다.



### Hoisting

자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는 작동 방식을 말한다.

자바스크립트 엔진이 코드를 해석하는 과정에서 var와 function은 자동으로 순서를 바꿔서 선언을 먼저 실시한다.

하지만 const와 let은 에러가 발생한다. 

Hoisting을 일부러 할 필요는 없으며, 오히려 방지하는 것이 유지보수 측면과, 예측 가능한 결과물을 만들기에 좋다.



# 자바스크립트에서 비동기 처리 다루기

동기적 ( Synchronous ) : 작업을 순서대로 진행하는 것

비동기적 ( Asynchronous ) : 동시에 여러 가지 작업을 처리하는 것 ( 기다리는 과정에서 다른 함수도 호출 가능 )



ex)

```javascript
function wort() {
    // 비동기 형태로 전환하는 함수 setTimeout
    setTimeout( () => {
        const start = Date.now();
        for (let i = 0; i < 10000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0);
}

console.log('작업 시작!');
work();
console.log('다음 작업');
```

setTimeout(함수, 시간(ms단위) )

함수를 시간이 흐른 후 호출해준다. ( 0ms 이후에 실행한다는 의미지만 실제로는 4ms 이후에 실행된다. )



















