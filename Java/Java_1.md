

## 자바의 특징

Write Once, Run Anywhere(WORA) 또는 Write Once, Run Everywhere(WORE)는 썬 마이크로시스템즈에 의해 만들어진 자바의 크로스/플랫폼에 의한 이익을 표현하기 위한 표어이다. 이상적으로, 이것은 자바가 어떤 장비에서도 개발될 수 있고, 표준 바이트코드로 컴파일되고, 자바 가상머신이 장착된 어떤 장비에서도 실행될 수 있음을 의미한다. 자바 가상머신 또는 칩, 장비 또는 소프트웨어 패키지에서의 자바 인터프리터의 설치는 산업 표준안이 되었다.



.java 파일이 컴파일을 거치면 .class파일 (바이트코드)로 된다.

Java Virtual Machine(JVM) : 기계는 다르지만 바이트코드를 다른 기계에서도 동일하게 실행시키게 하는 것.



Windows 10 기준 Zulu Open JDK 1.8을 설치한 폴더구조이다. 환경변수 JAVA_HOME에 맞는 값은?

- bin과 jre 폴더의 바로 윗 폴더에다가 설정한다.



### jre와 jdk의 차이점: 

JVM이 .class파일인 바이트코드를 실행시킨다. JVM은 jre에 있다. 완성된코드를 실행하기 위한 jre인 것이다. JDK는 jre + 컴파일러, 등 개발에 필요한 툴들이다.

deploy할 때는 jre만 설치되어있다.





다음 자바코드는 Hello, World를 출력하도록 C:\test 폴더에 작성되었다. 동일 폴더에 compile한 .class 파일을 package 구조로 만들고자 한다. CLI compile & run을 수행하시오.

```java
package com.temp;
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!!");
    }
}
```

1. compile : C:\test

   - ```
     javac -d . HelloWorld.java
     ```

     

2. run : C:\test

   - ```
     java com.temp.HelloWorld
     ```

     



### IDE의 장점

JAVA 프로그램을 개발할 때, 일반 Editor(메모장, notepad++ 등) 을 사용하면, 어떤 점이 불편한지, 개선하기위해 eclipse같은 IDE를사용하면 어떤 장점이 있는지 기술하시오.

- 자동완성, 문법체크
- Coding ->  Compile -> Run -> Build -> Deploy
- 코딩하고 컴파일하고 런하는 그런 반복하는 과정을 편하게 해준다.
- 빌드 : 하나의 실행모듈로 묶어주는 과정
- 디플로이 : 서비스
- 개발 및 적용 전체 과정을 하나의 개발 툴로 편리하고, 일관성 있게 관리할 수 있다.





### Java의 Primitive Type(기본 타입)

- 논리형
  - type : boolean
    - bit 수 : 1개 (무조건 1은 아니다. 구현에 따라 여러 개가 될 수 있다.)
    - 값 : true / false
- 정수형
  - type : byte
    - bit 수 : 8개
    - 값 : -2^7 ~ 2^7-1 ( -128 ~ 127 )
  - type : short (퍼포먼스 측면에서 int가 더 좋기 때문에 메모리가 부족하지 않는 이상 int를 쓴다.)
    - bit 수 : 16개
    - 값 : -2^15 ~ 2^15-1 (-32768 ~ 32767)
  - type : **int** (기본타입)
    - bit 수 : 32개
    - 값 : -2^31 ~ 2^31-1 (-2147483648 ~ 2147483647)
  - type : long
    - bit 수 : 64개
    - 값 : -2^63 ~ 2^63-1 (-9223372036854775808 ~ 9223372036854775807)
- 실수형 (math 패키지의 BigDecimel을 써야 소수점 연산을 정확히 할 수 있다. float, double은 소숫점 연산이 정확하지 않다.)
  - type : float
    - bit 수 : 32개
  - type : **double** (기본타입)
    - bit 수 : 64개
- 문자형
  - type : char
    - bit 수 : 16개
    - 값 : \u0000 ~ \uffff (0 ~ 2^15-1 )





### Type이란?

- Machine의 Memory Allocation & Management
- Primitive Type : 미리 정해진 크기의 Memory Size로 표현
- Reference Type : 미리 정해질 수 없는 데이터의 표현



### Variable 이란?

- Type 별로 선언 (declaration)

- 값(value)을 할당(assign) 후 변경 및 사용

- Local Variable은 Default Value X  (멤버변수, 스태틱 변수는 Default Value가 있다.)

- long, float, double type value

  | long   | I, L | long value= 19873343L;                 |
  | ------ | ---- | -------------------------------------- |
  | float  | f, F | float f = 13.579F;                     |
  | double | d, D | double d = 13.579d; <br />// 생략 가능 |



문자열 선언 할 때

```java
String s = "Hello";
String s = new String("Hello");  // 위의 것과 차이가 있다.
```



주석:

- inline comment : //
- 여러개 주석 : /* */
- javadoc 를 통해 html 문서를 만들 수 있다. : /** */



예시

```java
public static void main(String[] args) {
    int k = 66;
    char c = (char) k;
    System.out.println(c);  // B
    
    c = 'A';
    k = c;
    System.out.println(k);  // 65
    
    int i = 10 / 3;
    System.out.println(i);  // 3
    
    float f = 10 / 3;
    System.out.println(f);  // 3.0
    
    float f2 = 10f / 3F;
    System.out.println(f2); // 3.3333333
    
    double d = 10d / 3D;
    System.out.println(d); // 3.3333333333333335
    
    System.out.println( ( 10 / 3 ) * 3);  // 9
    
    int i = 10;
    System.out.println( ++(i-2) ); // ++연산자의 뒤에는 변수만 붙을 수 있다.
}
```



### 주요 연산자

- 사칙연산 : +, -, *, /(나누기 몫)
- 나눈 나머지: %
- 값 증가, 감소 : ++, --
- 논리 부정: !
- 값 비교 : ==, !=
- 대소 : >, <, >=, <=
- 논리 AND, OR : &&, ||, &, |
- Bit : <<, >>, >>>, ~, &, |, ^(달라야 1)
- 삼항 : ? :





### 랜덤 수 만들기

```java
public static void main(String[] args) {
    int N = 6;
    
    // Math.random()
    System.out.printf( "%3d", (int) (Math.random()*N) + 1 );
    
    // java.util.Random
    java.util.Random generator = new java.util.Random();
    System.out.printf( "%3d", generator.nextInt(N) + 1 );
    
    // %
    System.out.printf( "%3d", ( (int) (Math.random()*100) % N ) + 1 );
    
}
```





### 조건문

if ( ) 의 괄호 안에 들어갈 수 있는 값

- 변수 : boolean b;
- 비교식 : x >= y
- Method Call : isEven()



switch ( ) 의 괄호 안에 들어갈 수 있는 값

- 변수 : byte, short, char, int x;
- Enum : Day.MONDAY
- Class Object : Byte, Short, Character, Integer, String (Java 7버전)
- Method Call : getNumber()



### 논리연산자 - &, | vs &&, ||

&, | : 끝까지 간다.

A & B & C : A,B,C 모두 판단

A | B | C : A, B, C 모두 판단



&&, || : 판단하면 멈춘다.

A && B && C : A, B, C 순으로 판단, 하나라도 거짓이면 중단

A || B || C : A, B, C 순으로 판단, 하나라도 참이면 중단





### 삼항연산자

변수 = (수식)  ? T : F

```java
public static void main(String[] args) {
    int N = 6;;
    boolean isEven = ( N % 2 == 0 ) ? true : false;
    N = ( ! isEven ) ? 10 : 20;
    System.out.println(N); // 20
}
```





주사위를 두번 던져서 연속적으로 짝수 또는 홀수가 나오면 "A"를, 그렇지 않으면 "B"를 출력하는 코드를 작성하시오

```java
public static void main(String[] args) {
    int N = 6;

    int result = (int) (Math.random()*N) + 1;
    System.out.println(result);
    boolean isEven = false;
    if ( result % 2 == 0 ) {
        isEven = true;
    }

    result = (int) (Math.random()*N) + 1;
    System.out.println(result);
    if ( result % 2 == 0 ) {
        if( isEven ) {
            System.out.println("A");
        } else {
            System.out.println("B");
        }
    } else if ( result % 2 == 1 ) {
        if( isEven ) {
            System.out.println("B");
        } else {
            System.out.println("A");
        }
    }    
}
```



java언어의 이해에 의한 개선

```java
int N = 6;

int result = (int) (Math.random()*N) + 1;
System.out.println(result);
boolean isEven = ( result % 2 == 0 ) ? true : false;

result = (int) (Math.random()*N) + 1;
System.out.println(result);
boolean isSame = ( ( result % 2 == 0 ) == isEven ) ? true : false;

if( isSame) {
    System.out.println("A");
} else {
    System.out.println("B");
}
```



주사위를 두 번 던져서 연속적으로 짝수 또는 홀수가 나오면 "A"를, 그렇지 않으면 "B"를 출력하는 코드를 작성하기. ( 수학적 개념에 의한 개선 )

```java
int N = 6;

int result1 = (int) (Math.random()*N) + 1;
System.out.println(result1);

int result2 = (int) (Math.random()*N) + 1;
System.out.println(result2);

if( ( result1 + result2 ) % 2 == 0 ) {
    System.out.println("A");
} else {
    System.out.println("B");
}
```



### 반복문

for ( **___** ; **___** ; **___** )

변수 초기화, 반복 조건, 증감식

int i = 0; i < 10; i++

```java
for ( int i = 0; i < 10; i++ ) {
    // 코드
    break;
}
```



while

```java
int i = 0;

// while문
while ( i< 100 ) {
    result += (int) (Math.random()*N) + 1;
    i++;
}

i = 0;
// do-while 문
do {
    result += (int) (Math.random()*N) + 1;
    i++;
}while( i<100 );

```





### Array 만들기

- int Type 기준으로 배열(Array) 만들기

  | 선언             | 생성                    | 개별 요소 값 할당 |
  | ---------------- | ----------------------- | ----------------- |
  | int [] intArray; | intArray = new int[5];  | intArray[0] = 3;  |
  | int intArray []; | intArray = new int[10]; | intArray[2] = 7;  |

  

- Array는 Object <- new keyword 사용

- Array는 index ( Zero Based) 를 이용하여, 개별 값 Access

- Array 객체의 length Attribute로 길이를 포현

- Array요소 중 값을 할당받지 않은 요소는 default value 값을 가진다. ( 0 )





System.arraycopy : api 제공하는 배열 복사 method

arraycopy(Object src, int srcPos, Object dest, int destPos, int length)



min, max

```java
in[] intArray = { 3, 27, 13, 8, 235, 7, 22, 9, 435, 31, 54 };

int min = Integer.MAX_VALUE;
int max = Integer.MIN_VALUE;

for (int i=0; i<intArray.length; i++) {
    min = Math.min(min, intArray[i]);
    max = Math.max(max, intArray[i]);
    
}
System.out.println("min"+min + "max"+max);
```



1~9 범위의 숫자를 가진 리스트의 숫자별 사용횟수 출력하기

```java
int[] intArray = { 3, 7, 2, 5, 7, 7, 9, 2, 8, 1, 1, 5, 3};
int[] user = new int[10];

for (int i = 0; i< intArray.length; i++) {
    used[intArray[i]]++;
}

System.out.println(Array.toString(user));
```



1~20까지 숫자를 사용한 배열에서 사용되지 않은 숫자 출력

```java
int[] intArray = {
    1, 3, 4, 7, 8, 10, 12, 15, 16, 17, 18
};

int[] used = new int[21];

for (int i; i<intArray.length; i++) {
    used[intArray[i]]++;
}

for (int i=1; i < used.length; i++) {
    if( used[i] == 0) {
        System.out.print(i + " ");
    }
}
```



4x3 = 12개의 영역으로 나누어 'A', 'B', 'C'로 등급을 나누려고 한다. 이를 Array를 이용하여 표현하고, 표 대로 출력하는 코드를 작성하시오.

```java
char[][] grid = new char[4][3];

grid[0][0] = 'C'; grid[0][1] = 'A'; grid[0][2] = 'A';
grid[1][0] = 'C'; grid[1][1] = 'C'; grid[1][2] = 'B';
grid[2][0] = 'B'; grid[2][1] = 'A'; grid[2][2] = 'C';
grid[3][0] = 'C'; grid[3][1] = 'C'; grid[3][2] = 'C';

for( int i=0; i<grid.length; i++) {
    for( int j=0; j<grid[i].length; j++) {
        System.out.print(grid[i][j]);
    }
    System.out.println();
}
```



2차원 배열 만들기

선언 : 

```java
int [][] intArray;
int intArray [][];
int [] intArray [];
```

생성 :

```java
intArray = new int[4][3];
```

할당 :

```java
intArray[0][2] = 3;
```



int Type 기준으로 4x3 배열 (Array)과 값을 동시에 만들기

```java
// 선언, 생성, 할당을 동시에
int [][] intArray = { {0,1,2}, {0,1,2}, {0,1,2}, {0,1,2} }; // int intArray [][], int [] intArray []
// Array는 {} 안에 , 과 {}을 이용해서 선언과 동시에 값을 할당
// Array Constants 는 동일 변수에 새로운 배열 할당 불가
```



int Type 기준으로 4x? 배열 만들기

```java
// 1, 2차 선언 / 1차 생성
int [][] intArray = new int[4][];
```



1차 Array만 생성 후, 필요에 따라 2차 배열을 생성함

```java
intArray[1] = new int[2];
intArray[0] = new int[4];
intArray[2] = {1, 2, 3}; // 이 줄은 에러가 뜸. 상수형태로는 불가능
```



5x5의 2차원 배열에서 각 항목의 숫자 중 3의 배수의 수와 합을 구하시오.

```java
int[][] grid = {
    {2, 3, 1, 4, 7},
    {8, 13, 3, 33, 1},
    {7, 4, 5, 80, 12},
    {17, 9, 11, 5, 4},
    {4, 5, 91, 27, 7}
};

int count = 0;
int sum = 0;

for( int i=0; i<grid.length; i++ ) {
    for( int j=0; j<grid[i].length; j++ ) {
        if( grid[i][j] % 3 == 0) {
            count++;
            sum += grid[i][j];
        }
    }
}

System.out.println(count);
System.out.println(sum);
```



### java.util.Scanner

- .hasNext()
- .next()
- .hasNextXXX()
- .nextXXX()
- .nextLine()
- .next().charAt(0)
- InputStreamReader와 BufferedReader를 이용하면 더욱 빠르게 사용자의 입력을 처리할 수 있다.



Scanner를 이용해서 사용자의 4x4의 2차원 배열 입력으로 배열을 구성하고 출력하시오.

```java
Scanner sc = new Scanner(System.in);
char[][] grid = new char[4][4];

for( int i=0; i<4; i++ )
    for( int j=0; j<4; j++ )
        grid[i][j] = sc.next().charAt(0);

for( int i=0; i<4; i++ ) {
    for( int j=0; j<4; j++ ) {
        System.out.print(grid[i][j]);
    }
    System.out.println();
}
sc.close();
```



X로 표시된 항목의 좌우 숫자의 합을 구하는 코드를 작성하시오. 사용여부관리, 사방탐색

```java
Scanner sc = new Scanner(System.in);
char[][] grid = new char[4][4];
boolean[][] used = new boolean[4][4];

int sum = 0;

for( int i=0; i<4; i++ )
    for( int j=0; j<4; j++ )
        grid[i][j] = sc.next().charAt(0);

for( int i=0; i<4; i++ ) {
    for( int j=0; j<4; j++ ) {
        if( grid[i][j] == 'X') {
            if(i-1 >= 0 && grid[i-1][j] != 'X' && ! used[i-1][j]) {
                sum += grid[i-1][j] - '0';
                used[i-1][j] = true;
            }
            if(i+1 < 4 && grid[i+1][j] != 'X' && ! used[i+1][j]) {
                sum += grid[i+1][j] - '0';
                used[i+1][j] = true;
            }
            if(j-1 >= 0 && grid[i][j-1] != 'X' && ! used[i][j-1]) {
                sum += grid[i][j-1] - '0';
                used[i][j-1] = true;
            }
            if(j+1 < 4 && grid[i][j+1] != 'X' && ! used[i][j+1]) {
                sum += grid[i][j+1] - '0';
                used[i][j+1] = true;
            }
        }
    }
}
System.out.println(sum);
sc.close();
```

