# 6. 학습 관련 기술들

`#weight최적값참색`, `#weight초기화`, `#하이퍼파라미터설정`, `#오버피팅예방`

## 6.1 매개변수 갱신

최적화: 손실 함수의 값을 가능한 낮추는 매개변수 즉, 매개변수의 최적값을 찾는 것

지금까지는 최적의 매개변수 값을 찾는 데에 매개변수의 기울기(미분)을 구하여 기울어진 방향(-)으로 매개변수 값을 갱신하는 방법을 사용했다. (확률적 경사 하강법(SGD))

Optimizer: 최적화를 실행하는 방식 ( ex. SGD, RMSProp, Adam)

### 6.1.2 확률적 경사 하강법(SGD)

 ![image-20210220204300293](CHAPTER6.assets/image-20210220204300293.png)

- "W에 대한 손실 함수의 기울기 * 학습률" 값을 빼서 W를 갱신

- 기울어진 방향으로 일정 거리만 가겠다.

  ```python
  class SGD:
      def __init__(self, lr=0.01):
          self.lr = lr
          
      def update(self, params, grads):
          for key in params.keys():
              params[key] -= self.lr * grads[key]
              
  # params.keys() = ['W1', 'W2','b1','b2']
  # self.params['W1'] = weight_init_std * np.random.randn(input_size, hidden_size)
  # self.params['b1'] = np.zeros(hidden_size)
  
  # grads.keys() = ['W1', 'W2','b1','b2']
  # grads['W1'] = numerical_gradient(loss_W, self.params['W1'])
  # grads['b1'] = numerical_gradient(loss_W, self.params['b1'])
  ```



### 6.1.3 SGD의 단점:

- 함수의 기울기의 크기가 축마다 다른데, 완만한 기울기는 업데이트가 잘 되지 않는다. 따라서 최적 위치에 도달하기 힘들다.

- 방향에 따라 기울기가 달라지는 함수(비등방성 함수)에서는 탐색 경로가 비효율적이다.

- 무작정 기울어진 방향으로 진행하는 방식의 한계. 

- 기울어진 방향이 본래의 최솟값과 다른 방향을 가리키는 문제도 존재. 

  ![image-20210220210223821](CHAPTER6.assets/image-20210220210223821.png)



SGD에 의한 최적화 갱신 경로

![image-20210220212854358](CHAPTER6.assets/image-20210220212854358.png)

### 6.1.4 모멘텀 (Momentum)

`#SGD에 관성 추가`

 ![image-20210220210356125](CHAPTER6.assets/image-20210220210356125.png)

v : 물리에서 말하는 속도에 해당하는 변수

```python
class Momentum:
    def __init__(self, lr=0.01, momentum=0.9):
        self.lr = lr
        self.momentum = momentum
        self.v = None
        
    def update(self, params, grads):
        if self.v is None:
            self.v = {}
            for key, val in params.items():
                self.v[key] = mp.zeros_like(val)
                
        for key in params.keys():
            self.v[key] = self.momentum*self.v[key] - self.lr*grads[key]
            params[key] += self.v[key]
```

![image-20210220212721534](CHAPTER6.assets/image-20210220212721534.png)

SGD와 비교하면 지그재그의 정도가 덜하다.

x축의 힘이 작지만 방향이 같기 때문에 한 방향으로 일정하게 가속하기 때문이다.

반면 y축의 힘이 커서 위아래로 반갈아가며 요동치기 때문에 y축 방향의 속도는 안정적이지 못하다.

전체적으로는 SGD보다 x축 방향으로 빠르게 다가가 지그재그 움직임이 줄어들었다.



### 6.1.5 AdaGrad

각각의 매개변수에 대한 맞춤형 학습률을 만들며 학습을 진행한다.

 ![image-20210220225609918](CHAPTER6.assets/image-20210220225609918.png)

h : 기존 기울기 값을 제곱하여 더해준 값.

매개변수를 갱신할 때 1 / (루트 h) 를 곱하여 학습률을 조정한다.

매개변수가 움직인 정도(원소마다)가 크면 학습률이 낮아진다.

또한 과거의 기울기를 제곱하여 계속 더해가므로 학습을 진행할수록 갱신되는 정도가 약해진다. 

```python
class AdaGrad:
    def __init__(self, lr=0.01):
        self.lr = lr
        self.h = None
        
    def update(self, params, grads):
        if self.h is None:
            self.h = {}
            for key, val in params.items():
                self.h[key] = np.zeros_like(val)
            
        for key in params.keys():
            self.h[key] += grads[key] * grads[key]
            params[key] -= self.lr * grads[key] / (np.sqrt(self.h[key]) + 1e-7) # self.h[key]에 0이 담겨있다해도 0으로 나누는 사태를 막아줌
```

![image-20210220230426042](CHAPTER6.assets/image-20210220230426042.png)

y축 방향은 기울기가 커서 처음에 크게 움직이지만 큰 움직임에 비례해 갱신 정도도 큰 폭으로 작아지도록 조정된다.

그래서 y축 방향으로 갱신 강도가 빠르게 약해지고, 지그재그 움직임이 줄어든다



RMSProp은 과거의 모든 기울기를 균일하게 더하는 것이 아닌, 먼 과거의 기울기는 서서히 잊고 가까운 과거의 기울기 정보를 크게 반영한다. (지수이동평균Exponential Moving Average)

```python
class RMSprop:
    def __init__(self, lr=0.01, decay_rate = 0.99):
        self.lr = lr
        self.decay_rate = decay_rate
        self.h = None
        
    def update(self, params, grads):
        if self.h is None:
            self.h = {}
            for key, val in params.items():
                self.h[key] = np.zeros_like(val)
            
        for key in params.keys():
            self.h[key] *= self.decay_rate
            self.h[key] += (1 - self.decay_rate) * grads[key] * grads[key] 
            # ( 0.99*전시점h + 0.01*현시점기울기제곱 )
            
            params[key] -= self.lr * grads[key] / (np.sqrt(self.h[key]) + 1e-7) 
            # weight = weight - ( 학습률 * 기울기 / 루트( 0.99*전시점h + 0.01*현시점기울기제곱 ) )
            
            # 현 시점 기울기는 0.01만큼 적용 (0.01)
            # 1전시점 기울기는 0.0099만큼 적용 (0.01 * 0.99) 
            # 2전시점 기울기는 0.009801만큼 적용 (0.01 * 0.99 * 0.99)
            # 3전시점 기울기는 0.00970299만큼 적용 (0.01 * 0.99 * 0.99 * 0.99)
            # decay_rate가 작을수록 최신 기울기가 더 많이 반영된다. 
            # ( 1 - decay_rate ) * decay_rate
            # decay_rate가 0.5라면
            # 0.5
            # 0.25 (루트2배)    <->   # (루트100/99배)
            # 0.125 (2배) ...   <->   # (100/99배)
```



### 6.1.6 Adam

Momentum 과 AdaGrad를 융합한 형태이다.

또한 하이퍼파라미터의 '편향 보정'이 진행된다.

```python
class Adam:
    def __init__(self, lr=0.001, beta1=0.9, beta2=0.999):
        self.lr = lr
        self.beta1 = beta1
        self.beta2 = beta2
        self.iter = 0
        self.m = None
        self.v = None
        
    def update(self, params, grads):
        if self.m is None:
            self.m, self.v = {}, {}
            for key, val in params.items():
                self.m[key] = np.zeros_like(val)
                self.v[key] = np.zeros_like(val)
        
        self.iter += 1
        lr_t  = self.lr * np.sqrt(1.0 - self.beta2**self.iter) / (1.0 - self.beta1**self.iter)         
        
        for key in params.keys():
            #self.m[key] = self.beta1*self.m[key] + (1-self.beta1)*grads[key]
            #self.v[key] = self.beta2*self.v[key] + (1-self.beta2)*(grads[key]**2)
            self.m[key] += (1 - self.beta1) * (grads[key] - self.m[key])
            self.v[key] += (1 - self.beta2) * (grads[key]**2 - self.v[key])
            
            params[key] -= lr_t * self.m[key] / (np.sqrt(self.v[key]) + 1e-7)
            
            #unbias_m += (1 - self.beta1) * (grads[key] - self.m[key]) # correct bias
            #unbisa_b += (1 - self.beta2) * (grads[key]*grads[key] - self.v[key]) # correct bias
            #params[key] += self.lr * unbias_m / (np.sqrt(unbisa_b) + 1e-7)
```

![image-20210220234058965](CHAPTER6.assets/image-20210220234058965.png)

학습률

일차 모멘텀용 계수 beta1

이차 모멘텀용 계수 beta2

모멘텀은 v를

AdaGrad는 h를 추가

Adam은 모멘텀의 v와 AdaGrad의 h가 각각 최초 0으로 설정되어 학습 초반에 편향되는 문제를 해결하기 위해 고안한 방법이다.

1차 모멘텀 m과 2차 모멘텀 v를 이용하여 최적화한다.

 ![image-20210220234408677](CHAPTER6.assets/image-20210220234408677.png)