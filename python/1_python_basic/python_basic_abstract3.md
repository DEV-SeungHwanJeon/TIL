# Python_Basic_Abstract3

목차:

- json 파일 불러오기
- 데이터 구조 (순서가 있는 String, List)
- List Comprehension
- iterable 데이터 구조에 적용 가능한 Built-in Function
- 데이터 구조 (순서가 없는 Set, Dictionary)
- Dictionary Comprehension
- Lazy Evaluation
- 모듈과 패키지



### json 파일 불러오기

```python
import json
data_json = open('path/data.json', encoding='utf-8') #파일을 불러오는 함수이다. utf-8 인코딩을 활용하여 불러온다.
data_dict = json.load(data_json)   #불러온 json파일을 dict 객체로 변환해준다.

# 만약 불러올 파일이 'data_folder' 안에 있다면 glob 라이브러리를 활용하는 방법이 있다.
import glob
output = glob.glob('data_folder/*.json')
print(output) # 리스트에 파일path들이 string으로 넣어져 있을 것이다.
# ex) ['test1.json', 'test2.json', 'test3.json', 'test4.json']
```



### 데이터 구조 (순서가 있는 String, List)

데이터 구조란 데이터에 편리하게 접근하고, 변경하기 위해서 데이터를 저장하거나 조작하는 방법을 말한다.

>  Program = Data Structure + Algorithm

순서가 있는(ordered) 데이터 구조: 문자열(String), 리스트(List) + 데이터 구조에 적용 가능한 Built-in Fuction

#### 문자열(String)

변경할 수 없고(immutable), 순서가 있고(ordered), 순회 가능한(iterable)

- 조회 / 탐색

  - string.find(x): x의 첫 번째 위치를 반환한다. x가 없다면 -1을 반환
  - string.index(x): x의 첫 번째 위치를 반환한다. x가 없다면 오류 발생

- 값 변경

  - string.replace(old, new[, count]): 바꿀 대상 글자(old)를 새로운 글자(new)로 바꿔서 반환한다. count를 지정하면 해당 갯수만큼만 시행

  - string.strip([chars]): 특정한 문자들을 지정하면, 양쪽을 제거하거나 왼쪽/오른쪽을 제거한다.(lstrip/rstrip) 지정하지 않으면 공백을 제거

  - string.split(단위): 문자열을 특정한 단위로 나누어 리스트로 반환

  - string.join(iterable): 반복가능한(iterable) 컨테이너의 요소들을 separator를 구분자로 합쳐 문자열로 반환

    ```python
    '싸피'.join(['5기','화이팅','극복'])
    
    # '5기싸피화이팅싸피극복'
    ```

- 문자 변경

  - string.capitalize(): 앞글자를 대문자로 만들어 반환
  - string.title(): 어포스트로피(`'`)나 공백 이후를 대문자로 만들어 반환
  - string.upper(): 모두 대문자로 만들어 반환
  - string.lower(): 모두 소문자로 만들어 반환
  - string.swapcase(): 대소문자를 변경하여 반환

- 문자열 관련 검증 메소드(참/거짓 반환)

  - string.isalpha():
  - string.isdecimal():
  - string.isdigit():
  - string.isnumeric():
  - string.isspace():
  - string.isupper():
  - string.istitle():
  - string.islower():



#### 리스트(List)

변경 가능하고(mutable), 순서가 있고(ordered), 순회 가능한(iterable)

- 값 추가 및 삭제
  - list.append(x): 리스트에 값을 추가
  - list.extend(iterable): iterable한 값(list, range, tuple, string)을 붙인다.
  - list.insert(i,x): i 위치에 값을 추가. 인덱스(i)에 -1을 넣거나 리스트의 길이를 넘어서는 인덱스를 넣으면 리스트의 마지막에 아이템이 추가됨. 
  - list.remove(x): 리스트내의 x값을 삭제(앞에서부터 1개씩). x가 없을 시 오류 발생
  - list.pop(i): i 위치의 값을 삭제하며, 그 값을 반환한다. i가 지정되지 않으면 마지막 항목을 삭제하고 반환한다.
  - list.clear(): 리스트 내의 모든 값을 삭제
- 탐색 및 정렬
  - list.index(x): 리스트 내의 x값을 찾아 해당 index를 반환. x가 없을 시 오류 발생
  - list.count(x): 원하는 값의 개수를 확인
  - list.sort(): 리스트를 정렬한다. 원본 list를 변형시키고, None을 반환한다. `sorted(list)`내장함수를 활용하면 원본 list를 변형시키지 않고 정렬된 리스트를 반환한다.
  - list.reverse(): 리스트를 뒤집는다. 거꾸로 정렬하는 것이 아니니 주의하자. 반대로 정렬은 list.sort(), list.reverse()를 실행하거나 list((reversed(sorted(lotto)))) 로 하면 된다.



### List Comprehension

코드 한 줄로 표현식과 제어문을 통해 리스트를 생성한다.

```python
# [expression for 변수 in iterable]
# list(expression for 변수 in iterable)
# ex)
[num**2 for num in range(0,10)] # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

```python
# 조건문을 추가할 수 있다.
# [expression for 변수 in iterable if 조건식]
# list(expression if 조건식 else 식 for 변수 in iterable)
# ex)
[num for num in range(1,11) if num%2==0] # [2, 4, 6, 8, 10]. 단, 뒤의 조건식에 else문 추가 불가

['짝수' if number%2==0 else '홀수' for number in range(1,11)]
# ['홀수', '짝수', '홀수', '짝수', '홀수', '짝수', '홀수', '짝수', '홀수', '짝수']. 이러한 형태에서는 else문 활용 가능
```



### 데이터 구조에 적용 가능한 Built-in Function

#### iterable 데이터에 적용 가능한 Built-in Function

- map(function, iterable): iterable한 데이터의 모든 요소에 function을 적용 후 `map object` 형태로 반환한다. (map_object는 lazy evaluation)

  ```python
  numbers = [1, 2, 3]
  ''.join([str(i) for i in numbers]) # numbers를 '123'으로 만드는 것
  list(map(str,numbers)) # map 함수를 적용하는 방법
  
  ```

- filter(function, iterable): iterable 데이터에서 function의 반환된 결과가 True인 것들만 구성하여 `filter object`형태로 반환한다.
- zip(*iterables): 복수의 iterable 객체들을 모아준다. 튜플의 모음으로 구성된 `zip object`를 반환한다.



### 데이터 구조 (순서가 없는 Set, Dictionary)

#### 세트(Set)

변경 가능하고(mutable), 순서가 없고(unordered), 순회 가능한(iterable)

- 추가 및 삭제
  - set.add(elem): elem을 set에 추가
  - set.update(*others): 여러가지 값을 추가한다. 인자로는 반드시 iterable 데이터 구조를 전달해야함
  - set.remove(elem): elem을 set에서 삭제. elem이 set에 없다면 KeyError 발생
  - set.discard(elem): elem을 set에서 삭제. elem이 set에 없어도 Error 발생 하지 않음
  - set.pop(): 임의의 원소를 제거해 반환(랜덤). pop(i)처럼 인덱스를 설정하면 TypeError 발생. (set에는 순서가 없기 때문). 빈 set에 pop을 실행하면 KeyError 발생



#### 딕셔너리(Dictionary)

변경 가능하고(mutable), 순서가 없고(unordered), 순회 가능한(iterable)

- 조회
  - dict.get(key[, default]): dict안에 key가 있는지 확인 후 value를 반환한다. dict안에 key가 없더라도 Error가 발생하지 않으며 None을 반환한다. default를 설정하면 None 대신 default가 나온다.
- 추가 및 삭제
  - dict.pop(key[, default]): dict안에 key가 있으면 제거하고 그 value을 반환한다. dict안에 key가 없으면 KeyError가 발생하지만 key가 없더라도 default를 설정해두면 Error가 발생하지 않는다.
  - dict.update({key:value}) or dict.update(키 = value) : 해당 key의 value를 덮어 쓴다. 해당 key가 없으면 그 key와 value가 dict에 추가된다.
- 순회(반복문 활용)
  - for를 활용하여 순회하는 4가지 방법:
    - for key in dict:
    - for key in dict.keys():
    - for val in dict.values():
    - for key, val in dict.items():





### Dictionary Comprehension

iterable에서 dictionary를 생성할 수 있다.

```python
{ key: value for elem in iterable }
dict( { key : value for elem in iterable })
```



Dictionary Comprehension에 조건을 추가할 수 있다.

```python
{ key: value for elem in iterable if 조건식 }
{ key: value if 조건식 else 값 for elem in iterable}
```





### Lazy Evaluation

- `compiler`는 일반적으로 `expression`(표현식. 값을 도출하는 코드)을 만나면 그 값을 계산(평가)한다. `Evaluation`은 `compiler`가 코드를 보고 최종 결과를 평가하는 과정이다. (ex. 5+3을 만나면 8로 평가)

- 대부분의 언어에서 `expression`을 만나면 **즉시 평가**하지만, 항상 효과적인건 아니다. 예를 들어 함수가 전달된 파라미터를 사용하지 않는 경우, compiler가 이를 평가할 필요가 없다.

  ```python
  def func(x, y):
      return x + 1
  
  func(3, 3+2)
  # 3+2는 함수 내부에서 사용되지 않으므로 평가할 필요가 없다.
  ```

  이럴 때, 즉시 평가하지 않고 `필요한 것만 평가`하는 방법을 `lazy evaluation`, `즉시 평가`하는 방법을 `strict evaluation`이라고 부른다.

- 장점:

  - 필요할때만 평가되기 때문에 **메모리를 효율적으로 사용**할 수 있음

  - 무한 자료구조를 만들어 사용할 수 있음(무한 자료구조를 선언해서 전체를 쓰지 않더라도 일부는 사용할 수 있다. )

    ```python
    def addOne(n):  # 재귀적으로 무한으로 list를 생성
        [n] + addOne(n+1)
       
    my_list = addOne(1)  # [1,2,3,4,5,6,.....]
    # 일반적으로 compiler는 해당 함수를 호출하면 메모리 부족으로 문제가 발생한다. 하지만 lazy evaluation의 경우 재귀의 모든 depth를 계산하는게 아니라, 현재 실행되는 depth만 평가하기 때문에 문제가 발생하지 않는다.
    # 이것은 무한 자료구조 전체를 쓰지 않아도 일부는 사용할 수 있게 해준다.
    oneToThree = list.takeFirst(3)
    print(oneToThree) # [1,2,3]
    
    print(range(5,10)) # [5,6,7,8,9]
    # 위처럼 인자로 몇 번째 데이터(인덱싱) or 범위데이터(슬라이싱)를 전달하여 무한의 목록 중 일부를 사용할 수 있다. 이를 이용하여 ranges, sequences, cycles, 연속 사전키 등의 유용한 개념을 정의할 수 있다.
    
    # reference 1: https://medium.com/sjk5766/lazy-evaluation%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-411651d5227b
    # reference 2: https://medium.com/@goinhacker/lazy-evaluation%EA%B3%BC-%EB%A9%94%EB%AA%A8%EB%A6%AC-c6789ac2173c
    ```

  - 실행 도중의 오류상태를 피할 수 있음(컴파일 타임 체킹)

  - 컴파일러 최적화 가능



### 모듈과 패키지

- 모듈: 특정 기능하는 코드를 .py 파일 단위로 작성한 것

  ```python
  ## my_module.py에다가 저장
  def my_func1(n):
      return bool(n%2)
  
  def my_func2(n):
      return n//2
  
  ########## 다른 파일에서 ##########
  import my_module # my_module.py를 import문을 통해 이름 공간으로 가져옴
  print(dir(my_module)) # 우리가 만든 함수들을 확인가능
  
  my_module_func2 = my_module.my_func2 # 함수를 변수에 할당해서 사용할 수도 있음
  my_module_func2(10)
  ```

  

- 패키지: 특정 기능과 관련된 여러 모듈들의 집합. 패키지 안에는 또 다른 서브 패키지를 포함할 수도 있음. 점(.)으로 구분된 모듈 이름(package.module)을 써서 모듈을 구조화하는 방법이다.

  ```python
  # 폴더구조
  my_package/
  	__init__.py
      below_package/    # my_package.below_package 는 my_package 패키지 안에 있는 below_package
      	__init__.py
          tools.py
          
  # tools.py안의 내용:
  pi = 3.14159265358979323846
  e = 2.71828182845904523536
  def my_max(a, b):
      if a > b:
          return a
      else:
          return b
  
  ####### 다른 파일에서 #######
  from my_package.below_package import tools
  print(tools.pi)
  
  import my_package.below_package as mpbp   # 별명을 지정하여 가져올 수 있다.
  print(mpbp.tools.e)
  
  import my_package.below_package.tools as mpbptools
  print(mpbptools.my_max(3,5))
  
  from my_package.below_package.tools import (e, pi) # 특정 함수 혹은 속성만 활용하고 싶을 때
  print(e)
  print(pi)
  
  from my_package.below_package.tools import *  # tools모듈에서 모든 변수와 함수를 가져온다.
  ```

  

- 파이썬 표준 라이브러리: 파이썬에 기본적으로 설치된 모듈과 내장함수를 묶어서 파이썬 표준 라이브러리(Python Standard Library, PSL)이라 부른다.

- 패키지 관리자(pip): PyPI에 저장된 외부 패키지들을 설치하도록 도와주는 패키지 관리자