# Python_Basic_Abstract4

목차:

- 클래스와 객체
- 객체 지향 프로그래밍 (Object Oriented Programming)



### 클래스와 객체

#### 객체:

파이썬에서 모든 것은 객체이다. 어떠한 객체가 만들어지고 이 객체의 주소(id값)가 식별자에 저장되는 것이다(print를 하면 그 해당하는 위치의 객체를 보고 출력하는 것). `모든 객체는 자신 고유의 속성(attribute)을 가지며 클래스에서 정의한 행위(behavior)를 수행할 수 있다.`

- 타입(type): 어떤 연산자(operator)와 조작(method)이 가능한가?

  - 타입: 공통된 속성(attribute)과 조작법(method)을 가진 객체들의 분류

  - 인스턴스: `특정 클래스(class)로부터 생성된 해당 클래스의 실체/예시(instance)` 

    ```python
    a = 1    # 식별자 = 인스턴스(int type의)
    isinstance(a, int) # True
    ```

    | type  |   instance    |
    | :---: | :-----------: |
    |  int  |       3       |
    |  str  |    'hello'    |
    | list  |   ['a', 3]    |
    | dict  | {key : value} |
    | tuple |   (10, 30)    |

  - 파이썬에서 모든 것은 객체이고, 모든 객체는 특정 타입의 인스턴스이다.

  

- 속성(attribute): 어떤 상태(데이터)를 가지는가?

  - 속성: 객체(object)의 상태/데이터를 뜻한다. `<객체>.<속성>`으로 확인 할 수 있다. 복소수(complex) 타입의 .real과 .imag가 속성이다. `클래스/인스턴스가 가지는 속성(값/데이터)`

    

- 조작법(method): 어떤 행위(함수)를 할 수 있는가?

  - 메소드: 특정 객체에 적용할 수 있는 행위를 뜻한다. `클래스/인스턴스에 적용 가능한 조작법(method) & 클래스/인스턴스가 할 수 있는 행위(함수)`

    | type | methods                                |
    | ---- | -------------------------------------- |
    | str  | .replace, .split, .join                |
    | list | .append(), .reverse(), .sort(), .pop() |
    | dict | .keys(), .values(), .item(), .get()    |

  

#### 클래스: 

`공통된 속성(attribute)과 행위(behavior)를 정의한 것으로 객체지향 프로그램의 기본적인 사용자 정의 데이터형(user-defined data type)`

type: 공통 속성을 가진 객체들의 분류(class)





### 객체지향프로그래밍(OOP):

절차중심에서 객체(Object)중심, 객체지향으로의 패러다임의 변화. 현실세계를 좀 더 잘 표현하고 싶었다. 

객체 지향 프로그래밍(영어: Object-Oriented Programming, OOP)은 컴퓨터 프로그래밍의 패러다임의 하나이다. 객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 것이다.

Object 중심의 장점:

객체지향프로그래밍: 객체가 중심이 되기 때문에 유연하고 변경이 용이하다. 따라서 대규모 소프트웨어 개발에 많이 사용되고, 소프트웨어 개발과 보수를 간편하게 하며 보다 직관적인 코드 분석을 가능하게 하는 장점을 갖고 있다.

- 코드의 직관성
- 활용의 용이성
- 변경의 유연성







#### 클래스 생성:

클래스의 이름은 반드시 PascalCase(UpperCamelCase)로 정의한다.

클래스 내부에는 데이터(속성)와 함수(메서드)를 정의할 수 있다.

class <클래스이름> 으로 정의한다.

클래스는 3가지 메서드(클래스, 인스턴스, 스태틱) 모두에 접근할 수 있다. 하지만 클래스에서 인스턴스 메서드는 호출하지 않는다.

클래스가 할 행동은 다음 원칙에 따라 설계한다.

- 클래스 자체(cls)와 그 속성에 접근할 필요가 있다면 클래스 메서드로 정의한다.
- 클래스와 클래스 속성에 접근할 필요가 없다면 스태틱 메서드로 정의한다. (스태틱 메서드는 cls, self와 같이 묵시적인 첫번째 인자를 받지 않기 때문이다.)



#### 인스턴스 생성:

클래스의 인스턴스는 클래스이름()을 호출함으로써 생성된다.

type() 함수를 통해 생성된 객체(인스턴스)의 클래스 확인 가능.

인스턴스는 3가지 메서드에 모두 접근할 수 있다. 하지만 인스턴스에서 클래스 메서드와 스태틱 메서드는 호출하지 않아야 한다. 혼동이 올 수 있기 때문이다. 인스턴스가 할 행동은 모두 인스턴스 메서드로 한정 지어서 설계한다.



#### 메서드 정의:

클래스 내부의 함수를 메서드라고 한다. 특정 데이터 타입(또는 클래스)의 객체에 공통적으로 적용 가능한 행위들을 의미함.

파이썬에서 인스턴스 메서드는 호출 시 첫번째 인자로 인스턴스 자신(self)이 전달되게 설계되어있다. 일반적으로 self를 매개변수명으로 설정한다.

생성자 메서드:  인스턴스 객체가 생성될 때 호출되는 함수. `__init__(self)`로 정의한다. 생성자를 활용하면 인스턴스 생성 시점에서 인스턴스의 속성을 정의할 수 있다.

소멸자 메서드: 인스턴스 객체가 소멸되기 직전에 호출되는 함수. `__del__(self)` 로 정의한다.

속성(Attribute) 정의: 특정 데이터 타입(또는 클래스)의 객체들이 가지게 될 상태/데이터를 의미한다.

매직메서드(스페셜 메서드): 생성자, 소멸자 메서드처럼 더블언더스코어(`__`)가 있는 메서드는 특별한 일을 하기 위해 만들어진 메서드이다.

`__str__(self)` : 특정 객체(클래스)를 출력(`print()`)할 때 보여줄 내용을 정의한다.

`__repr__(self)`: 인스턴스의 값을 나타낼 때 찍히는 값을 여기에 설정할 수 있다.



#### 클래스 변수 VS 인스턴스 변수

인스턴스 변수: 인스턴스의 속성(attribute). 각 인스턴스들의 고유한 변수. 메서드 정의에서 `self.변수명` 으로 정의. 인스턴스 생성 이후 `인스턴스.변수명` 으로 접근 및 할당

클래스 변수: 클래스의 속성(attribute). 모든 인스턴스가 공유. 클래스 선언 내부에서 `변수명` 으로 정의 `클래스.변수명` 으로 접근 및 할당

이름공간 탐색 순서: 클래스를 정의하면, 클래스 생성과 동시에 이름공간(namespace)이 생성된다. 인스턴스를 만들게 되면, 인스턴스 객체가 생성되고 해당되는 이름공간이 생성된다. 인스턴스의 속성이 변경되면, 변경된 데이터를 인스턴스 객체 이름공간에 저장한다. 클래스와 인스턴스는 ==서로 다른 이름공간(namespace)를 가지고 있으며==, 인스턴스에서 특정한 속성에 접근하게 되면 인스턴스 ㅡ> 클래스 순서로 이름공간 탐색을 한다.



#### 인스턴스 메서드 VS 클래스 메서드 VS 스태틱 메서드

인스턴스 메서드: 인스턴스가 사용할 메서드. 클래스 내부에 정의되는 메서드의 기본 값은 인스턴스 메서드이다. 함수처럼 정의한다. 특징으로 호출시 첫번째 인자는 무조건 인스턴스 자기자신인 `self 인자`가 들어간다.

클래스 메서드: 클래스가 사용할 메서드. `@classmethod` 데코레이터를 사용하여 정의한다. 특징으로 호출시 첫번째 인자는 무조건 클래스 자기자신인 `cls 인자`가 들어간다.

스태틱 메서드: 클래스가 사용할 메서드. `@staticmethod` 데코레이터를 사용하여 정의한다. 특징으로 호출시 자동으로 어떠한 인자도 전달되지 않는다.



#### 상속

클래스에서 가장 큰 특징은 상속이 가능하다는 것이다. 부모 클래스의 모든 속성이 자식 클래스에게 상속되므로 코드 재사용성이 높아진다.

상속은 공통된 속성이나 메서드를 부모 클래스에 정의하고 ,이를 상속받아 다양한 형태의 클래스들을 만들 수 있다.

```python
class Person:
    pass

class Student(Person):
    pass

class Professor(Person):
    pass
```

##### 타입 검사방법:

- isinstance(3, int) : 상속 관계에 있어도 True

- type(3) is int: 해당 클래스인 경우만 True

  - 내장 타입들에도 상속 관계가 있다.

    ```python
    isinstance(True, int) # boolean 값과 int랑 비교 ㅡ> True
    type(True) is int  # ㅡ> False
    
    # 그 이유는 boolean은 int를 상속받아 만들어졌기 때문.
    issubclass(bool, int) # 상속관계인지 확인. ㅡ> True
    bool.mro()  # [bool, int, object]
    ```

##### super()

자식 클래스에 메서드를 추가로 구현할 수 있다.

부모 클래스의 내용을 사용하고자 할 때, super()를 사용할 수 있다.

```python
class ChildClass(ParentClass):
    def method(self, arg):
        super().method(arg)
# ㅡㅡㅡㅡㅡㅡㅡㅡ예시ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class Person:
    population = 0
    
    def __init__(self, name): 
        self.name = name
        Person.population += 1
        
    def talk(self):
        print(f'반갑습니다. {self.name} 입니다.')
        
class Student(Person):
    
    def __init__(self, name, student_id):
        super().__init__(name)
        self.student_id = student_id
```



#### 메서드 오버라이딩 (메서드 재정의)

자식 클래스에서 부모 클래스의 메서드를 재정의하는것.

상속 받은 메서드를 재정의할 수도 있다.

상속 받은 클래스에서 `같은 이름의 메서드`로 덮어쓴다.

```python
class Person:
    def __init__(self, name, age, number, email):
        self.name = name
        self.age = age
        self.number = number
        self.email = email 
        
    def talk(self):
        print(f'안녕, {self.name}')
        
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
# 만약 talk 함수도 실행 + 함수의 내용을 추가하고 싶다면!
class Soldier(Person):
    def __init__(self, name, age, number, email, level):
        super().__init__(name, age, number, email)
        self.level = level
        
    def talk(self):
        super().talk()
        print(f'충성! {self.level} {self.name}입니다. ^^7')
        # 결과:
        # 안녕, {self.name}
        # 충성! {self.level} {self.name}입니다. ^^7
```



##### 상속관계에서의 이름공간:

기존의 인스턴스 ㅡ> 클래스 순으로 이름 공간을 탐색해나가는 과정에서 상속관계에 있으면 아래와 같이 확장 된다.

- 인스턴스 ㅡ> 클래스 ㅡ> 전역
- 인스턴스 ㅡ> 자식클래스 ㅡ> 부모 클래스 ㅡ> 전역



#### 다중상속

두 개 이상의 클래스를 상속받는 경우, 다중 상속이 된다.

여기서 같은 속성을 상속받을 경우 제일 처음으로 상속받는 클래스의 것을 따른다.

```python
class Mom(Person):
    gene = 'XX'
    
    def swim(self):
        print('첨벙첨벙')
        
class Dad(Person):
    gene = 'XY'
    
    def walk(self):
        print('씩씩하게 걷기')
        
class FirstChild(Mom, Dad): # swim, walk, cry 가능
    def cry(self):
        print('응애')
        
    def walk(self): # 메소드 오버라이딩
        print('아장아장')
       
class SecondChild(Dad, Mom):
    def cry(self):
        print('응애')

    def walk(self): # 메소드 오버라이딩
        print('아장아장')
        

baby1 = FirstChild('전승환')
print(baby1.gene)  # 'XX'

baby2 = SecondChild('환승전')
print(baby2.gene)  # 'XY'

# instance.mro()를 실행하면 Method Resolution Order(메서드 실행 방식)을 확인 가능함.
# baby1.mro()를 확인해보면 [__main__.FirstChild, __main__.Mom, __main__.Dad, __main__.Person, object]
# baby2.mro()를 확인해보면 [__main__.SecondChild, __main__.Dad, __main__.Mom, __main__.Person, object]
```

