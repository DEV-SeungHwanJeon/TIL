# Numpy_Basic_Abstract1

목차:

- 변수
- 



## Numpy

파이썬에서 행렬 계산을 편하게 하기 위해 만들어진 라이브러리.





### 명령어

np.array()

```python
my_list = [1,2,3,4]
my_array = np.array(my_list)
my_2darray = np.array([[1,2,3],[4,5,6]])

my_array[1] # 1의 idx를 가진 값들 반환
my_array[0:2] # 0과 1의 idx를 가진 값들 반환
my_2darray[:,0] # [rows, columns]으로 인덱싱

my_array > 3
# array([False, False, False, True])

my_array * 2
# array([2, 4, 6, 8])

my_array + np.array([5, 6, 7, 8])
# array([6, 8, 10, 12])

my_array.shape
np.append(other_array)
np.insert(my_array, 1, 5)
np.delete(my_array,[1])
np.mean(my_array)
np.median(my_array)
my_array.corrcoef()
np.std(my_array)
```



np.std()

np.substract()

np.add()

np.divide()

np.multiply()

np.exp()

np.sqrt()

np.sin()

np.cos()

np.log

np.copy()

np.zeros()

np.ones()

np.arange()

np.linspace()

np.full()

np.eye()

np.empty()

np.save()

np.load()

np.loadtxt()

np.genfromtxt()

np.savetxt()

np.append()

np.insert()

np.delete()

np.concatenate()

np.vstack()

np.hstack()

np.hsplit()

np.vsplit()

np.random.rand()

