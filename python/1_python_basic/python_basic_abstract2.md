# Python_Basic_Abstract2

목차:

- 제어문
- 함수
- 함수와 스코프
- 재귀 함수
- 예외 처리
- Error 모음집



### 제어문

특정 상황에 따라 선택적으로 실행하거나 반복 수행하는 코드를 만들 수 있다.

제어문은 `조건문`과 `반복문`으로 나눌 수 있다.



#### 조건문: `if`문은 반드시 참/거짓을 판단할 수 있는 조건이 있어야 한다.

```python
if <표현식(expression)>:
	코드
else:
	코드
```

- 표현식(expression)에는 일반적으로 참/거짓에 대한 조건식이 들어가며 이 조건식이 참인 경우에는 바로 뒤에 있는 `:`의 다음 코드를 실행하고, 조건식이 거짓인 경우에는 뒤에 있는 `else` 뒤의 `:` 다음 코드를 실행한다. `else`는 선택적으로 사용할 수 있으며, `elif`는 else와 if가 합쳐진 뜻이며 여러 개가 있을 수 있다. 

- 조건문에서는 들여쓰기를 유의해야한다. 파이썬이 코드블록을 들여쓰기로 판단하기 때문이다. (PEP 8에서는 4spaces를 권장한다.)

- 조건표현식: 일반적으로 조건에 따라 값을 정할 때 활용되며 `삼항 연산자`라고 부르기도 한다.

  ```python
  value = true_value if 조건식 else false_value
  # ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  if 조건식:
      value = true_value
  else:
      false_value
  ```

  

#### 반복문

- `while`문은 조건식이 참일 경우 반복적으로 코드를 실행한다.

  ```python
  while 조건식:
  	코드
  ```

  조건문과 동일하게 `:`과 `들여쓰기`를 한다.

  종료조건을 설정하지 않으면 무한반복한다.

- `for`문은 시퀀스(string, tuple, list, range)나 다른 순회가능한 객체(iterable)의 요소들을 순회하며 반복한다.

  ```python
  for 임시변수 in 순회가능한데이터:
  	코드
  ```

  - 리스트(list) 순회에서 index 활용법

    ```python
    # range 함수
    for i in range(4):
    	print(i)
       
    menu = ['초밥','짜장면','피자','햄버거']
    for i in menu:
        print(i)
        
    for i in range(len(menu)):
        print(menu[i])
        
    for idx, menu in enumerate(menu):
        print(idx, menu)
        
    menu_list = list(enumerate(menu)) # [ (0,'초밥'), tuple, tuple]
    type(menu_list[0]) #tuple
    ```

- 반복제어( `break, continue, for-else`):
  - break: 반복문(for, while)을 종료한다.
  - continue: continue 이후의 코드를 수행하지 않고 다음 순회로 넘어가서 반복을 수행한다.
  - else: 끝까지 반복문을 실행한 이후에 실행된다. 반복에서 리스트의 소진이나(for의 경우) 조건이 거짓이 돼서 (while의 경우) 종료할 때 실행된다. 하지만 break문을 통해 종료될 때는 실행되지 않는다.
  - pass: 아무것도 하지 않는다. pass는 continue와는 다르게 뒤의 코드들도 실행이 된다.



### 함수

함수란 코드의 묶음이다. 

장점: 높은 가독성, 재사용 가능, 편리한 유지보수



#### 함수 선언과 호출

`def`와 `:`를 활용하여 선언하며, 4spaces 들여쓰기를 해야한다. 함수에 매개변수를 넘겨줄 수도 있다. 함수는 동작 후에 `return`을 통해 결과값을 전달할 수도 있으며 `return`이 없을 시, `None`을 반환한다.

함수의 호출은 `func()`이나 `func(val1, val2)` 처럼 한다.

```python
def 함수이름(parameter):
    코드
    return value
```

#### 함수의 입력값(Input)

- 매개변수(parameter): 함수의 정의 부분에서 볼 수 있으며, 입력을 받아 함수 내부에서 활용할 `변수`이다.

- 전달인자(argument): 함수를 호출하는 부분에서 볼 수 있으며, 실제로 전달되는 `입력값`이라고 생각하면 된다.

  ```python
  def func(x):  #여기서 x가 매개변수
      return x+2
  
  func(5) # 여기서 5가 전달인자
  ```

##### 함수의 전달인자 분류

- 위치 인자: 함수는 기본적으로 인자를 위치로 판단한다.

  ```python
  def func(a, b):
      return a * (b ** 2)
  ```

- 기본 인자 값: 함수가 호출될 때, 인자를 지정하지 않아도 기본 값을 설정할 수 있다.

  ```python
  def func(a, b=1):
      return a + b
  
  func(10) # a = 10, b = 1로 들어감
  ```

  

- 키워드 인자: 직접 변수의 이름으로 특정 인자를 전달할 수 있다.

  ```python
  def func(name, menu='라면'):
      print(f'{name}의 오늘 점심은 {menu}이야')
      
  func('전승환') # 가능
  func(menu='김밥',name='전승환') # 가능
  func(menu='치킨','전승환') #에러. 키워드 인자를 활용한 후에 위치 인자를 활용할 수는 없다.
  ```



- 가변(임의) 인자 리스트: 개수가 정해지지 않은 임의의 인자를 받기 위하여 가변 인자 리스트`*args`를 활용한다. 가변 인자 리스트는 `tuple`형태로 처리가 되며, 매개변수에 `*`를 붙여 표현한다. 보통 매개변수 목록의 마지막에 적는다.

  ```python
  def func(school, prof, *args):
      for student in args:
          print(f'{school} {prof} 교수님, 저는 {student}입니다.')
          
  func('금오공대', '홍길동', '전승환','김철수','김짱구','김훈이')
  
  # 결과:
  # 금오공대 홍길동 교수님, 저는 전승환입니다.
  # 금오공대 홍길동 교수님, 저는 김철수입니다.
  # 금오공대 홍길동 교수님, 저는 김짱구입니다.
  # 금오공대 홍길동 교수님, 저는 김훈이입니다.
  
  # 매개변수 위치가 아닌 일반 변수가 들어가는 위치에 *변수를 적으면 이 동작은 unpacking 동작이 된다. list, tuple, dict(key값만 반환됨)를 unpacking 한다.
  
  # ex)
  input_list = ['hello', 'world', 'welcome','programing','world']
  def func(input1, input2, input3, input4, input5):
      print(f'{input1}, {input2}, {input3}, {input4}, {input5}')
  
  func(*input_list)
  
  # 결과: hello, world, welcome, programing, world
  ```

- 가변(임의) 키워드 인자: 정해지지 않은 키워드 인자들은 `dict`형태로 처리가 되며, `**kwargs` 를 활용한다. 가변 키워드 인자는 `dict`형태로 처리가 되며, 매개변수에 `**`를 붙여 표현한다. 보통 매개변수 목록의 마지막에 적는다.

  ```python
  def my_dict(**kwargs):
      print('안녕을 각 나라의 언어로 하면 뭘까요?')
      for key, value in kwargs.items():
          print(f'{key}로는 {value}')
      return kwargs
  
  my_dict(한국어='안녕', 영어='hi', 독일어='Guten Tag')
  
  # 안녕을 각 나라의 언어로 하면 뭘까요?
  # 한국어로는 안녕
  # 영어로는 hi
  # 독일어로는 Guten Tag
  # ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  def my_url(**kwargs):
      url = 'https://api.go.kr'
      for name, value in kwargs.items():
          url += f'{name}={value}&'
      return url
  
  my_url(sidoname='서울',key='asdf')
  
  # 'https://api.go.krsidoname=서울&key=asdf&'
  ```

  

#### 함수의 결과값(Output)

함수는 `return`을 통하여 결과값을 전달할 수 있다. 이 때 오직 한 개의 객체만 반환된다.



### 함수와 스코프

함수는 코드 내부에 공간(Scope)를 생성하며 지역 스코프(Local scope)라고 불린다. 그 외의 공간은 전역 스코프(Global scope)이다.

- 전역 스코프(Global scope): 코드 어디에서든 참조할 수 있는 공간
- 지역 스코프(Local scope): 함수가 만든 스코프로 함수 내부에서만 참조가 가능한 공간
- 이름 검색(resolution) 규칙: `LEGB Rule`이라고 불리며 아래의 순서로 이름을 찾는다.
  - Local scope: 정의된 함수. 변수이름은 함수가 호출될 때 생성되고, 함수가 종료될 때까지 유지 (함수 내에서 처리되지 않는 예외를 일으킬 때 삭제됨)
  - Enclosed scope: 상위 함수. 변수이름은 위의 Local scope와 동일.
  - Global scope: 함수 밖의 변수 혹은 import된 모듈. 변수이름은 모듈이 호출된 시점 이후 혹은 선언된 이후부터 인터프리터가 끝날 때 까지 유지된다.
  - Built-in scope: 파이썬 내장 함수 또는 속성. 변수이름은 파이썬이 실행된 이후부터 영원히 유지된다.

```python
print = 6
print('안녕') #print가 int형 변수가 되었기 때문에 not callable 에러.
```



### 재귀함수(Recursive Function)

함수 내부에서 자기 자신을 호출하는 함수를 뜻한다.

- 팩토리얼 계산

  ```python
  # 재귀를 활용한 팩토리얼 계산
  def fact(n):
      if n == 1:
          return 1
      else:
          return n * fact(n-1)
      
  # 반복문을 활용한 팩토리얼 계산
  def fact_loop(n):
      result = 1
      for i in range(1,n+1):
          result *= i
      return result
  
  
  ```

- 피보나치 수열

  ```python
  # 재귀를 활용한 피보나치 수열
  def fib(n):
  	if n < 2:
          return n
      else:
          return fib(n-1) + fib(n-2)
  
  fib(10) # 55
  
  # 반복문(for)을 활용한 피보나치 수열
  def fib_loop(n):
  	a, b = 0, 1
      for i in range(n-1):
          a, b = b, a+b
      return b
  
  fib(10) # 55
  
  # 반복문(while)을 활용한 피보나치 수열
  def fib_loop(n):
      a, b, cnt = 0, 1, 2
      while cnt != n+1:
          cnt+=1
          a, b = b, a+b
      return b
  
  fib(10) # 55
  ```

  

#### 반복문과 재귀함수의 차이

- 재귀함수는 기본적으로 같은 문제지만 점점 범위가 줄어드는 문제를 풀게 된다.

- 재귀함수는 반드시 `base case(반복되지 않는 최종 도착점)`가 존재해야 한다.

- 재귀함수 코드가 더 직관적이고 이해하기 쉬운 경우가 있다. 알고리즘 자체가 재귀적인 표현이 자연스러운 경우도 있다.

- 재귀함수는 함수가 호출될 때마다 메모리 공간에 쌓이는 데, 메모리 스택이 넘치거나(Stack overflow) 프로그램 실행 속도가 늘어지는 단점이 생긴다.

- 파이썬은 이를 방지하기 위해 특정 횟수가 넘어가게 되면 더 이상 함수를 호출하지 않고, Recursion Error를 발생시킨다.

  ```python
  import sys
  sys.getrecursionlimit()   # 재귀 특정 횟수 제한
  sys.setrecursionlimit(10000) # 변경 가능하다.
  ```

- 재귀 호출은 `변수 사용`을 줄여줄 수 있다.



### 예외 처리

```python
try:
    코드
except:
    에러 발생 시 실행할 코드
else:
    에러 없이 코드가 실행이 완료된 경우 실행될 코드
finally:
    에러가 발생하던 말던 try 코드가 실행완료되면 무조건 실행될 코드
```



```python
# except는 여러 개, 에러에 각각 사용할 수 있다.
try:
    코드
except IndexError as err: # as를 활용하여 에러메세지를 보여줄 수 있다.
    print(f'{err}, 오류가 발생했습니다.')
except ValueError as err:
    print(f'{err}, 오류가 발생했습니다.')
except (예외1, 예외2):
    코드
```

raise: 예외를 강제로 발생시킬 수 있다.

```python
raise ValueError('메시지')

# 결과:
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-3-d43ff5c624cb> in <module>
----> 1 raise ValueError('메시지')

ValueError: 메시지
```



assert: 예외를 발생시키는 다른 방법이다. 보통 상태를 검증하는데 사용되며 무조건 AssertionError가 발생한다.

```python
# assert Boolean expression, error message
assert len([1, 2]) == 1, '길이가 1이 아닙니다.'
```



### Error 모음집:

SyntaxError: 문법적 오류

ZeroDivisionError: 숫자를 0으로 나누려고 할 때

NameError: "변수명" is not defined

TypeError: 

- 자료형의 타입이 잘못되었을 때 `1+'3'` 같은 경우 발생.
- 매개변수의 갯수와 입력받는 인자의 갯수가 다를 때

ValueError: 

- 자료형에 대한 타입은 올바른데 잘못된 값이 입력되는 경우(`int(3.5)`같은 경우)
- 식별자보다 할당하려는 변수의 개수가 더 많거나 적을 때 나오는 오류

IndexError: list에서 인덱스를 잘못 입력한 경우

KeyError: dictionary에서 없는 key로 조회를 하는 경우

ModuleNotFoundError: import를 잘못한 경우

ImportError: 모듈은 가져왔는데 그 안의 클래스나 함수를 찾을 수 없을 때

KeyboardInterrupt: ctrl + c 로 종료한 경우