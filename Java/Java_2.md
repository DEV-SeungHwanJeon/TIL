

## 자바의 Class vs Object

- Object
  - Object는 구체적인 표현 대상이 있다.
- Class
  - Class는 구체적인 Object들을 분석해보고 공통적인 내용들을 추상화해서 Programming 언어로 표현한 것이다.



즉, 현실 세계의 Object들을 분석해서 Class로 정의한다.

시스템의 대상이 되는 현실 세계의 Object들을 분석한 다음, 그들을 어떤 기준에 의해, 분류 (Classify)를 하는 것이 먼저 해야 할 일이다.



### Class 특징

> 특성은 어떤 시스템에서 Class가 사용되느냐에 따라 다르게 정의된다.

- 정적인 특징 ( attribute )
- 동적인 특징 ( behavior )



### Class 만들기

```java
package com.ssafy;

public class Phone {
    public String name;
    public char color;
    public int price;
    
    public int getRealDebt() {
        return 10000;
    }
}
```

Class Name : Phone

attributes ( member variables ) : name, color, price

behavior ( methods ) : getRealDebt

- class가 갖고잇기 때문에 function이 아닌 methods 라고 명명함



### Class 사용하기

> Class를 사용하는 코드를 작성해보자. 추상화의 결과로 Class를 만들었고 그 Class를 이용해서 대상이 되는 특정 Object를 만들게 된다.

```java
package com.ssafy;

public class PhoneTest {
    public static void main(String[] args) { // 자바 Virtual Machine의 시작 포인트
        Phone phone = new Phone(); // Object new Constructor
        
        phone.name = "Galaxy Note"; // member variables
        phone.color = 'B';
        phone.price = 10000;
        
        System.out.println(phone.getRealDebt()); // method call {}
    } 
}
```

Java Virtual Machine의 시작 포인트(Entry Point) : public static void main(String[] args)

- 메인메소드도 클래스 안에 들어가야 한다.
- PhoneTest라는 이름을 갖고 메모리에 로드를 해서 실행해서 메인메소드를 찾아서 호출하게되면 JVM이 실제로 처리하는 코드( public static void main(String[] args) {안의 코드} )가 처리가 된다.

Object new Constructor : Phone phone = new Phone();

member variables: name, color, price

method call {} : phone.getRealDebt()





### member variables Set

> 멤버 변수를 부여하는 방법

Class를 정의하면서 할 수도 있고,

```java
public String name = "Galaxy Note";
public char color;
public int price;
```

생성자의 Parameter에 값을 전달하는 방법이 있고,

```java
public Phone(String name) {
    this.name = name;
}

Phone phone = new Phone("A");
```

객체를 만든 후에 직접 값을 부여할 수도 있다.

```java
Phone phone = new Phone();

phone.name = "Galaxy Note";
phone.color = 'B';
phone.price = 10000;
```



만약 멤버변수의 값을 설정하지 않으면

{} 안에 선언된 local variable은 사용 전에 값을 설정해야만 했다.

 Class 안에 선언된 member variable은 new를 통한 객체가 생성될 때 기본 값(Default Value)이 자동으로 부여된다. ( 0하고 0에 준하는 값들이 자동으로 Default Value )

| 데이터타입          | 기본값   |
| ------------------- | -------- |
| byte                | 0        |
| short               | 0        |
| int                 | 0        |
| long                | 0L       |
| float               | 0.0f     |
| double              | 0.0d     |
| char                | '\u0000' |
| boolean             | false    |
| Object ( String ..) | null     |



그런데 member variables 값을 외부에서 직접 Set 할 수 있다.

OOP는 Object 중심인데, 외부에서 Object의 member variables를 마음대로 바꾼다?

OOP에서 member variables의 Set은 외부에서 마음대로 할 수 없도록, Class 내부에서 제어할 수 있는 구조를 가지는게 일반적이다.

생성자는 이러한 구조를 갖고 있다.

By 생성자 ( 권장 )

```java
public Phone(String name) {
    this.name = name; // 생성자를 통해서 받아온 정보를 적용한다. 나의 생성자를 통하여 멤버변수를 바꿔라 라는 구조가 되어야 한다. (임의대로 조건문 추가 가능)
}

Phone phone = new Phone("A"); // 외부에서 이 코드를 호출
```

By Direct ( 권장되지 않음 )

```java
Phone phone = new Phone();

phone.name = "Galaxy Note";
phone.color = 'B';
phone.price = 10000;
```



### Encapsulation (캡슐화)

OOP의 특징 중 하나로, Class를 구성할 때, 기본적으로 멤버변수와 메소드를 외부에 노출하지 않도록 가정하고, 필요한 경우에 한해, 외부에 노출하는 것을 의미한다.

외부에 노출할 경우, Setters & Getters 를 제공하여, 외부와 소통한다.

접근제한자 ( Access Modifier )를 이용하여 외부에 어느 정도 노출할 것인지를 결정한다.



### member variables Setters

member variables 값을 외부에서 마음대로 접근할 수 없도록 하고, 대신 member variable 하나에 대해 값을 Set 할 수 있는 특별한 method를 제공할 수 있다.

이를 통해, 외부에서는 member variables 의 값을 변경 요청하게 되고, Class 내부에서는 이 method 안에서 요청에 대한 처리를 수행하면 된다.

이러한 method 들을 Setters 라고 한다.

By Setters

```java
public class Phone {
    public String name;
    public char color;
    public int price;
    
    public void setName(String name) {
        this.name = name;
    }
}

Phone phone = new Phone();
```

By 생성자

```java
public Phone(String name) {
    this.name = name;
}

Phone phone = new Phone("A");
```



### member variables Getters

외부에서 값을 읽고자 할 때, 직접 읽지 않고, 별도의 method를 제공하는데 이러한 method들을 Getters 라고 한다.

Getters 를 통해 외부에서는 Object의 member variables의 값을 읽을 수 있다.

```java
public class Phone {
    public String name;
    public char color;
    public int price;
    
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}


Phone phone = new Phone();

System.out.println( phone.getName() )
```



### private member variables

Setters를 제공했다고 끝난 것이 아니다.

여전히 member variables에 대해 외부에서 직접 Access할 수 있으므로 직접 접근을 막아야 한다.

member variables 앞에 있는 modifier를 public-> private으로 변경해주면 된다.

```java
public class Phone {
    private String name;
    private char color;
    private int price;
}
```





### Setters & Getters  포함 코드

Phone.java

```java
public class Phone {
    private String name;
    private char color;
    private int price;
    
    public int getRealDebt() { return 1000; }
    
    public Phone(String name) { this.name = name; }
    public Phone() {}
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public char getColor() { return color; }
    public void setColor(char color) { this.color = color; }
    
    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }
}
```

PhoneTest.java

```java
public class PhoneTest {
    public static void main(String[] args) {
        Phone phone = new Phone();
        phone.setName("Galaxy Note");
        phone.setColor('B');
        phone.setPrice(10000);
        
        System.out.println( phone.getRealDebt() );
        System.out.println( phone.getName() );
        System.out.println( phone.getColor() );
        System.out.println( phone.getPrice() );
    }
}
```



Setters와 Getters 구조를 가져가야만, 이후에 처리 로직이 변경되는 경우에 그에 쉽게 대응할 수 있다. 

(외부에서는 Setters와 Getters를 통해서만 변경하도록 코드를 작성해야 이후 변화되는 처리로직에 쉽게 대응할 수 있다.)



### 생성자

```java
public class Phone {
    public String name;
    public char color;
    public int price;
    
    public int getRealDebt() {
        return 1000;
    }
    
    public Phone(String name) {
        this.name = name;
    }
}
```

public : modifier

this : 자기자신

. : Object Reference



### 다른 생성자로 객체 만들기

Phone Class에 2개의 생성자가 만들어졌다. 각각의 생성자를 이용해서 Phone 객체를 만들어보자.

```java
public class Phone {
    public String name = "Galaxy Note
";
    public char color;
    public int price;
    
    public int getRealDebt() {
        return 1000;
    }
    
    public Phone(String name) {
        this.name = name;
        System.out.println("A");
        System.out.println(this.name);
    }
    
    public Phone() {
        System.out.println("B");
        System.out.println(this.name);
    }
}
```



```java
public static void main(String[] args) {
    Phone phoneA = new Phone("S21");
    Phone phoneB = new Phone();
}
```



### 생성자 앞 public

public modifier : 외부에서 생성자를 호출할 때, 아무런 제한이 없다는 의미.

특별한 경우, modifier를 이용하여, 생성자 호출을 제한할 수도 있다. ( Singleton Design Pattern )



### member variables

Class를 이용해서 Object를 만든다는 것은 표현해야 할 대상이 존재한다는 것이다. member variables를 통해 그 대상의 다양한 상태를 표현한다.

member variables는 프로그램의 안에서 필요에 따라 변할 수도, 변하지 않을 수도 있다.





### Setters & Getters 실습

- Phone.java
  - Setters & Getters 추가
  - member variables : public -> private
- PhoneTest.java
  - Phone의 Setters & Getters 사용





### Methods

**구성**

- return type : int, char, ..., String, Phone, Array, void (없거나, 하나)
- parameter type : int, char, ... String, Phone, Array, () (없거나, 하나, 여러개)
- {} block : 수행Code, (return하거나, 안하거나)

```java
public int getRealDebt() {
    return 10000;
}

public void setColor(char color) {
    this.color = color;
}
```



**호출**

- object.methodname(parameter)
- variable = object.methodname(parameter)

- ```java
  Phone phone = new Phone();
  
  phone.setName("Galaxy Note");
  phone.setColor('B');
  phone.setPrice(10000);
  
  int realDebt = phone.getRealDebt();
  System.out.println( realDebt );
  ```



**추가**

Phone Class에 getSalePrice() method를 추가해보자. color=='A'인 경우는 price를, 아닌 경우에는 price + 1000을 return 하자.

```java
public class Phone {
    
    private String name = "Galaxy Note";
    private char color;
    private int price;
    
    public int getRealDebt() { return 1000; }
    
	public int getSalePrice() {
        if( this.color == 'A' ) {
            return this.price;
        } else {
            return this.price + 1000;
        }
    }    
}
```



```java
public class PhoneTest {
    public static void main(String[] args) {
        Phone phone = new Phone();
        
        phone.setName("Galaxy Note");
        phone.setColor('B');
        phone.setPrice(10000);
        
        System.out.println( phone.getSalesPrice() );
    }
}
```



**Array of Object**

int [] kintArray = new int[5];

위의 primitive type 처럼 객체 (Reference Type)도 배열(Array)로 만들 수 있다.

다음 코드의 결과를 예측해보시오.

```java
public static void main(String[] args) {
    Phone [] phoneArray = new Phone[5];
    
    for( int i=0; i<phoneArray.length; i++) {
        // phoneArray[i] = new Phone();
        phoneArray[i].setPrice(i*2000);
    }
    
    for( Phone phone : phoneArray ) {
        System.out.println( phone.getPrice() );
    }
}
```

--> Exception in thread "main" (null point exception)



**JVM Memory Overview**

Java는 High-Level Language로 Memory Management로부터 자유롭다.

Java Virtual Machine 은 주요하게 3개의 메모리 영역을 가지고 있으며 그 용도는 아래와 같다. (다른 메모리 영역은 학습하지 않는다.)

- Class Area ( Method Area )
  - for Class, Static, Method
- Heap
  - for Objects
- Stack ( 재귀 시 stack overflow 할 때 그 stack)
  - for Call



**Garbage Collection** ( Memory Management )

Java는 new 연산자를 통해서 Memory Allocation을 수행하지만, Deallocation은 JVM이 알아서 처리한다.

JVM은 Heap에 만들어진 객체 중 더 이상 참조되지 않은 것들을 대상으로 적절한 시점에 Garbage Collection 작업을 수행한다.

- 우리는 Garbage Collection에 직접 관여할 수 없다.
- 자동으로 처리된다는 점은 Coding 관점에서는 장점이지만, 운영 관점에서는 단점이다.
- 불필요한 객체 생성을 지양한다.



**String Class**

숫자나 문자 한 글자는 Primitive Type으로 선언과 동시에 값의 범위가 정해진다.

하지만, 우리가 가장 많이 사용하는 문자열은 본질적으로 가변적이기 때문에 Primitive Type으로 표현하기 어렵다.

Java에서 문자열은 Phone Class 처럼 Class로 정의하고 기본으로 제공된다. ( java.lang package )

Primitive Type 처럼 new 없이 바로 문자열을 값으로 줄 수도 있고, Reference Type처럼 new 연산자를 이용하여 값을 줄 수도 있다. ( msg = "Hello" 또는 msg = new String("Hello") )

```java
public static void main(String[] args) {
    int i1 = 10;
    int i2 = 10;
    if( i1 == i2 ) { System.out.println("i1 == i2"); } // O
    
    String s1 = "Hello";
    String s2 = "Hello";
    if( s1 == s2 ) { System.out.println("s1 == s2"); } // O
    
    String s3 = new String("Hello");
    String s4 = new String("Hello");
    if( s3 == s4 ) { System.out.println("s3 == s4"); } // X
    
    if( s3.equals(s4) ) { System.out.println("s3 s4 equals"); } // O
}
```

==는 두 변수의 memory 값을 비교함.

i1, i2는 local 변수이므로 Stack에 만들어지고, Primitive Type이므로 그 변수에 값이 저장됨

s3, s4 는 각각 new에 의해 Heap에 서로 다른 객체를 생성하고 그 주소값을 저장

String객체의 equals()를 이용하면 new로 만든 문자열의 내용이 같은지 확인할 수 있다.



자주 복수 개의 String을 이어서 새로운 String을 만들게 된다.

- operator를 사용하는 방법과 StringBuilder를 사용하는 방법을 알아보자.
- operator를 이용하면 그만큼 String 객체가 새로 만들어진다. 불필요한 객체가 많이 만들어져서 성능에 영향을 미칠 수 있다.
- 간단한 +의 나열은 compiler가 내부적으로 StringBuilder를 사용해 처리한다. 그러나 Loop 등의 코드 안에서는 그러하지 않다.



