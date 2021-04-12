# 패턴매칭

## 고지식한 패턴 검색 알고리즘

본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일이 비교하는 방식으로 동작





## 스택







## 메모이제이션

이전에 계산한 값을 메모리에 저장하여 매번 다시 계산하지 않도록 하여 전체적인 실행속도를 빠르게 하는 기술이다.



피보나치 수열에서 fibo(n)의 값을 계산하자마자 저장하면, 실행시간을 O(n)으로 줄일 수 있다.



```python
# memo를 위한 배열을 할당하고, 모두 0으로 초기화 한다
# memo[0]을 0으로 memo[1]은 1로 초기화한다

def fibo(n):
    global memo
    if n >= 2 and len(memo) <= n:
        memp.append(fibo(n-1) + fibo(n-2))
    return memo[n]

memo [0, 1]
```



## 동적 프로그래밍

피보나치 수 DP 적용

1. 문제를 부분 문제로 분할
   - fibo(n) = fibo(n-1) + fibo(n-2)
   - fibo(n-1) = fibo(n-2) + fibo(n-3)
   - fibo(2) = fibo(1) + fibo(0)
   - fibo(n)은 fibo(n-1), fibo(n-2),  ... fibo(2), fibo(1), fibo(0)의 부분집합으로 나뉜다. 
2. 부분 문제로 나누는 일을 끝냈으면 가장 작은 부분 문제부터 해를 구한다.
3. 결과는 테이블에 저장하고, 테이블에 저장된 부분 문제의 해를 이용하여 상위 문제의 해를 구한다.

```python
def fibo(n):
    f = [0, 1]
    
    for i in range(2, n+1):
        f.append(f[i-1] + f[i-2])
        
    return f[n]
```





## DFS(깊이 우선 탐색)

시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 깊이 탐색해가다가 더 이상 갈 곳이 없게 되면, 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 되돌아와서 다른 방향의 정점으로 탐색을 계속 반복하여 결국 모든 정점을 방문하는 순회방법

가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 깊이 우선 탐색을 반복해야 하므로 후입선출 구조의 스택 사용



탐색 과정

1. 시작 정점 v를 결정하여 방문

2. 정점 v에 인접한 정점 중에서

   2-1 방문하지 않은 정점 w가 있으면, 정점 v를 스택에 push하고 정점 w를 방문한다. 그리고 w를 v로 하여 다시 2번을 반복.

   2-2 방문하지 않은 정점이 없으면, 탐색의 방향을 바꾸기 위해서 스택을 pop하여 받은 가장 마지막 방문 정점을 v로 하여 다시 2번을 반복.

3. 스택이 공백이 될 때까지 2번을 반복



```python
'''
7 8
1 2 1 3 2 4 2 5 4 6 5 6 6 7 3 7
'''
def dfs(v): # v : 시작정점
    # visited체크: 하고픈 일 해라 (출력)
    visited[v] = 1
    print(v, end= " ")

    # 시작정점 v의 인접한 모든 정점 for 돌리기
    # 인접정점(w)가 방문하지 않았으면
    for w in range(V+1):
        if adj[v][w] == 1 and visited[w] == 0 :

            # 다시 dfs(w) 재귀 호출
            dfs(w)

V, E = map(int, input().split())
tmp = list(map(int, input().split()))
adj = [[0] * (V+1) for _ in range(V+1)]  # 인접행렬 초기화
visited = [0] * (V+1)

# 입력
for i in range(E):
    s, e = tmp[2*i], tmp[2*i+1]
    adj[s][e] = 1
    adj[e][s] = 1


for i in range(V+1):
    print("{} {}".format(i, adj[i]))

dfs(1)
```







## 퀵 정렬

```python
def quickSort(a, begin, end):
    if begin < end :
        p = partition(a, begin, end)
        quickSort(a, begin, p-1)
        quickSort(a, p+1, end)
        
        
def partition(a, begin, end):
    pivot = (begin + end) // 2
    L = begin
    R = end
    while L < R:
        while(a[L] < a[pivot] and L<R) : L += 1
        while(a[R] < a[pivot] and L<R) : R -= 1
        if L < R :
            if L == pivot : pivot = R
            a[L], a[R] = a[R], a[L]
    a[pivot], a[R] = a[R], a[pivot]
    return R
```





