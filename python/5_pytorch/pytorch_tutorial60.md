# pytorch



`torch.empty` : # 초기화되지 않은 5x3 행렬을 생성

`torch.rand()` : 무작위로 초기화된 행렬을 생성

`x = torch.zeros(5, 3, dtype=torch.long)`\# dtype이 long이고 0으로 채워진 행렬을 생성한다.

`x = torch.tensor([5.5, 3]) `\# 데이터로부터 tensor를 직접 생성한다.



\# 기존 tensor를 바탕으로 새로운 tensor를 만든다.

\# 이 method는 사용자로부터 새로운 값을 제공받지 않는 한, 입력 tensor의 속성들(ex. dtype)을 재사용한다.

`x = x.new_ones(5, 3, dtype=torch.double)` # new_* 메소드는 크기를 받는다

`x = torch.randn_like(x, dtype=torch.float)` # dtype을 오버라이드 한다.

`print(x.size())` # 행렬의 크기를 구한다. 튜플타입이다.



```python
# 덧셈 연산
x = torch.tensor([5.5, 3])
x = x.new_ones(5, 3, dtype=torch.double) # new_* 메소드는 크기를 받는다
x = torch.randn_like(x, dtype=torch.float) # dtype을 오버라이드 한다.

y = torch.rand(5,3)
print(x)
print(y)
# 행렬의 각 원소들의 합
print(x+y) # 같은 코드 : print(torch.add(x,y))

# 덧셈: 결과 tensor를 인자로 제공
result = torch.empty(8,4)
print(result)

torch.add(x, y, out=result)
print(result)

# 덧셈: 바꿔치기(in-place) 방식
# y에 x 더하기
y.add_(x)
print(y)

# 바꿔치기 방식으로 tensor의 값을 변경하는 연산 뒤에는 `_`가 붙는다.
# x.copy_(y)
# x.t_()
```



`print(x[:,1])` # Numpy스러운 인덱싱도 가능하다.



```python
# 크기 변경: tensor의 크기(size)나 모양(shape)을 뱐경하고 싶다면 torch.view를 사용한다.
x = torch.randn(4,4)
y = x.view(16)
z = x.view(-1, 8) # -1은 다른 차원에서 유추한다.
print(x.size(), y.size(), z.size())
```



```python
# 만약 tensor에 하나의 값만 존재한다면, .item()을 사용하면 숫자 값을 얻을 수 있다.
x = torch.randn(1)
print(x)
print(x.item())
```

