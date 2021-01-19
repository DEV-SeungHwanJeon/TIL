# Python_Basic

Python의 스타일 가이드: `PEP-8` 

파이썬 코드는 1줄에 1문장(statement)이 원칙이다.

문장(statement)은 파이썬이 실행 가능한 최소한의 코드 단위이다.

한 줄에 여러 줄을 작성하고 싶으면 세미콜론`;`를 활용한다.

한 줄을 여러 줄에 작성하고 싶으면 역슬래시`\`를 활용한다. `[]`, `{}`, `()` 는 `\`없이도 줄바꿈하여 여러 줄 작성이 가능하다.



<주석 기능>

한줄 주석: #을 활용  ex) # 주석이다.

여러줄 주석: '''을 활용 ex)  ''' 이거 주석이다

​												  이거 주석이다 '''



### 변수(Variable)

할당연산자 `=`로 변수를 할당한다. ex) a=1,  b='hello'

변수의 데이터 타입을 확인하기 위해서는 `type()`을 활용한다. ex) type(a), type(b)

해당 변수의 메모리 주소를 확인하기 위해서는 `id()`를 활용한다. ex) id(a), id(b)


### 식별자

> 변수, 함수, 모듈, 클래스 등을 식별하는데 사용되는 이름이다.

식별자의 이름은 영문, 밑줄, 숫자로 구성되며 영문 대소문자를 구분한다.

길이에 제한이 없다.

첫 글자에는 숫자가 올 수 없으며 아래의 예약어들은 사용할 수 없다.

```python
import keyword
print(keyword.kwlist)

>> ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

또한, 내장함수나 모듈 등의 이름과 똑같이 만들면 안된다.



### 데이터 타입: 숫자, 글자, 참/거짓

#### 숫자 타입:

<정수int>

모든 정수는 `int`로 표현된다. 2진수: `0b` 8진수: `0o` 16진수: `0x`

파이썬에서 표현 가능한 가장 큰 수: 파이썬은 기존 C 계열 언어와 다르게 **임의 정밀도 산술** `(사용할 수 있는 메모리 양이 정해져 있는 기존의 방식과 달리, 현재 남아있는 만큼의 가용 메모리를 모두 유동적으로 수 표현에 끌어다 쓸 수 있는 형태)`을 사용하기 때문에 정수 자료형(integer)에서 **오버플로우** `(데이터 타입 별로 사용할 수 있는 메모리의 크기가 제한되어 있는데, 표현할 수 있는 범위를 넘어가는 연산을 하게 되면, 기대했던 값이 출력되지 않는, 다른 값이 나오는 현상, 즉 메모리가 차고 넘쳐 흐르는 현상)`가 없다. sys 모듈을 불러와서 sys.maxsize (2**63 -1 = 64비트에서 부호비트를 뺀 63개의 최대치)를 확인할 수 있다.



<실수float>

실수를 컴퓨터가 표현하는 과정에서 부동소수점을 사용하며, 항상 같은 값으로 일치되지 않는다. 이는 컴퓨터가 2진수(비트)를 통해 숫자를 표현하는 과정에서 생기는 오류이며, 대부분의 경우는 중요하지 않으나 값이 같은지를 비교하는 과정에서 문제가 발생할 수 있다.

ex) 3.5 - 3.12 = 0.3799999999999999

이 현상을 해결하기 위해 반올림(round())을 활용하기도 하고 라이브러리나 매우 작은 수를 활용하여 비교한다.

```python
# ex1)
a = 3.5 - 3.12
b = 0.38
abs(a-b) <=1e-10
# 결과: True

# ex2)
import sys
abs(a-b) <= sys.float_info.epsilon
# 결과: True

# ex3)
import math
math.isclose(a,b)
# 결과: True
```



<복소수complex>

각각 실수로 표현되는 실수부와 허수부를 가지며, 복소수는 허수부를 j로 표현한다.

``` python
a = 3 - 4j
complex('1+2j') #문자열을 복소수로 변환시 중간에 공백을 포함하면 안된다.
complex('1 + 2j') # Value Error가 뜬다.
```



<컴퓨터식 지수 표현 방식>

``` python 
pi = 314e-2
pi == 3.14
```





#### 문자 타입(String):

문자열은 홑따옴표`'`나 쌍따옴표`"`를 활용하여 표현이 가능하다. 단, 문자열을 묶을 때 동일한 문장부호를 활용해야 한다.

<이스케이프 시퀀스>

| 예약문자 | 의미     |
| -------- | -------- |
| \n       | 줄바꿈   |
| \t       | 탭       |
| \0       | 널(Null) |
| \\       | \        |



<문자열 보간 String Interpolation>

- %-formatting		ex) print('Hello, %s' % name)
  - %d: 정수
  - %f: 실수
  - %s: 문자열
- str.format()		ex) print('Hello, {}. 나는 {}'.format(you, me))
- f-strings              ex) print(f'Hello, {you}. 나는 {me}')



<시간 표현>

```python
import datetime
today = datetime.datetime.now()
print(today)
# 2021-01-18 20:57:57.874961

print(f'오늘은 {today:%y}년 {today:%m}월 {today:%d}일 {today:%A}')
# 오늘은 21년 01월 18일 Monday

pi = 3.141592
print(f'원주율은 {pi:.4}')
```



#### 참/거짓:

파이썬에는 `True`와 `False`로 이뤄진 `bool`타입이 있다. 비교/논리 연산에 활용됩니다.

`0, 0.0, (), [], {}, '', None` 는 `False`로 변환됩니다.



#### None 타입:

값이 없음을 표현하기 위해 `None` 타입이 존재한다.

```python
a = None
print(type(a))
#<class 'NoneType'>
```



### 형변환 (데이터 타입 변환)

#### 암시적 형변환

사용자가 의도하지 않았지만, 파이썬 내부적으로 자동으로 형변환 하는 경우이다. `bool, Numbers(int, float, complex)` 데이터 타입 상황에서만 가능합니다.

``` python
True + 5
# 6

int_x = 2
float_y = 5.0
complex_z = 3+5j

# int + float의 type
result1 = int_x + float_y
print(result1, type(result1))
# 7.0 <class 'float'>

# int + complex의 type
result2 = int_x + complex_z
print(result2, type(result2))
# (5+5j) <class 'complex'>
```



#### 명시적 형변환

위에서 말한 `bool, Numbers(int, float, complex)` 데이터 타입 상황이 아니라면 모두 명시적 형변환을 해주어야 한다.

- string ㅡ> integer: 형식이 맞는 숫자만 가능. ex) float('3.5')
- integer ㅡ> string: 모두 가능



또한 암시적 형변환이 되는 모든 경우도 명시적 형변환이 가능하다.

- int() : string, float를 int로 변환
- float(): string, int를 float로 변환
- str(): int, float, list, tuple, dictionary를 문자열로 변환



### 연산자(Operator)

#### 산술 연산자

| 연산자 | 내용                      |
| ------ | ------------------------- |
| +      | 덧셈                      |
| -      | 뺄셈                      |
| *      | 곱셈                      |
| /      | 나눗셈(항상 float를 반환) |
| //     | 몫                        |
| %      | 나머지                    |
| **     | 거듭제곱                  |

#### 비교 연산자

| 연산자 | 내용                   |
| ------ | ---------------------- |
| <      | 미만                   |
| <=     | 이하                   |
| >      | 초과                   |
| >=     | 이상                   |
| ==     | 같음                   |
| !=     | 같지않음               |
| is     | 객체아이덴티티         |
| is not | 부정된 객체 아이덴티티 |

#### 논리 연산자

| 연산자  | 내용                           |
| ------- | ------------------------------ |
| a and b | a와 b 모두 True 시 True        |
| a or b  | a와 b 중 하나라도 True 시 True |
| not a   | True ㅡ> False,  False ㅡ>True |

파이썬에서 `&, |`는 비트 연산자이다.

- 단축평가: 첫 번째 값이 확실할 때, 다음 값은 확인 하지 않음

- ```python
  'a' and 'b'
  # 'b'
  
  'a' or 'b'
  # 'a'
  
  3 and 5
  # 5
  3 and 0
  # 0
  0 and 3
  # 0
  0 and 0
  # 0
  
  3 or 5
  # 3
  3 or 0
  # 3
  0 or 3
  # 3
  0 or 0
  # 0
  ```



#### 복합 연산자

| 연산자  | 내용       |
| ------- | ---------- |
| a += b  | a = a + b  |
| a -= b  | a = a - b  |
| a *= b  | a = a * b  |
| a /= b  | a = a / b  |
| a //= b | a = a // b |
| a %= b  | a = a % b  |
| a **= b | a = a ** b |



#### 연산자 우선순위:

| 순위 | 연산자                          |
| ---- | ------------------------------- |
| 0    | 소괄호`()`를 통한 grouping      |
| 1    | Slicing                         |
| 2    | Indexing                        |
| 3    | 제곱연산자 **                   |
| 4    | 단항연산자 +, - (음수/양수부호) |
| 5    | 산술연산자 *, /, %              |
| 6    | 산술연산자 +, -                 |
| 7    | 비교연산자, in, is              |
| 8    | not                             |
| 9    | and                             |
| 10   | or                              |



#### 기타 주요 연산자(자료구조 더 배우고 나서 수정 예정)

- Concatenation: 
  - 문자열+문자열 = 문자열문자열
  - [리스트원소들]+[리스트원소들] = [리스트원소들, 리스트원소들]
- `in` 연산자: 특정 요소가 속해있는지를 확인할 수 있다.
- `is`연산자: 동일한 object인지 Identity를 확인할 수 있다. 
  - 파이썬은 의도적으로 공백없는 알파벳 문자열도 identity가 같게 해놨다. 느낌표를 추가하면 같지 않다. 
  - -5 ~ 256의 숫자도 id를 같게 해놨다.

- Indexing / Slicing: `[]`를 통해 값으로 접근하고, `[:]`를 통해 슬라이싱 할 수 있다.



### 표현식(Expression) & 문장(Statement)





### Jupyter Notebook: 

REPL(Read Eval Print Loop): 파이썬의 대화형 개발 환경 중 하나로 셀 단위의 코드 실행으로 바로 결과를 확인한다. 특히 Jupyter Notebook은 Markdown문법을 지원하여 풍부한 문서화 기능을 가지고 있다.



### Errors 모음집:

문법에 오류가 있을 때 나오는 오류:

```python
SyntaxError: invalid syntax
```



식별자보다 할당하려는 변수의 개수가 더 많을 때 나오는 오류:

```python
ValueError: not enough values to unpack (expected 3, got 2)
```



식별자보다 할당하려는 변수의 개수가 더 적을 때 나오는 오류:

```python
ValueError: too many values to unpack (expected 2)
```
