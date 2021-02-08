# git basic

`cd 경로`: 로컬 컴퓨터의 원하는 디렉토리로 이동 ex) `cd C:\Users\tmd43\TIL`



### git 명령어:

`git init`: 현재 디렉토리를 기준으로 관리하겠다는 뜻

`git config --global --list`: global 설정값을 확인하는 명령어

`git config --global user.email 이메일주소` : 유저 이메일을 설정하는 명령어. ex) `git config --global user.email tmd4347@gmail.com`

`git config --global user.name 이름` : 유저 이름을 설정하는 명령어. ex) `git config --global user.name DEV-SeungHwanJeon`

`git status` : 현재 git의 상태를 확인하는 명령어

`git add .` : 바뀐 상황을 커밋할 목록에 add 하는 명령어. add 뒤에 . 을 붙이면 현재 디렉토리 기준으로 바뀐 모든 것을 add 하겠다는 뜻.

`git add <파일이름>` : 해당 파일만 add하겠다는 명령어

`git commit -m "메세지"` : 모여진 add들에 메세지를 붙여서 commit  ex) `git commit -m "first commit"`

`git remote add origin git레파지토리주소` :  본인의 레파지토리(github 원격저장소)와 연동하겠다는 뜻. ex) `git remote add origin https://github.com/DEV-SeungHwanJeon/TIL.git`  깃레파지토리주소는 본인 깃허브 사이트의 레파지토리에 들어가서 초록색 code 버튼을 누르면 나옵니다.

![image-20210117150653437](git_basic.assets/image-20210117150653437.png)

`git push -u origin master` 모여진 commit들을 master에 push 하겠다는 뜻.

`git pull origin master` : git 레파지토리의 내용을 모두 받겠다는 뜻.



<git Bash 명령어들>
#HWS/0118에서 진행. 완전히 목록에서 삭제하기 위하여 다음과 같은 명령어로 삭제함.
ls -a
git rm --cached .ipynb_chechpoints -rf    # 하나만 삭제하고 싶으면 -rf을 빼고 치면 됨
cd ..
git status



## reference:

https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95



