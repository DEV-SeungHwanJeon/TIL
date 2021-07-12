# Thread/Network



## Concurrent vs Parallel

> 혼용해서 사용하는 경우가 많다.



Concurrent:

- 어떤 job이 여러 개 동시에 처리된다는 개념
- ex. 브라우저 여러 개를 띄워서 동시에 여러 Site를 접속, 엑셀 문서를 여러 개 동시에 편집하는 것, 등



Parallel : 

- 어떤 하나의 job을 쪼개서 여러 Sub-Job으로 나누고, 이를 물리적으로 분리된 구조에서 동시에 처리해서 완성하는 개념. 
- ex. CPU의 Core 여러 개를 표현하는 것, 등



용어 정리

- 프로세스 (Process)
  - 개별적으로 동작하는 프로그램
  - Browser, Eclipse, 등
- 쓰레드 (Thread)
  - 프로세스를 구성하는 독립적인 세부 실행 단위(Unit)
- 멀티 프로세스 (Multi-Process)
  - 여러 개의 프로세스를 동시에 수행
- 멀티 쓰레드 (Multi-Thread)
  - 한 프로세스에서 여러 개의 쓰레드를 동시에 수행



## Thread 사용하기

Java에서 동시에 어떤 작업을 여러 개 실행하기 위해서는 그 작업을 Thread로 만들어서 실행한다.

만약 A라는 작업을 여러 개 만들어서 동시에 실행한다면 A를 Thread로 만들어서 실행한다.

5개의 A작업을 Thread로 만들어서 Concurrent하게 실행하는 것과 그렇지 않은 경우를 비교하면 다음과 같다.

Thread를 사용하지 않는 경우: A - A - A - A - A

```java
public class CoronaWithoutThreadTest {
    public static void main(String[] args) {
        for( int t=0; t<1000; t++) {
            System.out.println("#"+t+"is Started");
            for( int i=0; i<1000; i++) {
                int j = i*100;
            }
            System.out.println(t);
        }
    }
}
```



Thread를 사용하는 경우: 병렬 A 5개

**Java에서 Thread를 만드는 방법 2가지**

- runnable Interface를 implements 하는 Class를 만들고 Runnable Interface에 있는 추상 method run()을 구현하고, 그 안에 Job 코드를 넣는다. ( CoronaRunnable Class는 아직 Thread가 아니다 )

  ```java
  public class CoronaRunnable implements Runnable {
      int num;
      
      public CoronaRunnable(int num) {
          this.num = num;
      }
      
      @Override
      public void run() {
          System.out.println("#"+num+"is Started");
          for( int i=0; i<10000; i++) {
              int j = i*100;
          }
          System.out.println(num);
      }
  }
  ```

  CoronaRunnable Class를 이용해서 Thread를 만들 수 있다. Thread 객체를 만들 때, 그 생성자의 Parameter로 CoronaRunnable 객체를 전달한다.

  Thread 객체를 실행할 때는 start()를 호출한다 (run() 이 아님)

  ```java
  // main
  public class CoronaThreadTest {
      public static void main(String[] args) {
          for( int t=0; t<1000; t++) {
              CoronaRunnable cr = new CoronaRunnable(t);
              Thread thread = new Thread(cr);
              thread.start();
          }
      }
  }
  ```

- Thread Class에 있는 run method를 overriding 한다. run method 안에 Job 내용을 넣는 것은 동일하다. 이 경우 CoronaThread는 자체가 Thread이다.

  ```java
  public class CoronaThread extends Thread {
      int num;
      
      public CoronaThread(int num) {
          this.num = num;
      }
      
      @Override
      public void run() {
          
          System.out.println("#"+num+"is Started");
          for( int i=0; i<10000; i++) {
              int j = i*100;
          }
          System.out.println(num);
      }
  }
  ```

  Thread를 만든 후 실행하는 코드를 보면 CoronaThread 객체를 만들고 바로 start() method를 호출한다. CoronaThread 자체가 이미 Thread이므로 별도의 Thread를 만들 필요가 없다.

  ```java
  public class CoronaThreadTest {
      public static void main(String[] args) {
          for( int t=0; t<1000; t++ ) {
              CoronaThread thread = new CoronaThread(t);
              thread.start();
          }
      }
  }
  ```



**Thread 실행**

main()가 실행되면 Main Thread가 동작한다. 다른 Thread가 실행되지 않으면 Main Thread하나로 프로그램이 실행된다.

만약 또 다른 Thread가 실행되면 Main Thread와 다른 Thread가 동시에 실행된다. (경쟁)

- main()은 start() 시킨 모든 Thread들이 종료된 후에 종료될까?
  - 답: 아니다. 하지만 main()가 종료되어도 실행 중인 다른 Thread가 모두 종료되어야 JVM의 실행이 종료된다.
- Thread 객체를 한 개만 만들고, start() method를 두번 호출하면 어떻게 될까?
  - 답: 오류가 발생한다. Thread는 내부적으로 자신의 상태를 관리하는데, 이 상태의 오루가 발생하여 Exception을 발생시키고 그 Thread는 종료된다.
- Thread 안에서 또 다른 Thread를 실행시킬 수 있을까?
  - 답: 가능하다. 단, 공유 자원(변수/ 자료구조) 등에 대한 각별한 주의가 필요하다.



**Thread Class sleep() method**

Thread.sleep() method는 static method 이다.

호출할 때, mili-second(0.001초) 단위의 시간을 Parameter로 전달하면, Thread.sleep()을 호출한 Thread는 해당 시간만큼 실행을 중지하였다가 다시 실행이 된다. (0.1초 동안 진행중인 Job을 중지했다가 다시 실행한다면 Thread.sleep(100); 으로 호출하면 된다.)

```java
public class CoronaThreadTest {
    public static void main(String[] args) {
        System.out.println("before Thread.sleep()");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("after Thread.sleep()");
    }
}
```



이번엔 CoronaThread 중 번호가 짝수인 Thread 들은 Job을 수행하는 중간에 3초 동안 실행을 중지했다가 다시 시작하는 코드로 테스트를 해보자.

CoronaThread 및 CoronaThreadTest Class를 수정한 후에 실행해서 결과를 확인해 보자.

```java
public class CoronaThread extends Thread {
    int num;
    
    public CoronaThread(int num) {
        this.num = num;
    }
    
    @Override
    public void run() {
        
        for( int i=0; i<10000; i++) {
            if (i == 5000 && num %2 == 0) {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e){
                    e.printStackTrace();
                }
            }
        }
        System.out.println(num);
    }
}
```

main

```java
public class CoronaThreadTest {
    public static void main(String[] args) {
        for( int t=0; t<1000; t++) {
            CoronaThread thread = new CoronaThread(t);
            thread.start();
        }
    }
}
```

짝수 thread들이 늦게 실행된다.



**Thread Class join() method**

Thread 객체는 특정 Thread 객체가 종료될 때까지 수행하던 Job을 멈추고 특정 Thread 객체가 종료되면 다시 Job을 수행할 수 있다.

만약, A Thread 객체 a의 종료 시까지 대기하려면 자신 Thread의 실행 코드에 a.join() 형태로 method를 호출한다.

```java
public static void main(String[] args) {
    System.out.println("Main Thread Start!!");
    CoronaThread thread = new CoronaThread(2020);
    thread.start();
    
    try {
        thread.join();
    } catch (InterruptedException a) {
        e.printStackTrace();
    }
    
    System.out.println("Main Thread End!!");
}
```

```java
@Override
public void run() {
    
    try {
        Thread.sleep(2000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    
    System.out.println(num);
}
```



**Thread - 상태**

Thread 객체는 start() 가 호출되면 바로 실행되지 않는다.

모든 Thread는 기본적으로 서로 경쟁한다.

전체 Thread는 실행 -> 종료까지 다양한 상태로 존재하게 되고, JVM은 이 상태를 이용해서 전체 Thread의 실행을 제어한다.



**Thread Class interrupt() method**

대기 POOL에 있는 특정 Thread 객체를 방해(Interrupt)하여 다시 Runnable 상태로 이동시킬 수 있다.

interrupt()를 통해 가능한데, 특정 Thread 객체의 interrupt()를 호출하면 된다.

```java
@Override
public void run() {
    try {
        System.out.println("thread try start");
        Thread.sleep(5000);
        System.out.println("thread try end");
    } catch (InterruptedException e) {
        System.out.println("thread interrupted raised");
    }
    System.out.println(num);
}
```



```java
public class CoronaThreadInterruptTest {
    public static void main(String[] args) {
        CoronaThread t = new CoronaThread(2020);
        t.start();
        // t.interrupt();
        
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Main Thread End!!");
    }
}
```



**Thread Class yield() method**

Thread.yield() 는 static method 입니다.

Thread의 Job 수행 중 지금 당장 Job 수행할 필요가 없을 경우 호출하여, Runnable 상태에 있는 다른 Thread들에게 수행을 양보한다.

단, 이 경우는 Wait 상태로 가지 않고, Runnable 상태로 이동하여 언제든 다시 경쟁을 이기고 Running 상태가 되면, yield() 호출 이후 코드를 이어서 수행한다.



**Thread Class synchronized() method**

여러 Thread 들이 공유하는 자원에 대한 관리는 필수이다.

어떤 Thread가 자원에 대한 중요한 Job을 실행할 때 그 Job이 완료되기 전에 다른 Thread가 접근해서 다른 Job을 실행하게 되면 심각한 오류가 발생할 수 있다.

Thread가 공유자원에 대해 처리하는 중요 Job을 수행하는 경우, 한 개의 방해받지 않는 Job으로 처리하여 다른 Thread의 접근을 제한하는 것을 동기화(Synchronized)라고 한다.



Thread의 동기화(Synchronized)를 구현하는 방법 2가지

- 공유 자원을 사용하는 중요 Job을 수행하는 Method 자체를 synchronized로 만들기
  - 이 경우 Method 수행 전체가 한 개의 방해받지 않는 단위로 만들어져서 시작 -> 종료까지 다른 Thread의 자원 접근을 막을 수 있다. 이 때, 해당 Thread가 공유 자원에 대한 Lock을 소유했다고 한다. Synchronized Job이 끝나면 Lock을 반납한다.
- Method 내 특정 블럭(Block)을 지정해서 synchronized로 처리할 수도 있다. Method 전체를 동기화하는 것보다 효과적일 수 있다.



sync가 안된 예제

```java
public class Cell {
    public int power = 300;
}
```

```java
public class MedicineThread extends Thread {
    Cell cell;
    
    public MedicineThread(Cell cell) {
        this.cell = cell;
    }
    
    @Override
    public void run() {
        if(cell.power < 500) {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            cell.power = cell.power + 100;
        }
        System.out.println("Medicine Thread: "+cell.power);
    }
}
```



Medicine Thread 의 run() method 안에 synchronized Block을 사용한다.

Synchronized(cell) 처럼 괄호 안에 공유 자원을 전달한다.

이후, 동일하게 MedicineThreadSyncTest를 수행한다.

```java
public class MedicineThrea excends Thread{
    Cell cell;
    
    public MedicineThread(Cell cell) {
        this.cell = cell;
    }
    
    @Override
    public void run() {
        synchronized(cell) {
            if(cell.power < 500) {
                try {
                    Thread.sleep(500);
                } catch(InterruptedException e) {
                    e.printStackTrace();
                }
                cell.power = cell.power + 100;
            }
            System.out.println(cell.power);
        }
    }
}
```



**DeadLock**

동시에 수행되는 Thread 들이 각각 서로 다른 공유자원을 Synchronized로 확보한 후, 서로 소유한 공유자원을 추가로 요청하는 경우를 말한다.

주로, 중첩된 synchronized 구조에서 발생한다. 그러한 구조가 발생하지 않도록 Thread 를 구성하고 필요한 자원은 사용 후 즉시 반납할 수 있도록 synchronized block을 최대한 작게 구성한다.



wait() - notify() - notifyAll()

wait()

Thread 들의 공유 자원에 대한 더욱 개선된 구조를 만들 수 있다.

어떤 Thread가 공유 자원에 대한 Lock을 소유하더라도, 그 시점에 바로 중요 Job을 수행할 수 없으면, Lock을 잠시 반납하면 된다. 단, 필요한 Job을 완성하지 않았기 때문에 기다렸다가 다시 수행하러 한다.

특정 자원에 대해 Lock을 반납하는 경우, wait() method를 호출함으로써 가능하다.

notify(), notifyAll()

어떤 Thread T2가 공유 자원 A에 필요한 작업을 완료하면, 해당 자원을 기다리면서 Waiting Pool 에서 대기중인 다른 Thread에게 이제 A 차원이 다시 준비되었음을 알릴 수 있다.

notify() 또는 notifyAll()을 통해서 가능하다. notify()는 Waiting Pool에서 한 개의 Thread에게만, notifyAll()은 모든 Thread에게 알린다.

알림을 받은 Thread 들은 경쟁하면서 기회를 얻게 된다.



wait()와 notify(), notifyAll()은 상호 보완적인 구조이다.

공유 자원이 필요한 Thread 중 준비가 된 Thread 가 우선적으로 처리되도록 하면서, 기다리는 Thread 에게 자원의 상태에 따라 통지해주어 전체적인 Thread의 수행을 원할하게 돕는다.





