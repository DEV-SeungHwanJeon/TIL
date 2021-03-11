# django

웹 프레임워크: 웹 페이지를 개발하는 과정에서 겪는 어려움을 줄이는 것이 주 목적이다. django는 python으로 된 웹 프레임워크이다.



Static web : 미리 저장된 정적파일(HTML, CSS, JS)을 제공

Dynamic web: 사용자의 요청에 따라 다른 페이지를 제공

- Client-side: HTML, CSS, JS
- server-side: JSP, SQL, PHP 



웹의 프로토콜:

- Client가 Server에 request(요청)한다.

- Server는 Client에게 response(응답)한다
  - 이 Server를 Django로 구축한다.





### django의 특징

- 매우 빠르다.

- 미리 로드되어있다.

- 보안이 좋다.

- 확장성이 좋다.

- 매우 다양하다.

  



### MVC

django는 MVC를 따르고 있다.

모델-뷰-컨트롤러(MVC)는 소프트웨어 공학에서 사용되는 소프트웨어 디자인 패턴이다. 사용자 인터페이스로부터 비즈니스 로직을 분리하여 애플리케이션의 시각적 요소나 그 이면에서 실행되는 비즈니스 로직을 서로 영향없이 쉽게 고칠 수 있는 애플리케이션을 만들 때 사용한다.

MVC 패턴 : MVC ( Model, View, Controller )

- Model : 애프릴케이션의 정보(데이터)를 나타낸다
- View : 사용자 인터페이스 요소를 나타낸다.
- Controller : 데이터와 비즈니스 로직 사이의 상호동작을 관리한다.

django: MTV ( Model, Template, View )

- Model (=Model) : 데이터베이스 관리

- Template (=View) : 레이아웃(화면)

- View (=Controller) : 중심 컨트롤러 (심장)



### DTL (django template language)

- django template에서 사용하는 bulit-in template 시스템이다.
- 조건, 반복, 변수치환, 필터 등의 기능을 제공
- HTML에서 작성한다.
  - 단순히 파이썬이 HTML에 포함된 것이 아니며, 프로그래밍적 로직이 아니라 프레젠테이션을 표현하기 위한 것
- 파이썬처럼 일부 프로그래밍 구조 (if, for 등)을 사용할 수 있다
  - 파이썬 웹 프레임워크여서 파이썬과 비슷하게 생긴 코드로 되어있다.



DTL Syntax

- Variable : {{ variable }} 
  - views.py 안에서 render()를 사용하여 views.py에서 정의한 변수를 template 파일(html)로 넘겨 사용하는 것
  
    - render()의 세 번째 인자로 딕셔너리 형태를 넘겨주면 key값에 해당하는 문자열들이 template에서 사용가능한 변수명이 된다.
  
  - 변수명은 영어, 숫자와 밑줄(_)의 조합으로 구성.
  
    - 밑줄로는 시작 불가. 
    - 공백이나 구두점 문자 사용 불가.
  
  - dot(.)를 사용하여 변수 속성에 접근할 수 있다. ex) article.title
  
    
  
- Filter : {{ variable|filter }}
  - 표시할 변수를 수정할 때 사용
  - 60개의 built-in template filters를 제공
  - chained가 가능하며 일부 필터는 인자를 받기도 함 
    - ex) {{ name|lower }} : name 변수를 모두 소문자로 출력
    - ex) {{ variable|truncatedwords:30 }} : 변수를 30개까지만 출력하자
  
  
  
- Tags : {% tag %}

  - 출력 텍스트를 만들거나, 반복 또는 논리를 수행하여 제어 흐름을 만드는 등 변수보다 복잡한 일들을 수행

  - 일부 태그는 시작과 종료 태그가 필요

  - 약 24개의 built-in template tags를 제공

    

- Comments : {# lorem ipsum #}
  - django template에서 줄의 주석을 표현하기 위해 사용
  - 한줄 주석에만 사용 가능 (줄바꿈 허용  x)
  - 여러 줄 주석은 {% comment %}, {% endcomment %} 사이에 입력





Template inheritance

- 템플릿 상속은 기본적으로 코드의 재사용성에 초점을 맞춤
- 템플릿 상속을 사용하면 사이트의 모든 공통 요소를 포함하고, 하위 템플릿이 재정의(override) 할 수 있는 블록을 정의하는 기본 템플릿을 만들 수 있음
- {% extends %} : 
  - 자식(하위)템플릿이 부모 템플릿을 확장한다는 것을 알림
  - 반드시 템플릿 최상단에 작성
- {% block %} :
  - 하위 템플릿에서 재지정(override)할 수 있는 블록을 정의
  - 하위 템플릿에서 작성한 내용들이 채울 수 있는 공간을 말한다.





django template system

- 표현과 로직(view)을 분리

  - 템플릿 시스템은 표현을 제어하는 도구이자 표현에 관련된 로직일 뿐이라고 생각한다.
  - 즉, 템플릿 시스템은 이러한 기본 목표를 넘어서는 기능을 지원하지 말아야 한다.

- 중복을 배제

  - 대다수의 동적 웹사이트는 공통 header, footer, navbar 같은 사이트 공통 디자인을 갖는다.
  - django 템플릿 시스템은 이러한 요소를 한 곳에 저장하기 쉽게 하여 중복 코드를 없애야 한다.

  

