Static web : 미리 저장된 정적파일(HTML, CSS, JS)을 제공



Dynamic web: 

- Client-side: HTML, CSS, JS
- server-side: JSP, SQL, PHP 



웹의 프로토콜:

- Client가 Server에 request(요청)한다.

- Server는 Client에게 response(응답)한다
  - 이 Server를 Django로 구축한다.



Django : 파이썬으로 된 웹 프레임워크이다.



웹 프레임워크: 웹 페이지를 개발하는 과정에서 겪는 어려움을 줄이는 것이 주 목적이다.



django의 특징:

- 엄청 빠르고
- 미리 로드되어있고
- 보안좋고
- 확장성 좋고
- 그래서 넌 쓸데없는 시간낭비를 안해도 된다.





django는 파이썬으로 작성된 오픈소스 웹 어플리케이션 프레임워크로, 모델-뷰-컨트롤러를 따르고 있다.



모델-뷰-컨트롤러(MVC)는 소프트웨어 공학에서 사용되는 소프트웨어 디자인 패턴이다.

이 패턴을 성공적으로 사용하면, 사용자 인터페이스로부터 비즈니스 로직을 분리하여 애플리케이션의 시각적 요소나 그 이면에서 실행되는 비즈니스 로직을 서로 영향없이 쉽게 고칠 수 있는 애플리케이션을 말한다.





MVC 패턴 : MVC ( Model, View, Controller )

django: MTV ( Model, Template, View )

- Model: 데이터베이스 관리

- Template: 레이아웃(화면)

- View : 중심 컨트롤러 (심장)

![image-20210308091731823](오전라이브.assets/image-20210308091731823.png)





준비물: python 3.8.6

pip install django

pip list

django-admin startproject 프로젝트이름

python manage.py runserver

python manage.py startapp articles



firstpjt 폴더의 구성

- pycache 폴더 ( setting.py, urls.py가 중요 )
  - init.py
  - asgi.py : 배포할 때 도움을 주는 친구
  - settings.py: 장고 웹사이트의 모든 설정. 모든 애플리케이션이 등록이 되기도 하고, 파일들의 위치, 보안, 데이터베이스의 세부 사항이 작성된다.
  - urls.py : 사용자의 request를 가장 먼저 맞닿뜨리는 곳. 내부 연결을 지정해주는 역할
  - wsgi.py : asgi와 비슷한 역할. 배포할 때 도움을 주는 친구



articles 폴더의 구성

- apps.py



이런 어플리케이션을 만들었다고 등록하는 과정이 필요함.

firstpjt -> settings.py

- INSTALLED_APPS
  - 적혀있는 디폴트 들은 장고를 구성하는데 기본적으로 필요한 어플리케이션들이다.
  - INSTALLED_APPS 내에 어플이름을 추가한다.
    - 위에다가 추가함.
      1. local apps
      2. 3rd-party apps
      3. django apps
  - LANGUAGE_CODE = 'ko-kr'
  - TIME_ZONE = 'Asia/Seoul'

firstpjt -> urls.py

- 켜져있는 url주소 뒷쪽에 /admin을 작성해보자.
  - urlpatterns = [path('admin/', admin.site.urls), path('index/', 새로운함수)]
    - views 함수 내의 모든 함수의 첫번째 인자로는 request가 들어가야한다. (articles -> views.py에서 작성)



articles -> templates(폴더생성) -> index.html (파일생성)

- index.html을 작성하고
- 이후에 views.py 내의 함수에다가 templates 이후의 경로만 작성하면 된다.



django template language (DTL)

- 장고 템플릿에서 사용하는 빌트인 템플릿 시스템이다.
- 조건, 반복, 변수치환, 필터 등의 기능을 제공
- 단순히 파이썬이 HTML에 포함된 것이 아니며, 프로그래밍적 로직이 아니라 프레젠테이션을 표현하기 위한 것
- 파이썬처럼 일부 프로그래밍 구조 (if, for 등)을 사용할 수 있지만 이것은 해당 python 코드로 실행되는 것이 아님.
  - 파이썬 웹 프레임워크여서 파이썬과 비슷하게 생긴 코드로 되어있다.



DTL Syntax

- Variable
  - render()를 사용하여 views.py에서 정의한 변수를 template 파일로 넘겨 사용하는 것
  - 변수명은 영어, 숫자와 밑줄(_)의 조합으로 구성될 수 있으나 밑줄로는 시작할 수 없음
    - 공백이나 구두점 문자 또한 사용할 수 없음
  - dot(.)를 사용하여 변수 속성에 접근할 수 있다.
  - 
- Filters
  - 표시할 변수를 수정할 때 사용 ( {{variable|filter }} )
  - ex:
    - {{ name|lower }} : name 변수를 모두 소문자로 출력
  - 60개의 built-in template filters를 제공
  - chained가 가능하며 일부 필터는 인자를 받기도 함 ( {{ variable|truncatedwords:30 }}) : 변수를 30개까지만 출력하자
- Tags
  - {% tag %}
  - 출력 텍스트를 만들거나, 반복 또는 논리를 수행하여 제어 흐름을 만드는 등 변수보다 복잡한 일들을 수행
  - 일부 태그는 시작과 종료 태그가 필요
    - {% tag %} ... {% endtag %}
  - 약 24개의 built-in template tags를 제공
- Comments
  - {# lorem ipsum #}
  - django template에서 줄의 주석을 표현하기 위해 사용
  - 아래처럼 유효하지 않은 탬플릿 코드가 포함될 수 있음
    - { # {% if ... %}text{% else %} #}
  - 한줄 주석에만 사용 가능 (줄바꿈 허용  x)
  - 여러 줄 주석은 {% comment %}와 {% endcomment %} 사이에 입력





Template inheritance

- 템플릿 상속은 기본적으로 코드의 재사용성에 초점을 맞춤
- 템플릿 상속을 사용하면 사이트의 모든 공통 요소를 포함하고, 하위 템플릿이 재정의(override) 할 수 있는 블록을 정의하는 기본 "Skeleton" 템플릿을 만들 수 있음
- 새로운 태그
  - {% extends %}
  - {% block %}