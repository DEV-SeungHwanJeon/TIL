# Team Project를 위한 repository 및 branch만들기

우선 기본적인 git 명령어를 복습

### git 명령어:

`git init`: 현재 디렉토리를 기준으로 관리하겠다는 뜻

`git clone `

`git config --global --list`: global 설정값을 확인하는 명령어

`git config --global user.email 이메일주소` : 유저 이메일을 설정하는 명령어. ex) `git config --global user.email tmd4347@gmail.com`

`git config --global user.name 이름` : 유저 이름을 설정하는 명령어. ex) `git config --global user.name DEV-SeungHwanJeon`

`git status` : 현재 git의 상태를 확인하는 명령어

`git remote add origin git레파지토리주소` :  본인의 레파지토리(github 원격저장소)와 연동하겠다는 뜻.



___

`git add .` : 바뀐 상황을 커밋할 목록에 add 하는 명령어. add 뒤에 . 을 붙이면 현재 디렉토리 기준으로 바뀐 모든 것을 add 하겠다는 뜻.

`git add <파일이름>` : 해당 파일만 add하겠다는 명령어

`git commit -m "메세지"` : 모여진 add들에 메세지를 붙여서 commit  ex) `git commit -m "first commit"`

`git push -u origin master` 모여진 commit들을 master에 push 하겠다는 뜻.

`git pull origin master` : git 레파지토리의 내용을 모두 받겠다는 뜻.

`git diff` : 아직 스테이징(add), 커밋(commit)되지 않은 작업 디렉토리의 untracked 파일의 변경사항을 보여줌

`rm 파일.확장자` : command 명령어로 파일을 삭제한다.

`git rm 파일.확장자` : 작업 디렉토리에 있는 tracked 파일을 삭제. `git commit -m '파일.확장자를 삭제함'` 처럼 커밋을 해야 파일이 온전히 삭제된다.

`git chechout -- 파일.확장자` : 작업 디렉토리에 있는 변경사항들을 취소할 수 있다. (삭제 파일 복구)



___

브랜치 만들기

`git branch 브랜치이름` : 브랜치 생성

`git log --oneline --decorate` : 브랜치가 어떤 커밋을 가리키는지 확인

`git checkout testing` : testing 브랜치로 이동



각각의 브랜치에서 commit 하면서 독립적으로 작업 내용을 쌓다가, 때가 되면 두 브랜치를 Merge 한다.



## reference:

https://mylko72.gitbooks.io/git/content/workflow.html



이건 뭐지:

git branch -m main master
git fetch origin
git branch -u origin/master master