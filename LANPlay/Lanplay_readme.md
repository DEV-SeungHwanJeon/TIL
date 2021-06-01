# SBOX 회의록 210601

## Project : LANPlay



### 현재 상황

- 백엔드 (Django + AWS S3)
  - 장고를 로컬에서 마이그레이트 해도 SQLite3가 아닌 서버 몽고 DB로 붙음. 수정하자
  - config, account 말고 나머지 다 삭제
  - settings.py를 저장해두기.



- 프론트엔드 (Vue.js) 
  - 처음부터 다시 하자.



### 앞으로의 방향 (Django + Vue 하기)



**Django**

- 이미지를 저장할 때 Mongo DB가 좋은 이유를 찾아보기.
  - 권장되는 저장 방식이 무엇인지 찾아보기. 
    - 웹 RTC에서 받아온 이미지를 장고에 저장
      - AWS S3에 대해서 공부하기 ( 이미지를 저장하기 위해 )
      - **Base64** VS **ImageField**
        - 속도면에서 base64가 더 유리한지,
        - 또는 django에 얼만큼의 string 길이까지 저장할 수 있는지 알아보기.
          - 만약 base64로 한다면 .pickle 파일로 저장해서 옮기기도 용이해짐!!
    - 일단 생각해둔 설계대로 SQL 설계를 먼저 하고 난 후 프로젝트를 진행하면서 NOSQL에 어떤 데이터를 저장해야 나중에 Join 없이 최적화할 수 있는지를 생각
      - 이후 NOSQL 붙이기 (Mongo DB)
        - 장고에서 makemigrations를 하면 SQL에 적용하듯이 생성되는데 이게 NOSQL에도 유효하게 연동되는지 알아보기



**Vue**

- 웹 RTC를 통한 다자간 실시간 화상통화 및 실시간 채팅
  - 라이브러리 : Vue Media Recorder 활용
- 디자인
  - 맨 처음 화면에 게시판처럼 방번호, 이름 보이게
  - 방에 들어가면
  - 사용자 영상이 뜨는 div는 components로 만들어두기 (이름 : userVideo)





### 각자 할 일

- 박진형 : 

  1. 일단 몽고DB놔두고, 도커로 MYSQL을 붙인다.

  2. django 모델링, HTTP Method, REST API, Foreign Key

     

- 박상락 :
  1. 웹 RTC 복습 및 6명 동시 화상 연습하기



- 전승환 :
  1. Django와 Vue 기본 베이스 생성해두기
  2. Vue 라이프사이클 공부하기 ( 회원가입, 방 만들기 하면서 )



