### Relationship fields

모델 간 관계를 나타내는 필드

- Many to one (1:N)

  - ForeignKey() : 외래키

    - 참조하는 테이블에서 1개의 키(속성 또는 속성의 집합)에 해당하고, 이는 참조되는 측의 테이블의 기본 키를 가리킨다.

    - 참조하는 테이블의 속성의 행 1개의 값은, 참조되는 측 테이블의 행 값에 대응된다.

      - 때문에 참조하는 테이블의 행에는, 참조되는 테이블에 나타나지 않은 값을 포함할 수 없다.

    - 하나의 테이블이 여러 개의 외래 키를 포함할 수 있다. 그리고 이러한 외래 키들은 각각 서로 다른 테이블을 참조할 수 있다.

    - 참조하는 테이블과 참조되는 테이블이 동일할 수도 있다 (재귀적 외래 키)

    - 키를 사용하여 부모 테이블의 유일한 값을 참조 (참조 무결성)

    - 외래 키의 값이 부모 테이블의 기본 키 일 필요는 없지만 유일해야 함

    - 2개의 위치 인자가 필요

      - 참조하는 모델 class

      - on_delete 옵션

        - CASCADE : 부모 객체(참조된 객체)가 삭제 됐을 때 이를 참조하는 객체도 삭제
        - PROTECT : 참조가 되어 있는 경우 오류 발생
        - SET_NULL : 부모 객체가 삭제 됐을 때 모든 값을 NULL로 치환. (NOT NULL 조건 시 불가능)
        - SET_DEFAULT : 모든 값이 DEFAULT 값으로 치환
        - SET() : 특정 함수 호출
        - DO_NOTHING : 아무것도 하지 않음
          - 다만, 데이터베이스 필드에 대한 SQL ON DELETE 제한 조건을 설정해야 한다.

      - ```python
        class Comment(models.Model):
            article = models.ForeignKey(Article, on_delete=models.CASCADE)
        ```

  - 1:N 관계의 model manager

    - `comment.article` : Comment(N)가 Article(1)을 참조
    - `article.comment_set.all()` : Article(1)이 Comment(N)를 참조(역참조)
    - related_name 옵션 : 역참조 시의 기본 manager의 이름을 바꿀 수 있다.
      - ex) related_name = 'followers'

- Many to Many (M:N)

  - ManyToManyField()

- One to One (1:1)

  - OneToOneField()



장고는 field 이름에 `_id`를 추가하여 데이터베이스 필드 이름을 만든다.



### SQL 정리

SQL는 관계형 데이터 베이스 관리 시스템(RDBMS)의 데이터를 관리 하기 위해 설계된 특수 목적의 프로그래밍 언어이다.



SQL 문법 종류

- **DDL** (Data Definition Language) : 데이터 정의 언어

  - **CREATE**

    - ```sql
      CREATE TABLE 테이블_이름 (
          id INTEGER PRIMARY KEY AUTOINCREMENT
      	필드_이름 데이터_타입 [NOT NULL] [DEFAULT 기본값]
      );
      ```

    - PRIMARY KEY는 INTEGER 타입에서만 사용 가능

    - AUTOINCREMENT : 이전의 삭제된 데이터의 pk는 재사용하지 않음

    - 기본키 : 테이블에 하나만 존재.

    - 대체키 : 테이블에 여러 개 존재할 수 있다.

    - 외래키 : 테이블에 여러 개 존재할 수 있다.

  - **ALTER**

    - 테이블명 변경

      - ```sql
        ALTER TABLE 기존테이블명 RENAME TO 새로운테이블명;
        ```

    - 새로운 컬럼 추가

      - ```sql
        ALTER TABLE 테이블명 ADD COLUMN 컬럼명 datatype;
        ```

  - **DROP**

    - ```sql
      DROP TABLE classmates;
      ```

  

- **DML** (Data Manipulation Language) : 데이터 조작 언어

  - INSERT

    - ```sql
      INSERT INTO TABLE (column1, column2) VALUES (value1, value2), (value1, value2), (value1, value2);
      ```

    - 컬럼과 들어가는 데이터가 똑같다면 생략 가능

    - rowid는 자동으로 작성되었는데 id를 지정해주면 column들을 명시하지 않고 값을 넣을 때 에러가 뜬다

      - 해결 방법:

        1. 명시를 하자

           ```sql
           INSERT INTO classmates (name, age, address) VALUES('홍길동',11,'구미')
           ```

        2. id도 VALUES에 적어주자

           ```sql
           INSERT INTO classmates VALUES(2, '홍길동',11,'구미')
           ```

  - SELECT

    - ```sql
      -- 모든 컬럼 가져오기
      SELECT * FROM tablename;
      
      -- 특정 컬럼 가져오기
      SELECT column1, column2 FROM tablename;
      ```

    - LIMIT : 원하는 개수(num)만큼 가져오기

      - ```sql
        SELECT column1, column2
        FROM tablename
        LIMIT num;
        ```

    - OFFSET : 특정 위치에서부터 가져올 때

      - ```sql
        SELECT column1, column2
        FROM tablename
        LIMIT num OFFSET num;
        ```

    - WHERE : 조건을 통해 값 가져오기

      - ```sql
        SELECT column1, column2
        FROM tablename
        WHERE column=value;
        
        -- users에서 age가 30이상인 사람만 가져온다면?
        SELECT * FROM users
        WHERE age >= 30;
        
        -- users에서 age가 30이상인 사람의 이름만 가져온다면?
        SELECT first_name FROM users
        WHERE age >= 30;
        
        -- users에서 age가 30이상이고 성이 김인 사람의 성과 나이만 가져온다면?
        SELECT age, last_name FROM users
        WHERE age >= 30 and last_name='김';
        ```

    - DISTINCT : 중복없이 가져오기

      - ```sql
        SELECT DISTINCT column FROM tablename;
        ```

        

  - DELETE

    - ```sql
      DELETE FROM tablename
      WHERE condition;
      
      -- ex)
      DELETE FROM classmates
      WHERE name='지연';
      ```

      

  - UPDATE

    - ```sql
      UPDATE tablename
      SET name='지수', address='대한민국'
      WHERE name='지연';
      ```

    - 

- **DCL** (GRANT, REVOKE) : 데이터 제어 언어

  - 



CRUD를 ORM은 어떻게 했고, SQL은 어떻게 했는지 비교해서 해봐라.



장고 ORM에서 필터를 적용시켰었는데 필터에서 AND는 어떻게 줬는지 OR는 어떻게 줬는지 참고해보자



### 심화 SQL문

#### Expressions (django ORM에서 aggregate와 대응)

- COUNT

  - ```sql
    SELECT COUNT(*) FROM users;
    ```

- AVG

  - ```sql
    SELECT AVG(age)
    FROM users
    WHERE age >= 30;
    ```

- MAX

  - ```sql
    SELECT AVG(age)
    FROM users
    WHERE age >= 30;
    ```

- MIN

- SUM



#### LIKE

- 와일드 카드

  - `_` : 반드시 이 자리에 한 개의 문자가 존재해야 한다는 뜻

    - ```sql
      -- 20대인 사람들만 가져올 때
      SELECT *
      FROM users
      WHERE age LIKE '2_';
      ```

  - `%` : 이 자리에 문자열이 있을 수도, 없을 수도 있다. 0개 이상.

    - ```sql
      -- 지역번호가 02인 사람만 가져올 때
      SELECT *
      FROM users
      WHERE phone LKE '02-%';
      ```

  - 두 개를 조합해서 사용할 수도 있다.

    - ```sql
      -- 핸드폰 중간 번호가 반드시 4자리면서 511로 시작되는 사람들
      SELECT * FROM users
      WHERE phone LIKE '%-511_-%'
      ```



#### 정렬 (ORDER BY)

```sql
SELECT columns FROM tablename
ORDER BY column1, column2 ASC | DESC;
```

ex) 나이, 성 순서로 오름차순 정렬하여 상위 10개만 뽑아보면?

```sql
SELECT *
FROM users
ORDER BY age, last_name
LIMIT 10;
```



#### GROUP BY (django ORM에서 annotate와 대응)

지정된 기준에 따라 행 세트를 그룹으로 결합한다.

데이터를 요약하는 상황에서 주로 사용한다.

```sql
SELECT column1, aggregate_function(column_2)
FROM tablename
GROUP BY column1, column2;

-- 성(last_name)씨가 몇 명인지 조회할 때
SELECT last_name, COUNT(*)
FROM users
GROUP BY last_name;
```









