# algorithm_list

## 알고리즘 : 

유한한 단계를 통해 문제를 해결하기 위한 절차나 방법이다.

좋은 알고리즘의 조건:

- 정확성 : 정확하게 동작
- 작업량 : 적은 연산
- 메모리 사용량 : 적은 메모리
- 단순성 : 단순함
- 최적성 : 개선할 여지 없이 최적화 되었는가



## 완전검색(Brute-force)

모든 경우의 수를 테스트한 후, 최종 해법을 도출한다.

경우의 수가 상대적으로 작을 때 유용하다.



### 순열(Permutation)

서로 다른 것들 중 몇개를 뽑아서 한 줄로 나열하는 것







## 그리디(탐욕 알고리즘)

최적해를 구하는 데 사용되는 근시안적 방법

결정해야 하는 순간마다 최적이라고 생각되는 것을 선택해 나가는 방식으로 진행하여 최종적인 해답에 도달한다.

결정들은 지역적으로 최적이지만 만들어진 최종적인 해답이 최적이라는 보장이 없다.



동작 과정

1. 해 선택 : 현재 상태에서 부분 문제의 최적 해를 구한 뒤, 이를 부분집합에 추가한다
2. 실행 가능성 검사 : 새로운 부분해 집합이 문제의 제약 조건을 위반하지 않는지를 검사하여 실행 가능한지 확인한다. 
3. 해 검사 : 새로운 부분해 집합이 문제의 해가 되는지를 확인한다. 아직 전체 문제의 해가 완성되지 않았다면 1번부터 다시 시작한다.



시간 복잡도 : O(n^2)

## 버블정렬

인접한 두 개의 원소를 비교하며 자리를 계속 교환하는 방식

정렬 과정

1. 첫 번째 원소부터 인접한 원소끼리 계속 자리를 교환하면서 맨 마지막 자리까지 이동한다.
2. 1단계가 끝나면 가장 큰 원소가 마지막 자리로 정렬된다.
3. 반복한다

```python
def BubbleSort(a) : # a = 리스트
    for i in range(len(a)-1, 0, -1) :
        for j in range(0, i) :
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
```



## 카운팅정렬

항목들의 순서를 결정하기 위해 집합에 각 항목이 몇 개씩 있는지 세는 작업을 하여, 선형 시간에 정렬하는 효율적인 알고리즘



제한 사항:

- 정수나 정수로 표한할 수 있는 자료에 대해서만 적용 가능 : 각 항목의 발생 횟수를 기록하기 위해, 정수 항목으로 인덱스 되는 카운트들의 배열을 사용하기 때문이다.
- 카운트들을 위한 충분한 공간을 할당하려면 집합 내의 가장 큰 정수를 알아야 한다.



시간 복잡도 : O(n+k) : n은 리스트 길이, k는 정수의 최대값



정렬 과정:

1. data에서 각 항목의 발생 횟수를 세고, 배열을 만들어서 정수 항목들로 직접 인덱스되는 카운트횟수를 저장한다. ( 리스트 "counts" 생성)
2. 정렬된 집합에서 각 항목의 앞에 위치할 항목의 개수를 반영하기 위해 counts의 원소를 조정한다. (  "counts"를 누적합 시킨다 )
3. data를 돌면서 해당 값을 인덱스로 하는 counts의 값에서 1을 빼고,
4. 1을 뺀 그 값을 인덱스로 하여 Temp[인덱스]에 해당 data값을 넣어준다.



```python
def Counting_Sort(A, B, k):
    # A : 입력 배열 (1 to k). data
    # B : 정렬된 배열. Temp
    # k : len(data)
    # C : 카운트 배열. counts
    
    C = [0] * k
    
    # data를 돌면서 카운팅
    for i in range(0, k):
        C[A[i]] += 1
        
    # counts를 누적합
    for i in range(1, len(C)):
        C[i] += C[i-1]
        
    # data를 뒤에서부터 돌면서 B에 값 넣기
    for i in range(k-1, -1, -1):
        C[A[i]] -= 1
        B[C[A[i]]] = A[i]
```



## 이차원 배열 순회

행 우선 순회

```python
for i in range(len(Array)):
    for j in range(len(Array[i])):
        Array[i][j]
```



열 우선 순회

```python
for j in range(len(Array[0])):
    for i in range(len(Array)):
        Array[i][j]
```



지그재그 순회 ( ㄹ자 순회 )

```python
for i in range(len(Array)):
    for j in range(len(Array[0])) :
        Array[i][j+(len(Array[0])-1-j)*(i%2)]
```



델타 검색

```python
# 상, 하, 좌, 우
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0] 

for x in range(len(ary)):
    for y in range(len(ary[x])):
        for i in range(4):
            testX = x + dx[i]
            testY = y + dy[i]
            ary[testX][testY]
```



전치행렬

```python
for i in range(len(arr)):
    for j in range(len(arr[0])):
        if i < j :
            arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
```



## 부분집합 생성

부분집합의 수 : 2^n 개



비트연산자를 활용해보자.

- `&` : 비트 단위로 AND 연산을 한다.
- `|` : 비트 단위로 OR 연산을 한다.

- `<<` : 피연산자의 비트 열을 왼쪽으로 이동시킨다.
- `>>` : 피연산자의 비트 열을 오른쪽으로 이동시킨다.



`1<<n` : 2^n. 즉, 원소가 n개일 경우의 모든 부분집합의 수를 의미한다.

`i&(1<<j)` : i의 j번째 비트가 1인지 아닌지를 리턴한다.



```python
arr = [1,2,3,4,5,6,7,8]
n = len(arr) # 원소의 갯수

for i in range(1<<n): # 1<<n : 부분집합의 갯수
    for j in range(n+1): # 원소의 수만큼 비트를 비교함
        if i & (1<<j): # i의 j번째 비트가 1이면 j번째 원소 출력
            print(arr[j], end=", ")
    print()
print()
```



## 검색(search)

검색 : 저장되어 있는 자료 중에서 원하는 항목을 찾는 작업. 목적하는 탐색 키(자료를 구별하여 인식할 수 있는 키)를 가진 항목을 찾는 것



검색의 종류

- 순차 검색(sequential search)
- 이진 검색(binary search)
- 해쉬(hash)



### 순차 검색

일렬로 되어있는 자료를 순서대로 검색하는 방법.

단순하여 구현이 쉽지만, 검색 대상의 수가 많은 경우에는 수행시간이 급격히 증가하여 비효율적이다.



**정렬되어 있지 않은 경우**

검색 과정:

1. 첫번째 원소부터 순서대로 검색 대상과 키 값이 같은 원소가 있는지 비교하며 찾는다.
2. 키 값이 동일한 원소를 찾으면 그 원소의 인덱스를 반환
3. 자료구조의 마지막에 이를 때까지 검색 대상을 찾지 못하면 검색 실패

시간복잡도 : O(n)

```python
def sequentialSearch(a, n, key):
    i = 0
    while i<n and a[i] != key :
        i = i+1
    if i<n : return i
    else: return -1
```



**정렬되어있는 경우**

검색 과정:

1. 자료가 오름차순으로 정렬된 상태에서 검색을 실시한다고 하자.
2. 자료를 순차적으로 검색하면서 키 값을 비교하며, 원소의 키 값이 검색 대상의 키 값보다 크면 찾는 원소가 없다는 것이므로 더 이상 검색하지 않고 검색을 종료한다.

시간복잡도 : O(n)

```python
def sequentialSearch2(a, n, key):
    i = 1
    while i<n and a[i] < key :
        i = i+1
    if i<n and a[i] == key : return i
    else: return -1
```



### 이진 검색 (binary search)

자료의 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속 진행하는 방법.

자료가 정렬된 상태여야 하며, 목적 키를 찾을 때까지 이진 검색을 순환적으로 반복 수행함으로써 검색 범위를 반으로 줄여가면서 보다 빠르게 검색을 수행한다.



검색 과정:

1. 자료의 중앙 원소를 고른다.
2. 중앙 원소의 값과 목표 값을 비교한다.
3. 작으면 자료의 왼쪽 반에 대해서 새로 검색을 수행, 크면 오른쪽 반에 대해서 새로 검색을 수행한다.
4. 1~3을 반복한다.



```python
def binarySearch(a, key):
    start = 0
    end = len(a)-1
    while start <= end:
        middle = (start + end)/2
        if a[middle] == key: # 검색 성공
            return true
        elif a[middle] > key:
            end = middle -1
        else:
            start = middle+1
    return false # 검색 실패
```



재귀로 구현

```python
def binarySearch(a, low, high, key):
	if low > high : # 검색 실패
        return False
    else:
        middle = (low, high)/2
        if a[middle] == key: # 검색 성공
            return true
        elif a[middle] > key:
            return binarySearch2(a, low, middle-1, key)
        else:
            return binarySearch2(a, middle+1, high, key)
```



## 셀렉션 알고리즘

저장되어 있는 자료로부터 k번째로 큰 혹은 작은 원소를 찾는 방법

- 최소값, 최대값, 중간값을 찾는 알고리즘을 의미하기도 함



선택 과정

1. 정렬 알고리즘을 이용하여 자료 정렬하기
2. 원하는 순서에 있는 원소 가져오기



k번째로 작은 원소를 찾는 알고리즘

- 1 ~ k 번째까지 작은 원소들을 찾아 배열의 앞쪽으로 이동시키고, 배열의 k번째를 반환한다.

- k가 비교적 작을 때 유용하며 O(kn)의 수행시간을 필요로 한다.

- ```python
  def select(list, k):
      for i in range(0, k):
          midIndex = i
          for j in range(i+1, len(list)):
              if list[midIndex] > list[j] :
                  midIndex = j
          list[i], list[midIndex] = list[midIndex], list[i]
      return list[k-1]
  ```



## 선택 정렬

주어진 자료들 중 가장 작은 값의 원소부터 차례대로 선택하여 위치를 교환하는 방식

- 셀렉션 알고리즘을 전체 자료에 적용한 것



정렬 과정

1. 주어진 리스트 중에서 최소값을 찾는다.
2. 그 값을 리스트의 맨 앞에 위치한 값과 교환한다.
3. 맨 처음 위치를 제외한 나머지 리스트를 대상으로 위의 과정을 반복한다.



시간 복잡도 : O(n^2)



```python
def SelectionSort(a):
    n = len(a)
    for i in range(0, n-1):
      	min_idx = i
		for j in range(i+1, n):
	        if a[min_idx] > a[j]:
        	    min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
```

