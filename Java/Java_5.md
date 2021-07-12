### <> Generic

객체를 여러 개 저장해야 할 경우가 많다.

우선 Array를 생각할 수 있는데, 속도는 빠르지만, index 제어 등 불편한 부분이 많다.

Collections API를 이용하면, 조금 더 편한 방법으로 객체의 집합을 관리할 수 있다.

이러한 Collection을 포함하여, Java에서는 무언가 담는 Container를 만들 때, 담을 객체의 Type을 Dynamic 하게 지정할 수 있는 방법을 제공한다.

Java 1.5 부터는 Generic( <> )을 도입해서, Class Code 작성 시점에 임의의 타입(가령 `<T>`을 사용하도록 하고, 그 Class를 사용하는 Code에서 `<T>` 대신 실제 사용하는 Type ( 가령 `<String>`)을 사용할 수 있도록 한다.

StringContainer는 만드는 시점에 지정된 String Type만 사용할 수 있지만, GenericContainer는 사용 시점에 다양한 Type의 객체를 담을 수 있다.

```java
public class StringContainer {
    private String obj;
    
    public StringContainer() {}
    
    public String getObj() { return obj; }
    
    public void setObj(String t) { obj = t; }
}
```

```java
public class GenericContainer<T> {
    private T obj;
    
    public GenericContainer(){}
    
    public T getObj() { return obj; }
    
    public void setObj(T t) { obj = t; }
}
```

```java
package com.jsh;

public class ContainerTest {
    public static void main(String[] args) {
        GenericContainer<Integer> gc1 = new GenericContainer<> ();
        gc1.setObj(3);
        
        GenericContainer<String> gc2 = new GenericContainer<> ();
        gc2.setObj("Generic");
    }
}
```



## Collections API

Array도 무언가를 담는 역할을 수행할 수 있지만, index 관리 등으로 조금 사용하기 어렵기 때문에 보다, Java에서는 조금 더 편리한 Container 역할을 수행하는 다양한 Class 및 Interface를 제공한다.

( java.util.Collection )



Collections

- List (순서O, 중복 허용)
  - LinkedList
  - Stack
  - ArrayList
- Set (순서 X, 중복 X)
  - HashSet
  - TreeSet
- Queue (순서 O, 중복 O)
  - LinkedList
  - PriorityQueue
- Map 계열: Key, Value 쌍. ( 순서 X , key 중복 X, value 중복 O )
  - HashMap
  - TreeMap
  - HashTable



java.util.Collection interface에는 많은 method가 있다.

- 자주 사용하는 method들
  - `boolean add(E e)`
  - `boolean remove(Object o)`
  - `boolean isEmpty()`
  - `void clear()`
  - `int size()`
  - `boolean contains(Object o)`
  - `Object[] toArray()`
  - `Iterator<E> iterator()`



## Iterator (interface)

iterator의 methods

- hasNext()

- next()
