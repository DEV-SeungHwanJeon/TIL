# Model

- 단일한 데이터에 대한 정보를 가짐
  - 사용자가 저장하는 데이터들의 필수적인 필드들과 동작들을 포함
- 저장된 데이터베이스의 구조(layout)
- 장고는 model을 통해 데이터에 접속하고 관리
- 일반적으로 각각 model은 하나의 데이터베이스 테이블에 매핑
- 즉, Model은 웹 어플리케이션의 데이터를 구조화하고 조작하기 위한 도구



- 데이터베이스: 
  - 체계화된 데이터의 모임
  - 스키마(Schema):
    - 데이터베이스의 구조와 제약조건(자료의 구조, 표현방법, 관계)에 관련한 전반적인 명세를 기술한 것 (structure)
  - 테이블(Table)
    - 필드 / 컬럼 / 속성
    - 레코드 / 행 / 튜플

- 쿼리: 
  - 데이터를 조회하기 위한 명령어
  - 조건에 맞는 데이터를 추출하거나 조작하는 명령어

- 기본키(Primary Key):
  - 각 행(레코드)의 고유값으로 기본키로 불린다.
  - 반드시 설정하여야하며, 데이터베이스 관리 및 관계 설정 시 주요하게 활용된다.





### ORM ( Object-Relational-Mapping )

객체지향 프로그래밍 언어를 사용하며 호환되지 않는 유형의 시스템간에 ( 장고 - SQL ) 호환을 담당. 객체와 관계를 매핑 ( 중간 다리 역할 )

- 쓰는 이유: 서로다른 시스템간의 호환성을 위해서 사용한다. DB를 객체로 조작하기 위해 ORM을 사용한다.

DB -(SQL statement)- ORM -(Python Object)- models.py



### 장점

- SQL을 잘 알지 못해도 DB 조작이 가능
- SQL의 절차적 접근이 아닌 객체 지향적 접근으로 인한 높은 생산성

### 단점

- ORM 만으로 완전한 서비스를 구현하기 어려운 경우가 있음





### Migrations

django가 model에 생긴 변화를 반영하는 방법

migration 실행 및 DB 스키마를 다루기 위한 몇가지 명령어

- makemigrations
  - model을 변경한 것에 기반한 새로운 migration을 만들 때 사용 ( 설계도 )
- migrate
  - migration을 DB에 반영하기 위해 사용
  - 설계도를 실제 DB에 반영하는 과정
  - 모델에서의 변경 사항들과 DB의 스키마가 동기화를 이룸
- sqlmigrate
  - migration에 대한 SQL 구문을 보기 위해 사용
  - migration이 SQL 문으로 어떻게 해석되어서 동작할지 미리 확인할 수 있다.
  - ex) python manage.py sqlmigrate articles 0001
- showmigrations
  - 프로젝트 전체의 migration 상태를 확인하기 위해 사용
  - migrate 됐는지 안됐는지 여부 확인 가능



models.py 수정 후 진행 순서:

- python manage.py makemigrations
  - 만약 수정본을 다시 하는 경우에는 Select an option이 뜬다.

    1. 여기서 수정

    - ​	그냥 엔터치면 timezone.now가 들어간다

    2. 나가서 models.py를 수정

    - ​	공식문서의 datefield 에 들어가서 해야된다. 하지만 시간이다보니까 직접 구현하기 어렵다.

- python manage.py migrate







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



### CRUD

CRUD : 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말



- **Create**
  - save() method
    - Saving objects
    - 객체를 데이터베이스에 저장
    - 데이터 생성 시 save()를 **호출하기 전에는** 객체의 **ID 값**이 무엇인지 **알 수 없음**
- **Read**
  - QuerySet API method를 사용한 다양한 조회를 하는 것이 중요.
  - 크게 2가지로 분류
    - Methods that return new querysets
    - Methods that do not return querysets
  - Field lookups
    - 조회 시 특정 조건을 적용시키기 위해 사용
    - QuerySet Method(get, filter, exclude)에 대한 키워드 인수로 사용됨





### Admin Site

서버의 관리자가 활용하기 위한 페이지

Article class를 admin.py에 등록하고 관리

django.contrib.auth 모듈에서 제공

record 생성 여부 확인에 매우 유용하며 직접 record를 삽입할 수도 있음





### Form

**Form Class**

- Form은 장고 프로젝트의 주요 유효성 검사 도구들 중 하나이며, 공격 및 우연한 데이터 손상에 대한 중요한 방어수단

  장고가 도와주는 Form에 관련된 작업

  - 렌더링을 위한 데이터 준비 및 재구성
  - 데이터에 대한 HTML forms 생성
  - 클라이언트로부터 받은 데이터 수신 및 처리

- django Form 관리 시스템의 핵심: 아래 목록들을 결정해준다.

  - form 내 field
  - field 배치
  - 디스플레이 widget
  - label
  - 초기값
  - 유효하지 않는 field에 관련된 에러메세지

- 장고는 사용자의 데이터를 받을 때 해야 할 과중한 작업(데이터 유효성 검증, 필요시 입력된 데이터 검증 결과 재출력, 유효한 데이터에 대해 요구되는 동작 수행 등)과 반복 코드를 줄여 줌

- Form Class 작성:

  - ```python
    class ArticleForm(forms.Form):
        title = forms.CharField(max_length=10)
        content = forms.CharField(widget=forms.Textarea)
    ```

**ModelForm Class**

- model을 통해 Form Class를 만들 수 있는 기능

- 일반 Form Class와 완전히 같은 방식(객체 생성)으로 view에서 사용 가능

- Meta Class

  - Model의 정보를 작성하는 곳
  - 해당 model에 정의한 field 정보를 Form에 적용하기 위함

- ModelForm Class 작성

  - ```python
    class ArticleForm(forms.ModelForm):
        class Meta:
            model = Article
            fields = ('title, content',)
    ```



**Form & ModelForm**

- Form
  - 어떤 model에 저장해야 하는지 알 수 없으므로 유효성 검사 이후 cleaned_data 딕셔너리를 생성(cleaned_data 딕셔너리에서 데이터를 가져온 후 .save() 호출)
  - model에 연관되지 않은 데이터를 받을 때 사용
- ModelForm
  - django가 해당 model에서 양식에 필요한 대부분의 정보를 이미 정의
  - 어떤 레코드를 만들어야 할 지 알고 있으므로 바로 .save() 호출 가능



### Widgets

- 장고의 HTML input element 표현

- HTML 렌더링을 처리
- Form Fields와 혼동되어서는 안됨
- Form Fields는 input 유효성 검사를 처리
- Widgets은 웹페이지에서 input element의 단순 렌더링 처리



**장고의 2가지 HTML input 요소 표현 방법**

- Form fields
  - input에 대한 유효성 검사 로직을 처리하며 템플릿에서 직접 사용됨
- Widgets
  - 웹 페이지의 HTML input 요소 렌더링 및 제출된 원시 데이터 추출을 처리
  - 하지만 widgets은 반드시 form fields에 할당 됨



### View decorators

**decorator(데코레이터)**

- 어떤 함수에 기능을 추가하고 싶을 때, 해당 함수를 수정하지 않고 기능을 "연장"시키는 함수
- 장고는 다양한 기능을 지원하기 위해 view 함수에 적용할 수 있는 여러 데코레이터를 제공

**Allowed HTTP methods**

- 요청 메서드에 따라 view 함수에 대한 엑세스를 제한
- 요청이 조건을 충족시키지 못하면 HttpResponseNotAllowed를 return
- require_http_methods(), require_POST(), require_safe(), require_GET()



### static

**정적 파일(static files)**

- 웹 사이트의 구성 요소 중에서 image, css, js 파일과 같이 해당 내용이 고정되어, 응답을 할 때 별도의 처리 없이 파일 내용을 그대로 보여주면 되는 파일이다.

- 즉, 사용자의 요청에 따라 내용이 바뀌는 것이 아니라 요청한 것을 그대로 응답하면 되는 파일

- 기본 static 경로 : app_name/static/

- static 작성

  - ```django
    {% load static %}
    
    <img src="{% static 'app_name/sample.png' %}" alt='sample'>
    ```

- settings.py에 static 관련 설정 값들

  - STATIC_ROOT
    - collectstatic이 배포를 위해 정적 파일을 수집하는 절대 경로
      - collectstatic : 프로젝트 배포 시 흩어져 있는 정적 파일들을 모아 특정 디렉토리로 옮기는 작업
  - STATIC_URL
    - STATIC_ROOT에 있는 정적 파일을 참조할 때 사용할 URL
    - MEDIA_URL과 STATIC_URL은 서로 다른 값을 가져야 한다.
  - STATICFILES_DIRS
    - app내의 static 디렉토리 경로를 사용하는 것 외에 추가적인 정적 파일 경로 정의



### Media

**미디어 파일 (media files)**

- image, pdf, video 등의 미디어 파일을 말한다.

- settings.py에 media관련 설정 값들

  - MEDIA_ROOT
    - 사용자가 업로드 한 파일을 보관할 디렉토리의 절대 경로
    - 실제 해당 파일의 업로드가 끝나면 어디에 파일이 저장되게 할 지 경로
  - MEDIA_URL
    - MEDIA_ROOT에서 제공되는 미디어를 처리하는 URL
    - 업로드 된 파일의 주소(URL)를 만들어 주는 역할
    - MEDIA_URL과 STATIC_URL은 서로 다른 값을 가져야 한다.

- **미디어 파일 제공 설정(개발 단계)**

  - 개발 단계에서는 django.views.static.serve() view를 사용하여 MEDIA_ROOT에서 사용자가 업로드 한 미디어 파일을 제공해야 함.

    - urls.py 파일에서

      - ```python
        from django.conf import settings
        from django.conf.urls.static import static
        
        urlpatterns = [
            path('admin/', admin.site.urls),
            path('articles/', include('articles.urls')),
        ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
        ```















