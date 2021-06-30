### 상속 (Inheritance)

> 대표적인 OOP의 특징

어떤 Class B 가 다른 Class A의 member variables와 method를 그대로 받으면 B가 A를 상속받는다 라고 한다. A와 B의 관계를 부모-자식 또는 상위-하위 개념으로 많이 설명한다.

하나의 부모는 여러 자식을 가질 수 있고, 부모는 또 다른 자식이 될 수도 있다. (부모도 누군가의 자식이 될 수 있다)

어떤 Class가 아무런 상속을 받지 않은 경우, 자동으로 java.lang.Object Class가 그 Class의 부모가 된다.



Java Code로 상속 관계를 표현하려면 extends keyword를 사용한다.

Java는 단일 상속만 가능하다.

- 오직 한 개의 Class만 extends 가능.
- 다중 상속은 불가능하지만 대신 java는 interface를 활용한다.

```java
// B class extends A ( A를 상속받는 B )
public class B extends A {
    
}
```





### this vs super

this : 자기 자신

super : 부모 객체를 의미한다.

만약, 부모 객체에 중복된 member variables 가 없다면 this를 이용해서 super에 접근할 수도 있다. 하지만 추천 되지 않는데, 이유는 this를 사용하게되면 나중에 자식 Class에 동일한 member variable이 추가되면 엉뚱한 변수를 가리키게 되기 때문이다.



