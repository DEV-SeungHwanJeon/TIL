# 페이지네이터

django paginator로 검색한다.

Using paginator in a view function에 가보면 코드가 있다.

- 메서드: Paginator(전체 쿼리셋, 몇개씩끊어서볼지)
- from django.core.paginator import Paginator
- 이후 html에서 articles로 넘어오는 걸 page_obj로 바꾸고 장고 공식 문서의 예시 html코드를 복붙한다.
- 장고 pagination bootstrap을 검색하면 html을 예쁘게 꾸며줄 수 있다.
  - `pip install django-bootstrap-pagination`
  - 홈페이지: `https://pypi.org/project/django-bootstrap-pagination/`





무한 스크롤: django-infinite scroll pagination (자바스크립트가 들어간다)