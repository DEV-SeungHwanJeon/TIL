# 4828. Min Max

N개의 양의 정수에서 가장 큰 수와 가장 작은 수의 차이를 출력하시오.


**[입력]**

첫 줄에 테스트 케이스의 수 T가 주어진다. ( 1 ≤ T ≤ 50 )

각 케이스의 첫 줄에 양수의 개수 N이 주어진다. ( 5 ≤ N ≤ 1000 )

다음 줄에 N개의 양수 ai가 주어진다. ( 1 ≤ ai≤ 1000000 )

**[출력]**

각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.

```python
입력
3
5
477162 658880 751280 927930 297191
5
565469 851600 460874 148692 111090
10
784386 279993 982220 996285 614710 992232 195265 359810 919192 158175

출력
#1 630739
#2 740510
#3 838110
```



풀이:

```python
import sys
sys.stdin = open("4828_input.txt", "r") # input 파일 불러오기

T = int(input()) # 맨 첫줄의 test case 갯수 (3)
for test_case in range(1, T+1): # 각 test case 마다
    N = int(input())   # 양수의 갯수 N
    arr = list(map(int, input().split())) # N개의 양수를 띄어쓰기를 구분자로 int로 형변환하여 list에 저장한다.
    nummin, nummax = arr[0], arr[0]  # arr의 첫번째 값을 min, max의 기준으로 잡는다.
    for i in range(1,len(arr)):  # 이미 arr의 첫번째 값을 기준으로 사용하였으니 두번째 값부터 min, max의 기준값과 비교한다.
        if nummin > arr[i] :  # 만약 값을 비교하여 min보다 작으면
            nummin = arr[i]  # min을 최신화한다.
        if nummax < arr[i] :  # 만약 값을 비교하여 max보다 크면
            nummax = arr[i]  # max를 최신화한다.
	
    # 결과로 test_case와 min, max의 차이를 도출한다.
    print("#{} {}".format(test_case, nummax - nummin))
```