### Object Class - toString()

System.out.println( parameter )는 전달되는 parameter.toString()을 호출하고, 그 결과를 출력한다. parameter로 Virus 객체를 전달해보면 우리가 원하는 결과와는 다른 결과를 출력한다.





### 다형성 - methods

하나의 이름으로 여러 개의 형태를 구성할 수 있는 OOP 특징을 다형성 (Polymorphism ) 이라고 한다. Type과 methods 로 크게 나눠서 생각할 수 있는데, 우선 methods 부분 먼저 살펴보자.

method는 overloading과 overriding 2가지로 다형성을 구현한다.

overloading : name 이 같아도, parameter가 다르면 별개의 method로 간주함. 생성자(constructor)도 동일함

overriding : 상속 관계에서 부모 Class의 method를 자식 Class에서 재정의할 수 있음.



 ### 다형성 - Type

부모 Type으로 자식 Type의 객체를 Reference 할 수 있다. 즉, 한 개의 Type으로 여러 하위 Type의 객체를 할당받을 수 있다.

Object > Phone > FolderblePhone 일 때 가능한 것들:

```java
Object o = new Object();
Object o = new Phone();
Object o = new FolderblePhone();
Phone p = new Phone();
Phone p = new FolderblePhone();
FolderblePhone fp = new FolderblePhone();
```



### 다형성 부여하기

toString() 은 재정의 ( Overriding )에 해당한다.

Type에 대한 다형성을 이용해보자. Virus Type으로 Corona 객체를 만들고, toString()을 호출하면 Virus의 toString()이 호출되겠지?

```java
public static void main(String[] args) {
    Virus virus = new Corona("Corona", 8, 200);
    System.out.println(virus);
}
```



다른 method나 member variables 이나 method에 대해서도 그런지 테스트해보자. 

테스트를 위해 Corona의 spreadSpeed를 public으로 바꿔보면 에러가 뜬다.

```java
public static void main (String[] args) {
    Virus virus = new Corona("Corona", 8, 200);
    System.out.println(virus); // 가능
    
    virus.spreadSpeed; // 불가능
    virus.showInfo();  // 불가능
}
```



virus에 있는 method만 호출할 수 있다. toString() 호출 가능, virus.spreadSpeed 불가능, virus.showInfo() 불가능

즉, **재정의(Overriding) 된 method만 부모 Type으로 선언한 변수로 호출하면 호출이 된다.**

```java
public String toString() {
    return this.getName() + " " + this.getLevel();
}
```

```java
public String toString() {
    return super.getName() + " " + super.getLevel() + " " + this.spreadSpeed;
}
```



### method overriding 연습

toString()은 모든 Class 의 상위 Class인 Object에 정의되어 있다. 클래스 정보와 주소 정보를 출력한다. 우리가 toString() 를 재정의하지 않으면 그대로 상속받게 되고 재정의하면 재정의된 toString()이 호출된다. 아래 결과를 예측해보자.

- Object     toString() //1
  - Virus 
    - Corona     toString() //2
      - ChildCorona

```java
Object x = new Corona(); x.toString(); // (2)
Object x = new Virus(); x.toString();  // (1)
ChildCorona x = new Object(); x.toString(); // error
Virus x = new ChildCorona(); x.toString();  // (2)
```



2번째 연습

- A    a(int i){}
  - B    b(){}
    - C    a(){}, b(int i){}
      - D    a(int i){}, b(){}
        - E    a(){}, b(){}

```java
A x = new C(); x.a(); // error
C x = new E(); x.b(3); // C:b(int i)
D x = new B(); x.b(); // error
B x = new D(); x.a(3); // D: a(int i)
```



### @Override Annotation

method를 재정의할 때, @Override Annotation을 사용하기를 권장한다. 이 Annotation은 부모 Class 의 특정 method를 재정의한다고 compiler에게 명시하는 것이다. 만약, 부모 Class에 해당 method가 없는 경우 compile 오류가 발생한다.

이를 생략하면 override할 부모의 method가 변경/삭제되어도 자식클래스에 오류가 발생하지않아 이에 대해 인지할 수 없다.

@Override를 붙이면 부모의 method의 변경/삭제를 인지할 수 있다. (compiler : overriding한다고 명시되어있는데 overriding이 불가능해. 라고 오류가 뜬다. )



### interface - 추상화

단일 상속 (extends) 을 선택한 Java는 operation (methods) 의 추상화를 Class와 독립적인 개념으로 interface라고 이름 짓고, 한 Class가 여러 개의 interface를 구현 (implements) 할 수 있도록 했다.

interface에는 관련된 methods 들을 기술하는데, 선언부만 기술하고, 구현부는 없다.

상속 (inheritance)은 본질적으로 재사용 (reuse)인데 반해, 인터페이스는 (interface) 본질적으로 규약, 약속이라고 생각하면 된다.



상속을 통해서 자식 Class는 부모 Class의 member variables & method를 자동으로 받는다.

구현을 통해 Class는 인터페이스 (interface)에 있는 추상 methods 선언을 반드시 구현해야 하는 의무를 가진다. 다른 Class 입장에서 보면 interface를 구현한 Class는 interface에 명시된 기능을 가지고 있다는 것을 알게된다.



### 다형성 부여하기

Java에서 interface는 추상 method 들의 집합이다. member variables 보다 methods에 집중하는 개념이다.

근데 왜 implements를 그 Class에서 하고, 여러 개의 interface를 구현할 수 있지?

혹시 부모 Class 처럼, Interface Type으로 변수를 선언하고 객체를 Reference?? 그리고 그 Interface에 기술된 method들을 호출??

만약 그게 가능하다면 A와 B는 I라는 Interface를 서로 규정하고, A는 그것을 구현하고, B는 I Type으로 객체를 Reference가 가능하겠네. B 입장에서는 굳이 A를 상속받을 필요도 없고, A가 그걸 어떻게 구현했는지 알 필요도 없고!



OOP는 많은 Class 들이 다양한 의존 관계를 통해 문제를 해결한다. 만약 A Class가 B Class의 어떤 methods를 필요로 할 경우를 생각해보자.

A는 B의 전부를 원하는게 아니라, 필요한 어떤 method의 수행을 원한다. 그 method가 내부적으로 어떻게 구현되어 있는지도 관심이 없고 관심을 가져도 안된다.

B 역시 A가 필요로 하는 method에 대해 모든 걸 노출하고 싶지 않다. 호출 방법과 결과에 대한 기본적인 사항만 공유되기를 바란다. Interface는 여기에 딱 맞는 개념이다.

A는 자신의 Code에서 B type 대신 Interface Type으로 B 객체를 Reference하고 Interface에 있는 method만 호출하면 된다.

- I   m()
  - B

A needs B's m()

```java
// A's Code
// ...
I obj = new B();
obj.m();
```



interface는 자신만의 객체를 만들 수 없습니다.

또한, interface에 명시된 method에 대해서만 호출이 가능합니다.

```java
public static void main(String[] args) {
    Folder f = new Folder(); // 에러: 자신의 객체를 생성 불가
    Folder folder = new FolderPhone();
    
    folder.open();
    folder.fold();
    
    folder.getLargeSize(); // 에러: Folder에 선언된 method만 호출이 가능
}
```



Java에서는 Java Core Library에서 제공하는 것들 외에, 추가적으로 어떤 기능이 필요한 경우 대부분 .jar 파일 형태로 외부로부터 제공을 받는다.

이 때, 그 jar의 내부를 보면 알 수 없는 복잡한 구조외 .class 파일들로 구성된 것이 일반적이다.

보통 제공되는 API Document를 보고 어떤 Type으로 변수를 선언하고, 필요한 객체를 어떻게 얻고, 그 Type의 변수로 호출할 수 있는 method 들의 명세를 확인한다.

우리가 사용하는 그 Type이 특별한 경우를 제외하고는 모두 Interface로 선언되어 있다.

.jar를 제공할 때도 실제 구현 코드는 숨기고 제공할 기능만 Interface로 만들고 그 Interface만 노출시킨다.



### interface - default method

java 8 버전부터 default method라는 Body를 가진 method를 interface에 추가했다.

이로 인해 본래의 interface의 의미가 조금 퇴색되었다는 의견이 있다. 원래 있던 "추상 Class"의 역할도 애매해졌다. 하지만 개발자의 편의는 증대되었다.

```java
package com.jsh;
    
public interface Folder {
    public void fold();
    public void open();
    
    default public void powerOn() {
        System.out.println("Power On!");
    }
}
```



### 추상 Class (애매함)

추상 Class는 Class이나 추상 method를 가져, 스스로 객체를 만들지 못한다. abstract keyword를 class 앞에 붙여 표시한다. 추상 method 앞에 abstract keyword를 붙인다.

추상 Class를 상속받는 Class는 Interface를 구현하는 Class처럼 추상 method의 구현 의무를 가진다. 단일 상속 기준에 의해 추상 Class를 상속하면, 다른 Class를 상속할 수 없다.

```java
public abstract class AbstractFolder {
    public abstract void fold();
    public abstract void open();
    
    public void powerOn() {
        System.out.println("Power On!");
    }
}
```



추상 method가 많은 interface를 사용할 경우, Class가 직접 interface를 implements 할 경우 사용하지 않는 method까지 모두 구현 (dummy) 해야 하는 불편함이 있는데, 이를 해소하는 용도로도 많이 사용되었다. java API의 많은 추상 Class 대부분이 ~Adapter라는 이름을 가지고 있는데, 위의 용도로 사용되는 것들이다.

```java
interface ManyIF{
    // interface안의 method는 access modifier를 생략하면 public이 된다.
    // 또한 method를 override할 경우, 부모 class의 access modifier보다 visibility를 줄일 수 없다.
    void m1();
    void m2();
    void m3();
    void m4();
    void m5();
}

// 기존 .....................
class MyClass implements ManyIF{
    
    @Override
    public void m1() {}
    
    @Override
    public void m2() {}
    
    @Override
    public void m3() {}
    
    @Override
    public void m4() {}
    
    @Override
    public void m5() {}
}

// 추상 CLass 활용 ( ~Adapter )....................
abstract class ManyIFAdapter implements ManyIF{
    public void m1() {};
    public abstract void m2();
    public void m3() {};
    public void m4() {};
    public abstract void m5();
}

class MyClass extends ManyIFAdapter{
    @Override
    public void m2() {}
    
    @Override
    public void m5() {}
}
```



### instanceof 연산자

현재 Reference 되고 있는 객체가 상속 관계에서 어떤 객체인지를 확인할 수 있다.

instanceof 연산자는 참조될 수 있는 Type인지 확인하고 그 결과를 boolean 으로 return 한다.

```java
Folder f = new FolderblePhone();
if( f instanceof Folder ) {
    System.out.println("instanceof Folder");
}

if( f instanceof Object ) {
    System.out.println("instanceof Object");
}

if( f instanceof Phone ) {
    System.out.println("instanceof Phone");
}

Phone p = new Phone();

if( p instanceof FolderblePhone ) {
    System.out.println("instanceof FolderblePhone");
}
```



주의점: instanceof를 통해 상위, 하위 클래스의 각각에 대해 서로 다른 처리를 하려고 할 때의 코드이다. 어떤 문제가 있는가?

IOA > IOB > IOC

```java
public static void main(String[] args) {
    IOC ioc = new IOC();
    
    if( ioc instanceof IOA) {
        System.out.println("IOA");
    } else if( ioc instanceof IOB) {
        System.out.println("IOB");
    } else if( ioc instanceof IOC) {
        System.out.println("IOC");
    }
}
```

순서를 바꿔야 한다. 즉 ioc부터 검사해야한다. (하위 Class부터 검사해야 한다.)



### inner class - local

Class 안에서 다시 정의되는 Class를 말한다.

바깥 Class의 일부처럼 사용한다.

다른 Class에서 사용하지 않고 바깥 Class에서만 의미가 있을 경우 많이 사용한다.

별도의 객체가 만들어진다.

```java
package com.jsh;

public class OuterPhone {
    InnerChip ic;
    
    class InnerChip{
        String serialNo;
    }
    
    public OuterPhone(String serialNo) {
        ic = new InnerChip();
        ic.serialNo = serialNo;
    }
    public OuterPhone() {
        ic = new InnerChip();
    }
}
```

```java
package com.jsh;

public class PhoneTest {
    public static void main(String[] args) {
        OuterPhone op = new OuterPhone("12345");
        System.out.println(op.ic.serialNo);
    }
}
```



### inner class -anonymous

Class 안에서 이름이 없이 만들어지는 inner Class이다.

이름이 없으므로 재사용되지않고 한번 사용된다. 한번 사용된다는 건, 객체를 생성하는 코드에 바로 Class의 내용을 전달한다.

우선 AnonymousFolder 객체의 setFolder()의 parameter로 Folder interface를 구현한 객체가 필요하다. 

anonymous가 아닌 경우:

```java
public class AnonymousFolder {
    private Folder folder;
    
    public void setFolder(Folder folder) {
        this.folder = folder;
    }
    
    public Folder getFolder() {
        return this.folder;
    }
}
```

```java
class MyAnonyFolder implements Folder{
    @Override
    public void fold() { System.out.println("Anonymous-fold"); }
    
    @Override
    public void open() { System.out.println("Anonymous-open"); }
}
```

```java
public static void main(String[] args) {
    AnonymousFolder af = new AnonymousFolder();
    Folder anonymous = new MyAnonyFolder();
    af.setFolder(anonymous);
    
    af.getFolder().fold();
    af.getFolder().open();
}
```

anonymous 구현방식:

```java
public class AnonymousFolder {
    private Folder folder;
    
    public void setFolder(Folder folder) {
        this.folder = folder;
    }
    
    public Folder getFolder() {
        return this.folder;
    }
}
```

```java
public static void main(String[] args) {
    AnonymousFolder af = new AnonymousFolder();
    af.setFolder(new Folder() {
        
        @Override
        public void fold() { System.out.println("Anonymous-fold");}
        @Override
        public void open() { System.out.println("Anonymous-open");}
    });
    
    af.getFolder().fold();
    af.getFolder().open();
}
```



### inner class -static

Class 안에서 다시 정의되는 Class를 말한다.

다른 Class에서 사용하지 않고 바깥 Class에서만 의미가 있을 경우 많이 사용한다.

별도의 객체를 만들지 않고 사용할 수 있다.

(innerclass안에 있는 member variables이 유독 많으면 묶을 수 있는 변수들을 묶어서 static으로 정리해둔다.)

```java
package com.jsh;

public class OuterPhoneStatic {
    static class InnerChip{
        public static String serialNo = "12345";
    }
}
```

```java
package com.jsh;

public class PhoneTest {
    public static void main(String[] args) {
        System.out.println(OuterPhoneStatic.InnerChip.serialNo);
    }
}
```





### final class

더 이상 자식 Class를 만들지 않는다. extends가 불가능하다. (대표적으로 String Class)



### class 외 Usage Modifier

class가 아닌 member variables 및 method에 Usage Modifier가 사용되는 경우를 참고하시오.

- static
  - 별도의 객체를 생성하지 않고 바로 사용할 수 있다.
  - Class 이름으로 사용한다.
  - static method 안에서 this, super 를 사용할 수 없다.
  - static method는 재정의(overriding)할 수 없다.
  - ex) Math.random(), Integer.MAX_VALUE
- final
  - 상수가 되어, 더 이상 값을 변경할 수 없다.
  - final method는 재정의(overriding)할 수 없다.
  - ex) java.lang.String
- abstract
  - 객체를 만들 수 없다. 
  - abstract method는 body를 가지고 있지 않다.



###  static {} : static initializer

Class가 Memory에 Load된 직후에 수행되는 {}으로 수행 코드를 넣을 수 있다. ( 객체가 만들어지기 전. 메모리가 load 될 시점에 실행됨 )

Class 내부에서만 사용되어야 하는, 초기화 코드 용도로 많이 사용된다.

```java
package com.jsh;

public class StaticBlock {
    static {
        System.out.println("Static Block !!");
    }
    
    static final int MAX_SIZE = 10;
}
```

```java
package com.jsh;

public class StaticBlockTest {
    public static void main(String[] args) {
        //한 라인씩 수행
        StaticBlock sb;
        StaticBlock sb2 = new StaticBlock();
        StaticBlock sb3 = new StaticBlock(); // 이때는 실행이 안된다. 이미 메모리에 로드되엇기 때문.
        System.out.println(StaticBlock.MAX_SIZE);
    }
}
```





