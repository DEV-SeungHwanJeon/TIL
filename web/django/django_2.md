# Model

- 단일한 데이터에 대한 정보를 가짐
  - 사용자가 저장하는 데이터들의 필수적인 필드들과 동작들을 포함
- 저장된 데이터베이스의 구조(layout)
- 장고는 model을 통해 데이터에 접속하고 관리
- 일반적으로 각각 model은 하나의 데이터베이스 테이블에 매핑
- 즉, Model은 웹 어플리케이션의 데이터를 구조화하고 조작하기 위한 도구



### 데이터베이스: 체계화된 데이터의 모임

쿼리: 데이터를 조회하기 위한 명령어, 조건에 맞는 데이터를 추출하거나 조작하는 명령어



### 데이터베이스의 기본 구조

- 스키마(Schema): 데이터베이스의 구조와 제약조건(자료의 구조, 표현방법, 관계)에 관련한 전반적인 명세를 기술한 것 (structure)
- 테이블(Table)
  - 필드 / 컬럼 / 속성
  - 레코드 / 행 / 튜플





### 키

- 기본키(Primary Key): 각 행(레코드)의 고유값으로 기본키로 불린다. 반드시 설정하여야하며, 데이터베이스 관리 및 관계 설정 시 주요하게 활용된다.





### ORM ( Object-Relational-Mapping )

객체지향 프로그래밍 언어를 사용하며 호환되지 않는 유형의 시스템간에 ( 장고 - SQL ) 호환을 담당. 객체와 관계를 매핑 ( 중간 다리 역할 )

- 쓰는 이유: 서로다른 시스템간의 호환성을 위해서 사용한다. DB를 객체로 조작하기 위해 ORM을 사용한다.

DB -(SQL statement)- ORM -(Python Object)- models.py

### 장점

- SQL을 잘 알지 못해도 DB 조작이 가능
- SQL의 절차적 접근이 아닌 객체 지향적 접근으로 인한 높은 생산성

### 단점

- ORM 만으로 완전한 서비스를 구현하기 어려운 경우가 있음



★ 현대 웹 프레임워크의 요점은 웹 개발의 속도를 높이는 것 (생산성)





### Migrations

models.py 수정 후

python manage.py makemigrations

- 만약 수정본을 다시 하는 경우에는 Select an option이 뜬다

  1. 여기서 수정
     - 그냥 엔터치면 timezone.now가 들어간다

  2. 나가서 models.py를 수정
     - 공식문서의 datefield 에 들어가서 해야된다. 하지만 시간이다보니까 직접 구현하기 어렵다.



python manage.py migrate





sqlmigrate : 

- 마이그레이션에 대한 SQL 구문을 보기 위해 사용

- ex) python manage.py sqlmigrate articles 0001





반드시 기억해야 할 3단계

1.  models.py
   - model 변경사항 발생
2. python manage.py makemigrations
   - migrations 파일 생성
3. python manage.py migrate
   - DB 적용





### DB API

DB를 조작하기 위한 도구

장고가 기본적으로 ORM을 제공함에 따른 것으로 DB를 편하게 조작할 수 있도록 도와줌

모델을 만들면 장고는 객체들을 만들고 읽고 수정하고 지울 수 있는 database-abstract API를 자동으로 만듦

database-access API 라고도 함



DB API 구문 - Making Queries

"Article.objects.all()"

- Article : Class Name
- objects : Manager (중간 인터페이스 역할)
- all() : QuerySet API



Manager

- 장고 모델에 데이터베이스 query 작업이 제공되는 인터페이스
- 기본적으로 모든 장고 모델 클래스에 objects라는 Manager를 추가



QuerySet

- 데이터베이스로부터 전달받은 객체 목록
- queryset 안의 객체는 0개, 1개 혹은 여러개 일 수 있음
- 데이터베이스로부터 조회, 필터, 정렬 등을 수행할 수 있음





CRUD : 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말


