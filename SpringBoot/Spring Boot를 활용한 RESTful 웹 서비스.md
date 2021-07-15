# Spring Boot, Maria DB를 활용한 RESTful 웹 서비스



- REST API 디자인 핵심 : URI는 정보의 자원을 표현해야 하며 자원에 대한 행위는 HTTP Method로 표현해야 한다.
- URI는 정보의 자원을 표현해야 한다. (자원 이름은 동사보다는 명사를 사용)



https://github.com/leejongcheol/springbootrest



- RESTful 웹 서비스는 JSON, XML 및 기타 미디어 유형을 생성하고 활용할 수 있다.

- Spring이나 Spring Boot 기반의 RESTful 웹 서비스를 만드려면 @RestController로 스프링 컨트롤러를 만들어야 한다.

- Spring Boot 애플리케이션에서 RESTful 웹 서비스를 사용하려면 빌드 파일에 spring-boot-starter-web을 포함시켜야 한다.

  - ```properties
    <dependency>
    	<groupId>org.springframework.boot</groupId>
    	<artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    ```

  - 위 디펜던시(Maven 종속성)는 기본적으로 Jackson JSON 라이브러리(jackson-databind)를 가지고 오도록 하며 Spring Boot REST는 클래스 패스에서 jackson-databind를 감지하기 때문에 기본적으로 JSON 응답을 제공한다.

  - Spring Boot REST에서 XML 응답을 지원하려면 spring-boot-starter-web 과 함께 jackson-dataformat-xml 라이브러리를 제공해야 한다.

  - ```properties
    <dependency>
    	<groupId>com.fasterxml.jackson.dataformat</groupId>
    	<artifactId>jackson-dataformat-xml</artifactId>
    	<version>2.9.4</version>
    </dependency>
    ```

- Maria DB(MySQL)을 사용하며 JPA CrudRepository를 사용하여 DB를 조작하는 실습 예제로 JSON 응답과 XML 응답을 사용했다.





### project 생성

- pom.xml :
  - spring-boot-starter-parent : 종속성 관리를 위한 부모 POM
  - spring-boot-starter-web : 웹구축을 위한 스타터, REST 애플리케이션, Tomcat 서버를 기본



src/main/java/com.example.bootrest.model 폴더에 Emp.java 생성

```java
package com.example.bootrest.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // lombok에서 @Getter, @Setter, @RequiredArgsConstructor, @ToString, @EqualsAndHashCode 를 한번에 만들어주세요
@NoArgsConstructor // 기본생성자 만들어주세요
@AllArgsConstructor // 모든 파라미터로 생성자 만들어주세요
@Entity //  // 서버 실행 시에 Object Relation Mapping이 됨. ORM을 가능하게 해주는 것 Object Relation Mapping
@Table(name="emp")
public class Emp{
    private static final long serialVersionUID = 1L;
    
    @Id  //pk
    @GeneratedValue(strategy = GenerationType.IDENTITY) //자동증가
    private Integer empno;
    
    private String ename;
    
    private Integer sal;
}
```



src/main/java/com.example.bootrest.repository 폴더에 EmpRepository.java 생성. 

```java
package com.example.bootrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bootrest.model.Emp

public interface EmpRepository extends JpaRepository<T, ID> {
    List<Emp> findBySalBetween(int sal1, int sal2); 
    // 자동으로 JPA Hibernate가 sql 쿼리 문을 만들어준다.
    // 쿼리메소드, 메소드 이름으로 자동으로 SELECT 쿼리 생성
    // SELECT emp0_.empno as empno1_0_, emp0_.ename as ename2_0_, emp0_.sal as sal3_0_
    // from emp emp0_
    // where emp0_.sal between ? and ?
}
```



src/main/java/com.example.bootrest.service폴더에 인터페이스 하나, 구현체 하나 만들어보자.

- EmpService.java 생성. 

  - ```java
    package com.example.bootrest.service;
    
    import java.util.List;
    
    public interface EmpService {
        List<Emp> findAll(); // 모든 사원 주세요
        
        Emp findById(int empno); // 사원 Id로 사원 하나 주세요
        
        void deleteById(int empno); // 사원 Id로 사원 삭제해주세요
        
        Emp save(Emp emp); // 사원 DB에 저장해주세요
        
        List<Emp> findBySalBetween(int sal1, int sal2); // 아까 만들었던 쿼리 메소드. 
        
        void updateById(int empno, Emp emp); // 사번의 데이터를 emp의 데이터로 변경해주세요.
    }
    ```

- EmpServiceImpl.java 생성. (구현체)

  - ```java
    package com.example.bootrest.service;
    
    @Service // 구현체
    public class EmpServiceimpl implements EmpService {
        // EmpService 를 implements 하고나면 Override 어노테이션과 함께 메소드들이 자동생성된다.
        @Autowired // 객체 참조
        private EmpRepository empRepository;
        
        @Override
        public List<Emp> findAll() {
            List<Emp> emps = new ArragList<>();
            empRepository.findAll().forEach(e -> emps.add(e));
            return emps;
        }
        
        @Override    
        public Emp findById(int empno){
            Emp emp = empRepository.findById(empno).orElseThrow(() -> new ResourcenotFoundException("Emp", "empno", empno)); // ResourcenotFoundException는 만든 것. (com.example.bootrest.exception 패키지의 ResourcenotFoundException 클래스 생성)
            return emp;
        }
        
        @Override
        public void deleteById(int empno) {
            empRepository.deleteById(empno);
        }
            
        @Override
        public Emp save(Emp emp){
            empRepository.save(emp);
            return emp;
        }
            
        @Override
        List<Emp> findBySalBetween(int sal1, int sal2) {
            List<Emp> emps = empRepository.findBySalBetween(sal1, sal2);
            // System.out.println(emps.size() + ">>>>>>>>>" + sal1 + sal2);
            if (emps.size() > 0)
                return emps;
            else
                return null;
        }
        
        // 사번의 데이터를 emp의 데이터로 변경해주세요.
        @Override
        public void updateById(int empno, Emp emp) {
            Emp e = empRepository.findById(empno).orElseThrow(() -> new ResourcenotFoundException("Emp", "empno", empno)); 
            e.setEname(emp.getEname());
            e.setSal(emp.getSal());
            
            empRepository.save(emp);
        }
    }
    ```

  - com.example.bootrest.exception 패키지의 ResourcenotFoundException 클래스

    - ```java
      package com.example.bootrest.exception;
      
      import org.springframework.http.HttpStatus;
      import org.springframework.web.bind.annotation.ResponseStatus;
      
      @ResponseStatus(value = HttpStatus.NOT_FOUND) // 404일 때 거는 exception
      public class ResourceNotFoundException extends RuntimeException {
          private String resourceName;
          private String fieldName;
          private Object fieldValue;
          
          public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
              super(String.format("%s nto found with %s : '%s'", resourceName, fieldName, fieldValue));
              this.resourceName = resourceName;
              this.fieldName = fieldName;
              this.fieldValue = fieldValue;
          }
          
          public String getResourceName() {
              return resourceName;
          }
          
          public String getFieldName() {
              return fieldName;
          }
          
          public Object getFieldValue() {
              return fieldValue;
          }
      }
      ```



src/main/java/com.example.bootrest.controller폴더에 EmpController.java 를 만들어보자.

- ```java
  package com.example.bootrest.controller;
  
  @RestController // @Controller + @ResponseBody. 기존의 Controller 어노테이션의 Return 값에 ResponseBody를 적용한 것으로 json으로 결과를 반환한다. 기존의 Controller는 View(화면)을 리턴하고 json 형태의 데이터를 반환할 때 @ResponseBody를 추가해줘야 했는데 이러한 기능을 통합시킨 어노테이션이다.
  @RequestMapping("emp") // localhost:8080/emp 에 들어오면 실행되는 컨트롤러. Controller 어노테이션이 클래스 위에 선언되었다면 RequestMapping은 클래스 내의 메서드 위에도 선언될 수 있다. 요청된 URL을 어떤 메서드가 처리할지 결정하는 어노테이션.
  public class EmpController {
      @Autowired
      private EmpService empService;
      
      // 모든 사원 조회, localhost:8080/emp 에 Get으로 request
      @GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE }) // RequestMapping 어노테이션은 HTTP Method의 get, post 와 같은 메서드 정보를 명시해줘야했는데, GetMapping은 RequestMapping을 Get Method 요청으로 받고 처리하겟다는 뜻의 어노테이션이다.
      public ResponseEntity<List<Emp>> getAllEmps() {
          List<Emp> emps = empService.findAll();
          return new ResponseEntity<List<Emp>>(emps, HttpStatus.OK);
      }
      
      // empno로 사원 삭제
      @DeleteMapping(value = "/{empno}", produces = {MediaType.APPLICATION_JSON_VALUE})
      public ResponseEntity<Void> deleteEmp(@PathVariable("empno") int empno) {
          empService.deleteById(empno);
          return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
      }
      
      // empno로 사원 수정(empno로 사원 찾아 인자로 넘어오는 Emp 객체의 ename, sal로 수정함)
      @PutMapping(value="/{empno}", produces = {MediaType.APPLICATION_JSON_VALUE})
      public ResponseEntity<Emp> updateEmp(@PathVariable("empno") int empno,
                                          @RequestBody Emp emp) {
          empService.updateById(empno, emp);
          return new ResponseEntity<Emp>(emp, HttpStatus.OK);
      }
      
      // 사원 입력
      @PostMapping
      public ResponseEntity<Emp> save(@RequestBody Emp emp) {
          return new ResponseEntity<Emp>(empService.save(emp), HttpStatus.OK);
      }
      
      // 급여를 기준으로 사원 검색 (sal > sal1 and sal < sal2)
      @GetMapping(value = "/{sal1}/{sal2}")
      public ResponseEntity<List<Emp>> getEmpBySalBetween(@PathVariable int sal1, @PathVariable int sal2) {
          List<Emp> emps = empService.findBySalBetween(sal1, sal2);
          return new ResponseEntity<List<Emp>>(emps, HttpStatus.OK);
      }
  }
  ```





model 폴더에 java 생성

repository 

service.java, serviceImpl.java 

Controller.java