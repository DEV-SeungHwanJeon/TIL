

# CHAPTER8_어텐션



## 8.1 어텐션의 구조



### 8.1.1 seq2seq의 문제점

seq2seq에서는 Encoder가 시계열 데이터를 인코딩하고, 그 인코딩된 정보를 Decoder로 전달한다. 이 때 Encoder의 출력은 '고정 길이 벡터'였다. 

하지만 '고정 길이'벡터는 입력 문장의 길이에 관계없이(아무리 길어도), 항상 같은 길이의 벡터로 변환한다는 뜻이다. 즉, 아무리 긴 문장이 입력되더라도 항상 똑같은 길이의 벡터에 밀어넣어야 한다. 그래서 이 '고정 길이 벡터'라는 점이 문제가 된다.

 ![image-20210415234512302](CHAPTER8_Attention.assets/image-20210415234512302.png)



### 8.1.2 Encoder 개선

Encoder 출력의 길이를 입력 문장의 길이에 따라 바꿔주자.

![image-20210415234641257](CHAPTER8_Attention.assets/image-20210415234641257.png)

각 시각(각 단어)의 은닉 상태 벡터를 모두 이용하면 입력된 단어와 같은 수의 벡터를 얻을 수 있다. 이것으로 Encoder는 '하나의 고정 길이 벡터'라는 제약을 해제한다.



여기서 주목할 점으로는 LSTM 계층의 은닉 상태의 '내용'이다. 시각별 LSTM 계층의 은닉 상태에는 직전에 입력된 단어에 대한 정보가 많이 포함되어있다. 그래서 Encoder가 출력하는 hs 행렬은 각 단어에 해당하는 벡터들의 집합이라고 볼 수 있다.

![image-20210415234904553](CHAPTER8_Attention.assets/image-20210415234904553.png)

단지 Encoder의 은닉 상태를 모든 시각만큼 꺼냈을 뿐이지만 이 작은 개선 덕분에 Encoder는 입력 문장의 길이에 비례한 정보를 인코딩할 수 있게 된다.



### 8.1.3 Decoder 개선 1

Encoder는 각 단어에 대응하는 LSTM 계층의 은닉 상태 벡터를 hs로 모아 출력한다. 이 hs가 Decoder에 전달되어 시게열 변환이 이뤄진다.

![image-20210416225422318](CHAPTER8_Attention.assets/image-20210416225422318.png)

앞 장에서는 Encoder가 hs에서 마지막 줄만 빼내어 Decoder에 전달하였다.

이번에는 이 hs 전부를 활용할 수 있도록 Decoder를 개선해보자.



인간은 '어떤 단어(혹은 단어의 집합)'에 주목하여 그 단어의 변환을 수시로 한다. 그렇다면 seq2seq에서는 '입력과 출력의 여러 단어 중 어떤 단어끼리 서로 관련되어 있는가' 라는 대응 관계를 seq2seq에게 학습시켜보자.

목표는 '도착어 단어'와 대응 관계에 있는 '출발어 단어'의 정보를 골라내는 것. 그리고 그 정보를 이용하여 번역을 수행하는 것이다. 

즉, 필요한 정보에만 주목하여 그 정보로부터 시게열 변환을 수행하는 것이 목표이다.

이 구조를 어텐션이라고 부른다.



어텐션의 전체 틀

![image-20210416225801887](CHAPTER8_Attention.assets/image-20210416225801887.png)

새롭에 '어떤 계산'을 수행하는 계층을 추가한다. 현재까지는 Encoder의 마지막 은닉 상태 벡터는 Decoder의 첫 번째 LSTM 계층에 전달한다.

- '어떤 계산'의 입력:
  - Encoder로부터 받는 hs
  - 시각별 LSTM 계층의 은닉 상태
- '어떤 계산'이 하는 일:
  - 필요한 정보만 골라 위쪽의 Affine 계층으로 출력



그러나 신경망으로 하고 싶은 일은 단어들의 얼라인먼트 추출이다. 각 시각에서 Decoder에 입력된 단어와 대응 관계인 단어의 벡터를 hs에서 골라내겠다는 뜻이다.

- 얼라인먼트 : 단어(혹은 문구)의 대응 관계를 나타내는 정보. 지금까지는 주로 사람이 수작업으로 만들었다. 어텐션 기술은 얼라인먼트라는 아이디어를 seq2seq에 자동으로 도입하는데 성공했다.

예를 들면 Decoder가 "I"를 출력할 때, hs에서 "나"에 대응하는 벡터를 선택하면 된다. 그리고 이러한 '선택' 작업을 '어떤 계산'으로 하려한다. 하지만 선택하는 작업 (여러 대상으로부터 몇 개를 선택하는 작업)은 미분할 수 없다는 문제가 생긴다.

'하나를 선택'하는 게 아니라, '모든 것을 선택'한다는 아이디어로 '선택한다'라는 작업을 미분 가능한 연산으로 대체할 수 있다. 또한 각 단어의 중요도(기여도)를 나타내는 '가중치'를 별도로 계산하도록 한다.

![image-20210416230314955](CHAPTER8_Attention.assets/image-20210416230314955.png)

위 그림에서 보듯, 여기에서는 각 단어의 중요도를 나타내는 '가중치'(기호 a)를 이용한다. a는 확률분포처럼 각 원소가 0~1 사이의 스칼라이며, 모든 원소의 총합은 1이 된다. 각 단어의 중요도를 나타내는 가중치 a와 각 단어의 벡터 hs로부터 가중치합을 구하여 우리가 원하는 벡터를 얻는다.

![image-20210416230410651](CHAPTER8_Attention.assets/image-20210416230410651.png)

단어 벡터의 가중합을 계산한다. 이 결과를 '맥락 벡터'(기호 c)라고 부른다.

'나'에 대응하는 가중치가 0.8이다. 이것은 맥락 벡터 c에는 '나' 벡터의 성분이 많이 포함되어있다는 것을 의미한다. 즉, '나' 벡터를 '선택'하는 작업을 이 가중합으로 대체하고 있다.



Encoder가 출력하는 hs와 각 단어의 가중치a를 적당하게 작성하고, 그 가중합을 구하는 구현

```python
import numpy as np
T, H = 5, 4
hs = np.random.rand(T, H)
a = np.array([0.8, 0.1, 0.03, 0.05, 0.02])

ar = a.reshape(5,1).repeat(4, axis=1)
print(ar.shape)

t = hs * ar
print(t.shape)

c = np.sum(t, axis=0)
print(c.shape)
```

시계열의 길이 T=5, 은닉 상태 벡터의 원소 수 H=4 로 하여 가중합을 구하는 과정을 보여준다. 

ar = a.reshape(5,1).repeat(4, axis=1) 코드 설명:

![image-20210416230726169](CHAPTER8_Attention.assets/image-20210416230726169.png)

이 코드는 ar = hs * a.reshape(5,1) 와 같다. ( = 넘파이의 브로드캐스트 )

![image-20210420233652322](CHAPTER8_Attention.assets/image-20210420233652322.png)

구현 효율은 넘파이의 브로드캐스트가 더 좋다.

계산 그래프로는 Repeat 노드에 해당한다.

따라서 역전파 때는 Repeat 노드의 역전파를 수행해야 한다.



원소별 곱 계산 이후에는 `c = np.sum(hs * ar, axis=0)` 코드로 합을 구한다. ( (X, Y, Z) 형상을 가진 x의 np.sum(x, axis=1)의 결과는 (X, Z) 이다. 1번째 축(Y)이 사라진다. )



다음으로는 미니배치 처리용 가중합을 구현한다.

```python
N, T, H = 10, 5, 4
hs = np.random.randn(N, T, H) # 일단 무작위 생성
a = np.random.randn(N, T) # 일단 무작위 생성
ar = a.reshape(N, T, 1).repeat(H, axis=2)
# ar = a.reshape(N, T, 1) # 브로드캐스트를 사용하는 경우

t = hs * ar
print(t.shape)
# (10, 5, 4)

c = np.sum(t, axis=1)
print(c.shape)
# (10, 4)
```

미니배치 처리는 이전 구현과 거의 같다.



가중합 계산을 '계산 그래프'로 그려보자.

 ![image-20210420234642208](CHAPTER8_Attention.assets/image-20210420234642208.png)

`Repeat` 노드를 사용해 a를 복제하고, `x` 노드로 원소별 곱을 계산한 다음, `sum` 노드로 합을 구한다. 

위의 "맥락 벡터를 구하는 Weight Sum 계층" 의 구현 :

```python
class WeightSum:
    def __init__(self):
        self.params, self.grads = [], []
        self.cache = None
        
    def forward(self, hs, a):
        N, T, H = hs.shape
        
        ar = a.reshape(N, T, 1).repeat(H, axis=2)
        t = hs * ar
        c = np.sum(t, axis=1)
        
        self.cache = (hs, ar)
        return c
    
    def backward(self, dc):
        hs, ar = self.cache
        N, T, H = hs.shape
        
        dt = dc.reshape(N, 1, H).repeat(T, axis=1) # sum의 역전파
        dar = dt * hs
        dhs = dt * ar
        da = np.sum(dar, axis=2) # repeat의 역전파
        
        return dhs, da
```



### 8.1.4 Decoder 개선_2

각 단어의 중요도( 가중치 a )의 가중합을 이용해 '맥락 벡터'를 얻을 수 있다는 것을 알았다. 이 가중치 a는 어떻게 구해야 할까? ㅡ> 데이터로부터 자동으로 학습할 수 있도록 해보자.



우선 Decoder의 첫 번째 LSTM 계층이 은닉 상태 벡터를 출력할 때까지의 처리를 알아봐야 한다.![image-20210420235407376](CHAPTER8_Attention.assets/image-20210420235407376.png)

Decoder의 LSTM 계층의 은닉 상태 벡터를 h가 hs의 각 단어 벡터와 얼마나 비슷한가를 수치로 나타내는 것이 목표이다. 여러 가지 방법 중 가장 단순한 방법인 "벡터의 내적"을 이용해보자. 내적의 직관적인 의미는 "두 벡터가 얼마나 같은 방향을 향하고 있는가"이다. 따라서 두 벡터의 '유사도'를 표현하는 척도로 내적을 이용할 수 있다.



결과로 나온 "h와 hs의 각 단어 벡터와의 유사도"(s)는 정규화하기 전의 값이며, '점수'라고도 한다.

![image-20210420235736087](CHAPTER8_Attention.assets/image-20210420235736087.png)



이후 이 s에 소프트맥스 함수를 적용하여 정규화를 한다.

![image-20210420235747776](CHAPTER8_Attention.assets/image-20210420235747776.png)



지금까지의 과정을 구현( 미니배치 처리를 수행 ) :

```python
from common.layers import Softmax
import numpy as np

N, T, H = 10, 5, 4
hs = np.random.randn(N, T, H)
h = np.random.randn(N, H)
hr = h.reshape(N, 1, H).repeat(T, axis=1)
# hr = h.reshape(N, 1, H) # 브로드캐스트를 사용하는 경우

t = hs * hr
print(t.shape)
# (10, 5, 4)

s = np.sum(t, axis=2)
print(s.shape)
# (10, 5)

softmax = Softmax()
a = softmax.forward(s)
print(a.shape)
# (10, 5)
```



각 단어의 가중치 a를 구하는 과정의 계산 그래프

 ![image-20210421000100100](CHAPTER8_Attention.assets/image-20210421000100100.png)

계산 그래프는 `Repeat`노드, 원소별 곱을 뜻하는 `x` 노드, `Sum` 노드, `Softmax`계층으로 구성된다. ( AttentionWeight 클래스로 구현 )

```python
# ch08/attention_layer.py
```



### 8.1.5 Decoder 개선_3

개선안 두 가지 (Attention Weight 계층, Weight Sum 계층)을 하나로 결합해보자.



맥락 벡터를 구하는 계산 그래프의 전체 모습:

![image-20210421224602856](CHAPTER8_Attention.assets/image-20210421224602856.png)

Attention Weight 계층은 Encoder가 출력하는 각 단어의 벡터 hs에 주목하여 해당 단어의 가중치 a를 구한다. 이어서 Weight Sum 계층이 a와 hs의 가중합을 구하고, 그 결과를 맥락 벡터 c로 출력한다. 이 일련의 계싼을 수행하는 계층을 Attention 계층이라고 부른다.

결국 핵심은 Encoder가 건네주는 정보 hs에서 중요한 원소에 주목하여, 그것을 바탕으로 맥락 벡터를 구해 위쪽 계층으로 전파한다는 것이다.

```python
# ch08/attention_layer.py
```

각 단어의 가중치를 나중에 참조할 수 있도록 attention_weight 라는 인스턴스 변수에 저장한다. 이제 이 Attention 계층을 LSTM 계층과 Affine 계층 사이에 삽입하면 된다.

![image-20210421224844141](CHAPTER8_Attention.assets/image-20210421224844141.png)

각 시각의 Attention 계층에는 Encoder의 출력인 hs가 입력된다. 또 여기에서는 LSTM 계층의 은닉 상태 벡터를 Affine 계층에 입력한다. 이는 앞 장에서 본 Decoder의 개선으로부터 자연스럽게 확장된 것으로 볼 수 있다. 밑의 그림 처럼 앞 장의 Decoder에 어텐션 정보를 '추가'할 수 있기 때문이다.

![image-20210421224948575](CHAPTER8_Attention.assets/image-20210421224948575.png)

앞 장의 Decoder에 Attention 계층이 구한 맥락 벡터 정보를 '추가'한 것으로 생각할 수 있다. Affine 계층에는 기존과 마찬가지로 LSTM 계층의 은닉 상태 벡터를 주고, 여기에 더해 Attention 계층의 맥락 벡터까지 입력하는 것이다.



시계열 방향으로 펼쳐진 다수의 Attention 계층을 Time Attention 계층으로 모아 구현하자.

![image-20210421225440202](CHAPTER8_Attention.assets/image-20210421225440202.png)

Time Attention 계층은 다수의 Attention 계층을 모았을 뿐이다.

```python
# ch08/attention_layer.py
```



Attention 계층을 필요한 수 만큼 만들고 (코드에서는 T개), 각각이 순전파와 역전파를 수행한다. 각 Attention 계층의 각 단어의 가중치를 attention_weights 리스트에서 보관한다.



## 8.2 어텐션을 갖춘 seq2seq 구현

어텐션을 갖춘 seq2seq를 구현해보자.



### 8.2.1 Encoder 구현

```python
# ch08/attention_seq2seq.py
```



### 8.2.2 Decoder 구현

어탠션을 이용한 Decoder의 계층 구성

![image-20210422234756689](CHAPTER8_Attention.assets/image-20210422234756689.png)

Time Softmax with Loss 계층의 앞까지를 Decoder로 구현해보자.

순전파, 역전파 메서드 뿐만 아니라 새로운 단어열을 생성하는 generate() 메서드도 추가한다.

```python
# ch08/attention_seq2seq.py
```

forward() 메서드에서 Time Attention 계층의 출력과 LSTM 계층의 출력을 연결한다는 점만 주의하자. 두 출력을 연결할 때는 np.concatenate() 메서드를 사용한다.



### 8.2.3 seq2seq 구현

AttentionSeq2seq 클래스의 구현.

앞 장의 Seq2seq와의 차이점은 Encoder 대신 AttentionEncoder클래스, Decoder 대신 AttentionDecoder 클래스를 사용하는 것이다. 따라서 앞 장의 Seq2seq 클래스를 상속 후 초기화 메서드를 수정한다.

```python
from ch07.seq2seq import Encoder, Seq2seq

class AttentionSeq2seq(Seq2seq):
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        args = vocab_size, wordvec_size, hidden_size
        self.encoder = AttentionEncoder(*args)
        self.decoder = AttentionDecoder(*args)
        self.softmax = TimeSoftmaxWithLoss()
        
        self.params = self.encoder.params + self.decoder.params
        self.grads = self.encoder.grads + self.decoder.grads
```





## 8.3 어텐션 평가

AttentionSeq2seq 클래스를 사용해 현실적인 문제에 도전해보자.

'날짜 형식'을 변경하는 문제(데이터 크기가 작고, 어느 쪽인가를 맞추는 인위적인 문제)로 어텐션을 갖춘 seq2seq의 효과를 확인해보자.



### 8.3.1 날짜 형식 변환 문제

영어권에서 사용되는 다양한 날짜 형식을 표준 형식으로 변환하는 것이 목표이다.

ex) "september 27, 1994" ㅡ> "1994-09-27" 같은 표준 형식으로 변환



날짜 형식 변환 문제를 채용한 데는 두 가지 이유가 있다.

- 겉보기만큼 간단하지 않다. 입력되는 날짜 데이터에는 다양한 변형이 존재하여 변환 규칙이 복잡해진다.
- 문제의 입력(질문)과 출력(답변) 사이에 알기 쉬운 대응 관계가 있다. ( 연, 월, 일의 대응 관계가 존재 ) 따라서 어텐션이 각각의 원소에 올바르게 주목하고 있는지를 확인할 수 있다.

![image-20210422235619667](CHAPTER8_Attention.assets/image-20210422235619667.png)

데이터셋(dataset/date.txt)은 입력 문장의 길이를 통일하기 위해 공백 문자로 패딩해뒀고, 입력과 출력의 구분 문자로는 `_`(밑줄)을 사용하였다. 출력의 문자 수는 일정하기 때문에 출력의 끝을 알리는 구분 문자는 따로 사용하지 않는다.



### 8.3.2 어텐션을 갖춘 seq2seq의 학습

날짜 변환용 데이터셋으로 AttentionSeq2seq를 학습시켜보자.

```python
# ch08/train.py
```



AttentionSeq2seq 모델을 활용하고 입력 문장을 반전시키는 기법( Reverse )도 적용하여 학습하였다. 또한 에폭마다 테스트 데이터를 사용하여 정확률을 측정하였다.

![image-20210423184550049](CHAPTER8_Attention.assets/image-20210423184550049.png)

이전 모델들과 비교해보면 어텐션쪽이 우세하다. 학습속도도 가장 빨랐고 최종 정확도 측면에서는 peeky와 동등했다. 현실의 시계열 데이터는 길고 복잡하므로 정확도 역시 어텐션이 유리할 것이라고 예상된다.



### 8.3.3 어텐션 시각화

어텐션이 시계열 변환을 수행할 때, 어느 원소에 주의를 기울이는지를 눈으로 살펴보자. Attention 계층은 각 시각의 어텐션 가중치를 인스턴스 변수로 보관하고 있으므로 이를 간단히 시각화할 수 있다.

Time Attention 계층에 있는 인스턴스 변수 attention_weights 에 저장된 각 시각의 어텐션 가중치를 사용하면 입력 문장과 출력 문장의 단어 대응 관계를 2차원 맵으로 그릴 수 있다. 각 원소는 밝을 수록 값이 크다.

![image-20210425104531528](CHAPTER8_Attention.assets/image-20210425104531528.png)

연월일의 대응관계를 보면 세로축(출력)의 "1983", "26", "08"이 가로축(입력)의 "1983", "26", "AUGUST"에 대응하고 있다.



이처럼 어텐션을 이용하면, seq2seq는 마치 사람처럼 필요한 정보에 주의를 더 기울일 수 있게 된다. 





## 8.4 어텐션에 관한 남은 이야기



### 8.4.1 양방향 RNN

지금까지 배운 seq2seq의 Encoder

![image-20210425104947271](CHAPTER8_Attention.assets/image-20210425104947271.png)

LSTM의 각 시각의 은닉 상태 벡터는 hs로 모아진다. Encoder가 출력하는 hs의 각 행에는 그 행에 대응하는 단어의 성분이 많이 포함되어 있다.



하지만 우리는 글을 왼쪽에서 오른쪽으로 읽는다. 따라서 "고양이"에 대응하는 벡터에 "나", "는", "고양이"까지 총 세 단어의 정보가 인코딩되어 들어간다. 여기서 전체적인 균형을 생각하면, "고양이" 단어의 '주변' 정보를 균형 있게 담고 싶을 것이다.



그래서 LSTM을 양방향으로 처리하는 방법을 생각할 수 있다.

![image-20210425105200756](CHAPTER8_Attention.assets/image-20210425105200756.png)

양방향 LSTM에서는 지금까지의 LSTM 계층에 더해 역방향으로 처리하는 LSTM 계층을 추가한다. 그리고 각 시각에서는 이 두 LSTM 계층의 은닉 상태를 연결시킨 벡터를 최종 은닉 상태로 처리한다. ("연결", "합", "평균", 등등 여러가지 방법)

양방향으로 처리함으로써, 각 단어에 대응하는 은닉 상태 벡터에는 좌와 우 양쪽 방향으로부터의 정보를 집약할 수 있다. 따라서 균형 잡힌 정보가 인코딩 된다.



양방향 LSTM 구현

- 2개의 LSTM 계층(Time LSTM)을 사용하여 각각의 계층에 주는 단어의 순서를 조정

  - 하나는 입력 문장을 "왼쪽부터 오른쪽으로" 처리하는 LSTM 계층
  - 다른 하나는 입력 문장의 단어들을 반대 순서로 나열하여 "오른쪽에서 왼쪽으로" 처리하는 LSTM 계층
  - 이 두 LSTM 계층의 출력을 연결하기만 하면 양방향 LSTM 계층이 완성된다.

  





### 8.4.2 Attention 계층 사용 방법

Attention 계층

![image-20210425105713486](CHAPTER8_Attention.assets/image-20210425105713486.png)

지금까지 우리는 Attention 계층을 LSTM 계층과 Affine 계층 사이에 삽입했다. 그러나 Attention 계층을 이용하는 장소가 반드시 이 그림과 같을 필요는 없다. 

![image-20210425105808535](CHAPTER8_Attention.assets/image-20210425105808535.png)

위 그림에서는 Attention 계층의 출력 (맥락 벡터)이 다음 시각의 LSTM 계층에 입력되도록 연결됐다. 이렇게 구성하면 LSTM 계층이 맥락 벡터의 정보를 이용할 수 있다.



Attention 계층의 위치를 달리하는게 최종 정확도에 주는 영향은 해보지 않으면 모른다. 현업에서는 실제 데이터를 사용해 검증할 수 밖에 없다.



### 8.4.3 seq2seq 심층화와 skip 연결

현실의 문제는 매우 복잡하다. 따라서 어텐션을 갖춘 seq2seq에도 더 높은 표현력이 요구된다. 첫 번째 고려사항은 RNN 계층(LSTM 계층)을 깊게 쌓는 방법이다. 층을 깊이 쌓으면 표현력 높은 모델을 만들 수 있고, 어텐션을 갖춘 seq2seq도 마찬가지다.

![image-20210425110111188](CHAPTER8_Attention.assets/image-20210425110111188.png)

위 그림에서는 Encoder와 Decoder로 3층 LSTM 계층을 사용하고 있다. 이 예처럼 Encoder와 Decoder에서 같은 층수의 LSTM 계층을 이용하는 것이 일반적이다.

Attention 계층의 사용법은 매우 다양하다. 여기에서는 Decoder의 LSTM 계층의 은닉 상태를 Attention 계층에 입력하고, Attention 계층의 출력인 맥락 벡터를 Decoder의 여러 계층(LSTM 계층와 Affine 계층)으로 전파한다.



층을 깊게 할 때 skip 연결(skip connection)이라는 게 있다. ( 잔차 연결(residual connection) 혹은 숏컷(shot-cut) 이라고도 한다. ) 계층을 넘어 "선을 연결"하는 단순한 기법이다.

![image-20210425110350790](CHAPTER8_Attention.assets/image-20210425110350790.png)

skip 연결은 "계층을 건너뛰는 연결"이다. 이 때 skip 연결의 접속부에서는 2개의 출력이 "더해"진다. 이 "덧셈(원소별)"이 핵심이다. 왜냐하면 덧셈은 역전파시 기울기를 그대로 흘려보내므로, skip 연결의 기울기가 아무런 영향을 받지 않고 모든 계층으로 흐르기 때문이다. 따라서 층이 깊어져도 기울기가 소실(또는 폭발)되지 않고 전파되어, 결과적으로 좋은 학습을 기대할 수 있다.

(기울기 소실에는 LSTM과 GRU 등의 "게이트가 달린 RNN"으로 대응하고, 기울기 폭발에는 "기울기 클리핑"으로 대응하고, RNN의 깊이 방향 기울기 소실에는 "skip 연결"로 대응한다. )



## 8.5 어텐션 응용

### 8.5.1 구글 신경망 기계 번역(GNMT)

GNMT의 아키텍처를 계층 구성 중심으로 살펴보자

![image-20210425113010689](CHAPTER8_Attention.assets/image-20210425113010689.png)

GNMT도 Encoder와 Decoder, Attention으로 구성되어 있다.

번역 정확도를 높이기 위한 여러 개선이 더해진 모습이다. LSTM 계층의 다층화, 양방향 LSTM (Encoder의 첫 번째 계층만), skip 연결 등을 볼 수 있다.

또한 GNMT에서는 낮은 빈도의 단어 처리나 추론 고속화를 위한 양자화 등 다양한 연구가 이뤄지고 있다.

![image-20210425113147916](CHAPTER8_Attention.assets/image-20210425113147916.png)

GNMT는 기존 기법 ( 구문 기간 기계 번역 )과 비교해 번역 품질을 크게 상승시켰다.





### 8.5.2 트랜스포머

RNN의 단점 중 하나는 병렬 처리이다.

RNN은 이전 시각에 계산한 결과를 이용하여 순서대로 계산하므로 시간 방향으로 병렬 계산하기란 불가능하다.

RNN을 없애거나 병렬 계산할 수 있는 RNN 연구가 활발한데 그 중 유명한 것이 트랜스포머 모델이다. ( "Attention is all you need" 논문) 이 모델은 RNN이 아닌 어텐션을 사용해 처리한다.

트랜스포머는 어텐션으로 구성되는데, 그 중 셀프어텐션 이라는 기술을 이용하는게 핵심이다. Self-Attention은 하나의 시계열 데이터를 대상으로 한 어텐션으로, "하나의 시계열 데이터 내에서" 각 원소가 다른 원소들과 어떻게 관련되는지를 살펴보자는 취지이다.

![image-20210425113507591](CHAPTER8_Attention.assets/image-20210425113507591.png)

Time Attention 계층에는 서로 다른 두 시계열 데이터가 입력된다. 반면, Self-Attention은 두 입력선이 모두 하나의 시계열 데이터에서 나온다. 이렇게 하면 하나의 시계열 데이터에서 원소간 대응 관계가 구해진다.

___

트랜스포머의 계층 구성

![image-20210425113530684](CHAPTER8_Attention.assets/image-20210425113530684.png)

트랜스포머는 RNN 대신 어텐션을 사용한다. 위 그림에서 Encoder와 Decoder 모두에서 셀프어텐션을 사용함을 알 수 있다. 또한 Feed Forward 계층은 피드포워드 신경망(시간 방향으로 독립적으로 처리하는 신경망. 은닉층이 1개이고 ReLU 활성화함수를 이용한 완전연결계층 신경망)을 나타낸다. 

트랜스포머는 계산량을 줄이고 GPU를 이용한 병렬 계산의 혜택도 많이 누릴 수 있어 GNMT보다 학습 시간을 큰 폭으로 줄이고 번역 품질을 끌어올리는데 성공했다. ( BLEU 점수 : 번역 정확도 척도 )

![image-20210425113937867](CHAPTER8_Attention.assets/image-20210425113937867.png)



### 8.5.3 뉴럴 튜링 머신(NTM)

"외부 메모리를 통한 확장"

어텐션을 갖춘 seq2seq에서는 Encoder가 입력 문장을 인코딩한다. 그리고 인코딩된 정보를 어텐션을 통해 Decoder가 이용했다. 여기서 주목할 것은 어텐션의 존재이다. 이 어텐션을 통해 Encoder와 Decoder는 "메모리 조작"같은 작업을 수행한다. 즉 Encoder가 필요한 정보를 메모리에 쓰고, Decoder는 그 메모리부터 필요한 정보를 읽어들인다고 해석할 수 있다.

이렇게 생각하면 컴퓨터의 메모리 조작을 신경망에서도 재현할 수 있을 것 같다. RNN의 외부에 정보 저장용 메모리 기능을 배치하고, 어텐션을 이용하여 그 메모리로부터 필요한 정보를 읽거나 쓰는 방법이다. 뉴럴 튜링 머신(NTM)이 유명하다.

![image-20210425114236981](CHAPTER8_Attention.assets/image-20210425114236981.png)

이 그림은 NTM을 시각화한 모습이다. 그림 한가운데 있는 "컨트롤러" 모듈은 정보를 처리하는 모듈로, 신경망을 이용하는 것으로 예상된다. 그림을 보면 이 컨트롤러는 차례차례 흘러 들어오는 0, 1 데이터를 처리하여 새로운 데이터를 출력하고 있다.

중요한 점은 컨트롤러의 바깥에 있는 큰 종이(=메모리)의 존재이다. 이 메모리 덕분에 컨트롤러는 컴퓨터(혹은 튜링 머신)와 같은 능력을 얻는다. 능력이란 큰 종이에 필요한 정보를 쓰거나 불필요한 정보를 지우는 능력, 그리고 필요한 정보를 다시 읽어들이는 능력이다. 각 노드가 필요한 위치의 데이터를 읽고 쓸 수 있다는 뜻이며, 원하는 목적지로 이동할 수 있다. 

NTM은 외부 메모리를 읽고 쓰면서 시계열 데이터를 처리한다. 이러한 메모리 조작을 "미분 가능"한 계산으로 구축하였으므로 메모리 조작 순서도 데이터로부터 학습할 수 있다.

( NTM은 데이터로부터 프로그램을 학습한다. 즉 '알고리즘의 입력과 출력'으로부터 '알고리즘 자체(로직)'를 학습할 수 있다는 뜻이다. )

![image-20210425114556266](CHAPTER8_Attention.assets/image-20210425114556266.png)

LSTM 계층이 '컨트롤러'가 되어 NTM의 주된 처리를 수행한다. 그리고 각 시각에서 LSTM 계층의 은닉 상태를 Write Head 계층이 받아서 필요한 정보를 메모리에 쓴다. 그런 다음 Read Head 계층이 메모리로부터 중요한 정보를 읽어 들여 다음 시각의 LSTM 계층으로 전달한다.

Write Head 계층과 Read Head 계층은 어텐션을 사용하여 메모리를 조작할 수 있다.

NTM은 컴퓨터 메모리 조작을 모방하기 위해서 2개의 어텐션을 이용한다. "콘텐츠 기반 어텐션"과 "위치 기반 어텐션"이다. 

콘텐츠 기반 어텐션은 지금까지 본 어텐션과 같고, 입력으로 주어진 어느 벡터 (query 벡터)와 비슷한 벡터를 메모리로부터 찾아내는 용도로 이용된다.

위치 기반 어텐션은 이전 시각에서 주목한 메모리의 위치(=메모리의 각 위치에 대한 가중치)를 기준으로 그 전후로 이동(시프트)하는 용도로 사용된다. 메모리 위치를 시프트하는 이 기능을 사용하면 메모리 위치를 하나씩 옮겨가며 읽어 나가는 컴퓨터 특유의 움직임을 쉽게 재현할 수 있다고 한다.

NTM은 seq2seq만으로는 풀리지 않던 복잡한 문제(긴 시계열을 기억하는 문제, 정렬, 등) 에서도 성과를 거두고 있다. 또한 NTM은 외부 메모리를 사용함으로써 알고리즘을 학습하는 능력을 얻는다. 



## 8.6 정리

- 번역, 음성 인식 등, 한 시계열 데이터를 다른 시계열 데이터로 변환하는 작업에서는 시계열 데이터 사이의 대응 관계가 존재하는 경우가 많다.
- 어텐션은 두 시계열 데이터 사이의 대응 관계를 데이터로부터 학습한다
- 어텐션에서는 (하나의 방법으로서) 벡터의 내적을 사용해 벡터 사이의 유사도를 구하고, 그 유사도를 이용한 가중합 벡터가 어텐션의 출력이 된다.
- 어텐션에서 사용하는 연산은 미분 가능하기 때문에 오차역전파법으로 학습할 수 있다.
- 어텐션이 산출하는 가중치(확률)를 시각화하면 입출력의 대응 관계를 볼 수 있다.
- 외부 메모리를 활용한 신경망 확장 연구 예에서는 메모리를 읽고 쓰는데 어텐션을 사용했다.

