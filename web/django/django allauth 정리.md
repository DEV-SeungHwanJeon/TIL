# django allauth 정리



### 인스톨

- `pip install django-allauth`
  - django-allauth를 설치
- settings.py에서 변경사항을 확인 및 수정
  - `https://django-allauth.readthedocs.io/en/latest/installation.html`
  - SOCIALACCOUNT_PROVIDERS 옵션을 우리는 admin 사이트에 가서 설정할 것이다.
- urls.py에서 링크 추가
  - `path('accounts/', include('allauth.urls')),`
- python manage.py migrate 하기



### admin 페이지에서 소셜어플리케이션 추가하기

제공자, 클라이언트 키 같은 걸 받아와야한다.

- 구글 GCP에 들어가서 제공 받기
  - 프로젝트 하나 생성
  - api 및 서비스 탭에 들어가서
    - OAuth 동의 화면에서 usertype 외부 - 만들기
    - 정보들 작성하고, 앱도메인 안적고 넘어간다.
    - 저장, 저장 후
    - api 및 서비스 탭으로 돌아가면
  - 사용자 인증정보 탭에 들어가서 수정이 가능해진다.
    - 들어가서 OAuth 2.0 클라이언트 ID 를 확인하자
  - 사용자인증정보만들기-OAuth 클라이언트 ID 만들기에 들어가서
    - 웹 어플리케이션 설정, 이름은 임의로
    - OAuth 클라이언트 생성됨
      - 클라이언트 id랑 보안 비밀번호를 꼭 다른 곳에 복사해둔다. (한번만 보여줌)
  - OAuth 클라이언트 ID에서 수정을 누르고
    - 승인된 리디렉션 URI에다가 URL을 추가한다.
- django allauth 공식문서의 Provider에 들어가면 가이드가 있음
- admin 페이지로 돌아와서 소셜 어플리케이션에 들어가서 제공자, 이름, 아까 만들면서 받아온 클라이언트 아이디, 비밀 키를 입력하고 저장한다.



- login.html에다가 외부로그인 버튼을 만든다.

  - 공식문서의 Templates 탭에서 Social Account Tags에 가서 코드 복사 후 붙여넣기 한다.

  

- 이렇게 해서 로그인 한 계정은 admin 사이트의 소셜 계정에 저장이 되지만 비밀번호는 저장되지 않는다.

  - 또한 개방되어있는 소셜관련 정보는 받아올 수 있다.

- 구글, 카카오, 네이버 계정연동 등등

  - 좋은 방법: 우리가 만들어둔 account와 각각 계정연동된 회사들의 계정테이블과 1:N 관계를 준다.
  - 현실적인 방법: 그냥 계정연동 테이블을 개별적으로 활용한다. 한 사람의 계정이 여러개가 될 수 있다. (네이버 계정, 카카오 계정, 구글 계정, 등등)