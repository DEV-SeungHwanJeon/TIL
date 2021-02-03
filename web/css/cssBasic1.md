# CSS

HTML과 CSS는 별개의 언어를 가지는 각각 다른 언어이다.

CSS는 스타일, 레이아웃 등을 통해 문서(HTML)를 표시하는 방법을 나타낸다.



### CSS의 기본적인 구조:

```css
선택자(Selector) {
    속성(Property): 값(Value);
    속성(Property): 값(Value);
}
```

속성과 값을 합쳐서 선언(Declaration)이라고 한다.



### CSS 정의 방법:

1. 인라인(inline)
   - 해당 태그에 style이라는 속성 명으로 값을 작성한다. 각각의 선언을 기준으로 세미콜론`;` 이 있다. 잘 활용하지 않으며 test용도로 잠깐 사용된다.
2. 내부 참조(embedding) - `<style>`
   - `<head>`안에 `<style>`태그를 이용하여 작성한다. 역시 각각의 선언을 기준으로 세미콜론`;`이 있다.
3. 외부 참조(link file) - 분리된 CSS 파일
   - 외부 CSS 파일을 `<head>`내 `<link>` 태그를 통해 불러오기
   - `<link rel="stylesheet" href="mystyle.css">`
   - 만약 3개의 HTML에 내부참조로 CSS를 정의하고 싶다면 HTML의 p태그에 같은 폰트사이즈와 다른 컬러사이즈를 적용하고싶다면 따로 작성해야한다.
   - 하지만 공통된 속성을 따로 파일을 작성하여 외부참조 적용하면 매우 편하다. 외부참조를 제일 많이 사용한다. 



### 선택자(Selector)

HTML 문서에서 특정한 요소를 선택하여 스타일링 하기 위해서는 반드시 선택자라는 개념이 필요하다.

- 기본 선택자
  - 전체 선택자(*)
  - 타입/요소 선택자(h1, p, a, 등 `태그`자체를 작성)
  - 클래스 선택자(`.`)
  - id 선택자(`#`)
  - 속성 선택자(`[attr]`)
- 결합자(Combinarors). 고급 선택자라고도 부름
  - 자손 결합자(`공백`)
  - 자식 결합자(`>`)
  - 형제 결합자
  - 인접 형제 결합자
- 의사 클래스/요소(pseudo class)
  - 링크, 동적 의사클래스
  - 구조적 의사 클래스, 



### CSS 적용 우선순위

1. 중요도(`!importance`) - 사용시 주의. 절대 0순위. 거의 사용 안함.
2. 우선 순위(specificity)
   1. 인라인 : html 내에 style 속성 작성. `<tag style=" ">`
   2. id선택자 : `#`
   3. class선택자 (속성 선택자 pseudo-class) : `.`
   4. 요소(태그) 선택자 (pseudo element) : `태그`
3. 소스 순서: 가장 밑에 있는 코드가 적용된다.



### CSS 상속:

- 상속이 되는 속성
  - text관련 요소 (font, color, text-align)
  - opacity
  - visibility
  - 등등
- 상속이 되지 않는 속성
  - box model 관련 요소(width, height, margin, padding, border, box-sizing, display)
  - position 관련 요소(position, top/right/bottom/left, z-index)
  - 등등



### CSS 단위:

- 크기 단위:
  - px (픽셀) : 디바이스의 픽셀 크기를 기준으로 한 크기. 디바이스에 따라 픽셀 크기가 다르므로 보이는 크기가 다르다.
  - %: 부모 요소의 크기에 대한 퍼센트이다.
  - em: 배수 단위, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐. 부모 사이즈에 영향을 받는다. 부모의 배수로 사이즈를 지정할 때 사용한다.
  - rem: 최상위 요소(html)의 사이즈를 기준으로 배수 단위를 가진다. (기본사이즈: 16px). 가장 자주 사용되는 단위이다.
  - Viewport 기준 단위 : 화면 크기에 따른 크기 단위. 반응형 웹을 만들 때 활용된다. (vw, vh, vmin, vmax). 예를 들어 브라우저 높이 값이 900px일 때 1vh는 9px이다. (1/100)
- 색상 단위:
  - 색상 키워드
  - RGB 색상
    - `#` + 16진수 표기법
    - rgb(), rgba() 함수형 표기법 (a는 투명도)
  - HSL 색상
    - 색상, 채도, 명도
    - hsl(), hsla() 함수형 표기법



### CSS 문서 표현:

- 텍스트:
  - 변형 서체
  - 자간, 단어 간격, 행간, 들여쓰기
  - 기타 꾸미기
- 컬러(color), 배경(background-image, background-color)
- 목록 꾸미기
- 표 꾸미기



### CSS Box model

모든 HTML 요소는 사각형으로 이루어져 있다.

Box model 구성:

- Margin: 테두리 바깥의 외부 여백. 배경색을 지정할 수 없다. (상하좌우)
- Border: 테두리. (상하좌우)
- Padding: 테두리 안쪽의 내부 여백 요소에 적용된 배경색. 이미지는 padding까지 적용 (상하좌우)
- Content: 글이나 이미지 등 요소의 실제 내용



margin과 padding은 shorthand를 통해서 표현 가능하다.

```css
.margin-1 {
margin: 10px;
}  상하좌우

.margin-2 {
margin: 10px, 20px;
}  상하/좌우

.margin-3 {
margin: 10px, 20px, 30px;
}   상/좌우/하

.margin-4 {
margin: 10px, 20px, 30px, 40px;
}   상/우/하/좌 (왼쪽 시계방향)
```

border도 마찬가지로 shorthand가 있다.



### box-size:

기본적으로 CSS에서 모든 요소의 box sizing 설정값은 content-box이다. content-box 설정에서는 테두리의 영역을 제외한 순수 content 영역만을 box로 지정한다. 하지만 우리는 테두리의 영역까지를 고려하고 싶다. 그래서 box-sizing이라는 속성에 border-box라고 설정하여 테두리 영역까지를 box로 지정하게 한다.



### 마진 상쇄:

인접 형제 요소간의 margin이 겹쳐서 더 큰 마진만 적용되는 것으로 보이는 현상이다. 위쪽 box에는 margin, 아래 box에는 padding을 적용하면 마진 상쇄를 회피할 수 있다.



### CSS-Display

모든 요소는 사각형(box-model)이고, 어떻게 보여지는지(display)에 따라서 달라진다.

- display: block
  - 줄 바꿈이 일어나는 요소이다.
  - 화면 크기 전체의 가로 폭을 차지한다.
  - 블록 레벨 요소안에 인라인 레벨 요소가 들어갈 수 있다.
  - `<div> / <ul>, <ol>, <li> / <p> / <hr> / <form>` 태그 등등이 있다.
  - 수평 정렬은 `margin-right: auto;` 처럼 적용한다.
- display: inline
  - 줄 바꿈이 일어나지 않는, 행의 일부 요소이다.
  - content의 너비만큼 가로 폭을 차지한다.
  - width, height, margin-top, margin-bottom을 지정할 수 없다. content의 크기만큼만 공간을 점유하기 때문이다.
  - 상하 여백은 line-height로 지정한다.
  - `<span> / <a> / <img> / <input>, <label> / <b>, <em>, <i>, <strong>` 태그 등등이 있다.
  - 수평 정렬은 `text-align: left;`처럼 적용한다.
- display: inline-block
  - block과 inline 레벨 요소의 특징을 모두 가진다.
  - inline 처럼 한 줄에 표시 가능하며,
  - block 처럼 width, height, margin 속성을 모두 지정할 수 있다.
- display: none
  - 해당 요소를 화면에 표시하지 않는다. (공간조차 사라진다.)
  - 비슷하게 visibility속성을 visibility: hidden으로 설정하면 해당 요소가 공간은 차지하나 화면에 표시만 하지 않는다.



### CSS Position:

position 속성은 문서 상에서 요소를 배치하는 방법을 지정한다.

- static ( `position: static;` )
  - 디폴트 값이다. (기준 위치)
  - 기본적인 요소의 배치 순서에 따른다. (좌측 상단)
  - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치된다.
  - 사용 가능한 속성: height, width, background-color, line-height, text-align, 등등

아래의 position 속성 들은 좌표 속성(top, bottom, left, right)를 사용하여 이동이 가능하다(음수 값도 가능)

- relative (`position: relative;`)
  - static 위치를 기준으로 이동한다. (상대 위치)
- absolute ( `position: absolute;` )
  - 가장 가까이 있는 static이 아닌 부모/조상 요소를 기준으로 이동(절대 위치)
  - 만약 부모/조상 요소들의 position이 static일 경우에는 body까지 올라갈 수도 있다.
  - absolute를 사용할 때는 부모/조상 요소에 relative로 기준점을 정하고 사용하자.
- fixed ( `position: fixed;` )
  - 부모 요소와 관게 없이 브라우저를 기준으로 이동한다. (고정 위치)
  - 스크롤 시에도 항상 같은 곳에 위치한다.
- sticky ( `position: sticky;` )
  - relative와 fixed를 합친 느낌이다.
  - 화면에서는 relative처럼 특정 위치에 위치하고 있다.
  - 스크롤을 내려서 sticky 요소가 화면에서 사라지려고 하면 fized처럼 스크롤 시에도 항상 같은 곳에 위치하게되면서 같이 내려온다.
  - dl, dt, dd와 함께 활용하면 스크롤 시에도 내려오는 리스트를 만들 수 있다.









