# HTML

HTML : Hyper Text Markup Language

- 웹페이지를 작성하기 위한 언어
- 웹 컨텐츠의 구조를 정의하는 언어
- HTML로 작성된 문서 파일형식: .html
- Hyper Text: 텍스트가 정보가 동일선상에 있는 것이 아니라 다중으로 연결되어있는 상태(Hyper). 이 참조(text)를 통하여 자유롭게 움직일 수 있는 것이 Hyper Text이다. (HTML, HTTP)
- Markup language: 태그 등을 이용하여 문서나 데이터의 구조를 명시하는 언어. 프로그래밍 언어와는 다르게 단순하게 데이터를 표현하기만 한다. (대표적인 예: HTML, Markdown. 현재 우리가 배운 언어는 마크다운이다.(관련은 따로 없음) ) 웹 페이지를 작성하기 위한 (구조를 잡기 위한) 언어. 웹 컨텐츠의 의미와 구조를 정의
- HTTP(Hyper Text Transfer Protocol) : hyper text 통신 형식



현재의 웹 표준

- W3C: HTML5

- WHATWG: HTML Living Standard ( Apple, Google, Microsoft, Mozilla)



## HTML의 기본 구조

HTML에서는 쌍따옴표를 사용한다.

또한 `=`의 앞 뒤로 공백이 없어야 한다.

속성을 구분할 때는 띄어쓰기(공백)를 사용한다.

```python
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

HTML의 기본 구조

- `<head>`
  - 해당 문서의 정보를 담고 있다. (제목, 문자 인코딩)
  - 외부 로딩 파일 지정도 할 수 있다 (`<link>`)
  - `<meta>` : 
    - head요소 내부에 위치한 meta요소로서 해당 문서에 대한 정보인 메타데이터를 정의할 때 사용한다.
    - `<base>, <link>, <script>, <style>, <title>`요소와 같은 다른 메타데이터 관련 요소들이 나타낼 수 없는 다양한 종류의 메타데이터를 제공할 때 사용되며, 이렇게 제공된 정보는 브라우저나 검색 엔진, 다른 웹 서비스에서 사용하게 된다.
    - Open Graph Protocol: 메타 데이터를 표현하는 새로운 규약. HTML문서의 메타 데이터를 통해 문서의 정보(head태그 안의 메타 정보)를 분석해서 미리보기 같은 것을 만들어 전달한다. (ex. 카톡 링크 미리보기)
- `<body>`
  - 브라우저 화면에 실질적으로 나타내는 정보
- DOM Tree 구조: 
  - 부모 관계, 형제 관계를 나타내는 트리 구조 (HTML의 구조)
  - 객체지향적인 부분을 통해서 표현, 저장, 조작. 



요소(element):

- HTML의 요소는 태그(tag)와 내용(contents)로 구성되어 있다.
- 태그 별로 사용할 수 있는 속성은 다르다.
- 시멘틱 태그: 의미론적 요소를 담은 태그

속성(attribute):

- 태그별로 사용할 수 있는 속성은 다르다. 공백은 NO. 쌍따옴표 사용.
- `HTML Global Attribute` : 모든 HTML 요소가 공통적으로 사용할 수 있는 속성(몇몇 요소에는 아무 효과가 없을 수 있다.)
  - id, class
  - hidden
  - lang
  - style
  - tabindex
  - title





ㅡㅡㅡㅡㅡㅡㅡ0202부터 다시 정리ㅡㅡㅡㅡㅡㅡㅡ

ㅡㅡㅡㅡㅡㅡㅡ여기서부터 다시 정리ㅡㅡㅡㅡㅡㅡㅡ

ㅡㅡㅡㅡㅡㅡㅡ여기서부터 다시 정리ㅡㅡㅡㅡㅡㅡㅡ



태그들:

- `<form>` :
  - 입력 받은 데이터와 함께 서버에 요청해주는 태그.
  - 속성:
    - action : 요청하는 서버의 주소를 설정하는 속성
    - method :
- `<input>` :
  - 다양한 타입을 가지는 입력 데이터 필드를 만드는 태그.
  - type:
    - text, checkbox, radio, range, date, 등등
  - 속성:
    - name: 데이터를 담을 이름. 변수명 같은것







- 



`<div>` : 단순히 구역을 나누기 위한 태그



<시맨틱 태그>

HTML5에서 의미론적 요소를 담은 태그의 등장. (div와 동일하게 작동함. 이름만 바뀐 것 ㅡ> 의미부여 가능) 단순히 구역을 나누는 것 뿐만 아니라 ''의미''를 가지는 태그들을 활용하기 위한 노력

개발자 및 사용자 뿐만 아니라 검색엔진 등에 의미있는 정보의 그룹을 태그로 표현.

Non semantic 요소는 div, span 등이 있으며 h1, table 태그들도 시맨틱 태그로 볼 수 있음. (h1은 가장 중요한 대주제다. 이런식으로 의미)

검색엔진최적화(SEO)를 위해서 메타태그, 시맨틱 태그 등을 통한 마크업을 효과적으로 할 필요가 있다.

웹 상에 존재하는 수많은 웹 페이지들에 메타데이터를 부여하여, 기존의 단순한 데이터의 집합이었던 웹페이지를 '의미'와 '관련성'을 가지는 거대한 데이터베이스로 구축하고자 하는 발상

- header: 문서 전체나 섹션의 헤더(머릿말 부분)
- nav: 네비게이션 (사이트 들어가면 윗쪽에 메뉴들을 네비게이션 바라고 함)
- aside: 사이드에 위치한 공간, 메인 콘텐츠와 관련성이 적은 콘텐츠
- section: 문서의 일반적인 구분, 컨텐츠의 그룹을 표현
- article: 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역
- footer: 문서 전체나 섹션의 마지막 부분

시맨틱 태그의 장점:

- 가독성
- 유지보수 편함
- 구글 '삼성' 검색하면 삼성의 메인 홈페이지가 나옴. 대제목과 세부내용을 보여줌. 시맨틱 태그들을 잘 만들어두면 검색 엔진이 웹페이지를 싹 살펴보고 대주제, 서브주제같은걸 분석하고 사용자가 검색을 했을 때 어느정도 정리해서 보여준다.
- 시각장애인 분들이 스크린 리더를 사용할 때 div태그만 나열되는것보다는 헤더 섹션 으로 나눠져있으면 더 나은 사용자 경험을 제공할 수 있다.



### <HTML 문서 구조화>

- 인라인 / 블록 요소
  - 블록요소: 가로 한줄을 모두 차지하고 있음. (h1은 블록 요소)
  - 인라인요소: 가로 한줄 전체를 차지하는 것이 아닌 구역을 차지하고있음 ( a, span은 인라인 요소)

- 그룹 컨텐츠

  - `<p>` : paragraph. 문장 그룹

  - `<hr>`: horizental. 위쪽과 아래쪽 그룹을 나눌 수 있는 가로줄

  - `<ol>, <ul>`: 리스트 태그. 1. 2. 3. , ■. ■. ■.

  - `<pre>, <blockquote>`: pre format: 문장의 그대로를 보여주고 싶을 때 사용. blockquote는 인용문 할 때 사용하는 > 와 같은 것.

  - `<div>` : 블럭으로 공간을 나누고 싶을 때 사용.

    

- 텍스트 관련 요소

  - `<a>` : 하이퍼링크 (a href="url")

  - `<b> vs <strong>` : 텍스트를 굵게 보이게 한다.

    - `<b>` : 텍스트를 굵게
    - `<strong>` : 텍스트를 굵게 + 의미 강조 (시맨틱 태그)

  - `<i> vs <em>`

    - `<i>` : 텍스트 기울임 ( 이텔릭 체)
    - `<em>` : 텍스트 기울임 + 의미 강조

  - `<span>` : 인라인 요소

  - `<br>` : 줄바꿈

  - `<img>` : 이미지

    

- table

  - `<tr>` : 열

  - `<td>` : 데이터

  - `<th>` : 헤드

  - `<thead>` : 테이블 전체의 머릿말

  - `<tbody>` : 테이블 몸통

  - `<tfoot>` : 테이블 밑

  - `<caption>` : 테이블의 설명

  - `<col>`: column을 의미

  - `<colgroup>` : column 그룹화

  - 셀 병합 속성:

    - colspan: 좌우로 병합할 때
    - rowspan: 위아래로 병합할 때
    
  - scope 속성: 주로 th에 적용하며, 가로줄인지 세로줄인지 나타내는 속성

    

- form
  - `<form>은 서버에서 처리될 데이터를 제공하는 역할`
  - `<form>` 기본 속성
    - action: 요청할 주소 (입력된 데이터와 함께)
    - method: http method에 대한 내용. (get/post)
  - `<form>` 태그 내에 `<input>` 태그:
    - 다양한 타입을 가지는 입력 데이터 필드
    - `<label>`: 서식 입력 요소(input)의 캡션
    - `<input>` 태그의 공통 속성:
      - name: id를 입력할 때 입력한 데이터 값이 전달될 때의 이름. 변수명 같은 느낌.
      - placeholder: 입력을 돕기 위한 helptext. 글자가 흐릿하게 적혀있으며 클릭하면 사라진다.
      - required: 필수 입력 요소(입력창을 비워둘 수 없게끔 설정하는 속성)
      - autofocus: 창이 뜨자마자 커서가 활성화되게끔 하는 속성
    - input 유형 (type):
      - input 요소의 동작은 type에 따라 달라진다. 링크 참조 (<a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input">MDN링크</a>)





reference: 

- <a href="https://m.blog.naver.com/PostView.nhn?blogId=pjh445&logNo=220071333957&proxyReferer=https:%2F%2Fwww.google.com%2F">DOM 트리</a>
