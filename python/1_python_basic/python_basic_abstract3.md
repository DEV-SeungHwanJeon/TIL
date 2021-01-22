# Python_Basic_Abstract3

목차:

- json 파일 불러오기



### json 파일 불러오기

```python
import json
data_json = open('path/data.json', encoding='utf-8') #파일을 불러오는 함수이다. utf-8 인코딩을 활용하여 불러온다.
data_dict = json.load(data_json)   #불러온 json파일을 dict 객체로 변환해준다.

# 만약 불러올 파일이 'data_folder' 안에 있다면 glob 라이브러리를 활용하는 방법이 있다.
import glob
output = glob.glob('data_folder/*.json')
print(output) # 리스트에 파일path들이 string으로 넣어져 있을 것이다.
# ex) ['test1.json', 'test2.json', 'test3.json', 'test4.json']
```

