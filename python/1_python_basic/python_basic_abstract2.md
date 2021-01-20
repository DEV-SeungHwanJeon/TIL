# Python_Basic_Abstract2

목차:

- 제어문
- 함수



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

#### 함수의 결과값

함수는 `return`을 통하여 결과값을 전달할 수 있다. 이 때 오직 한 개의 객체만 반환된다.





