React.js

+

React Native

- Android & iOS
- Native Widgets
- Native Platform APIs
- Connect JavaScript to Native Code



React Native는 자바스크립트를 네이티브 코드 및 사전 빌드된 네이티브 기능에 연결한다.

react-native init 프로젝트명

react-native run-android



```react
import React, {useState} from 'react';
import { Text, View, Button, Image, StyleSheet, Alert } from 'react-native';



const App = () => {
  let [field2048, setField] = useState([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
  
  return (
    <View style = {styles.container}>
      <View style = {{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginTop:100}}> 

          <Button style = {styles.block}><Text>{String(field2048[0][0])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[0][1])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[0][2])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[0][3])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[1][0])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[1][1])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[1][2])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[1][3])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[2][0])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[2][1])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[2][2])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[2][3])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[3][0])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[3][1])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[3][2])}</Text></Button>
          <Button style = {styles.block}><Text>{String(field2048[3][3])}</Text></Button>
          {/* <Button style={styles.block} title={String(field2048[3][3])} ></Button> */}
        
        
      </View>

      {/* <Text>{field2048}</Text> */}


      <View style={{flex: 1, justifyContent: 'flex-start', marginTop:100, width:400, height: 150}}>
        {/* 버튼을 넣자 */}

        <Button title="상클릭" style={{}}></Button>

        <View style={{flex:1, flexDirection:'row', justifyContent:"space-evenly"}}>
          {/* 여기는 flexDirection을 row로 바꾸자. */}
          <Button title="좌클릭"  style={{}}
          onPress={() => Alert.alert('죄클릭 pressed')}></Button>
          <Button title="우클릭" style={{}}
          onPress={() => Alert.alert('우클릭 pressed')}></Button>
        </View>

        <Button title="하클릭" style={{}}
        onPress={() => Alert.alert('하클릭 pressed')}></Button>

      </View>

      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  
  block: {
    flex: 0.5,
    width: 100,
    height: 100,
    paddingVertical: 'auto',
    paddingHorizontal: 'auto',
  },

  lrbtnContainer : {
    flex: 1,
    justifyContent: 'space-between',
  },

  updownBtn : {
    flex: 1,
  }
});




export default App;
```







# React-Native 공부

### Component

주요 component:

`<View>` : 컨테이너 with flexbox style

`<Text>` : text를 보여주고 스타일링하고 장소를 마련해준다. 그리고 터치 이벤트를 핸들링한다.

`<Image>` : 이미지를 보여준다. 

`<ScrollView>` : 여러 컴포넌트들과 뷰들을 포함할 수 있는 일반적인 스크롤링 컨테이너.

`<TextInput>` : 사용자가 텍스트를 넣을 수 있게 한다.



component의 역할은 react element를 렌더링하는 것이다.



component 예제

```react
const Cat = () => {
    return <Text>Hello, I'm seunghwan</Text>
};
```



### JSX

JSX는 JavaScript이다.

```react
const Cat = () => {
    const name = "Maru";
    return (
    <Text>Hello, I am {name}!</Text>
    )
}
```





### Custom Components

```react
const Cat = () => {
    return (
    <View>
        <Text>Hello, i am</Text>
        <TextInput
            style={{
                height: 40,
                borderColor:'gray',
                borderWidth:1
            }}
            defaultValue="Name me!"
            />
        </View>
    );
}
```



`<TextInput>`

- style={{ ~~ }}
- defaultValue = "Name me!"
- 



```react
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
}

export default Cafe;
```

이렇게 함수를 여러 번 반복해서 작성할 수도 있다.



### Props ( Properties )

components들을 꾸밀 수 있다.

```javascript
const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

export default Cafe;
```

이미지(source)에 prop을 넣을 수도 있다.

```javascript
import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = (props) => {
  const url = props.name
  return (
    <View>
      <Image
        source={{ uri: url }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

const CatDisplay = () => {
    return (
    <View>
      <CatApp name="https://reactnative.dev/docs/assets/p_cat1.png"/>
    </View>
  );
}

export default CatDisplay;
```



### State

`useState`를 활용해서 state를 추가할 수 있다. components의 기능을 위해 추가한다.

```react
import React, { useState } from 'react'
const Cat = (props) =>{
    const [isHungry, setIsHungry]=useState(true);
}
```

useState는 두가지 일을 한다.

- state variable을 생성하고 초깃값을 넣는다.
- state variable's value를 설정할 수 있는 함수를 생성한다.

즉 `[<getter>, <setter>] = useState(<initialValue>)` 의 패턴이다.



버튼에 onPress prop에 추가해보자

```react
<Button
    onPress={() => {
        setIsHungry(false);
    }}
/>
```





```javascript
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
}

export default Cafe;
```





### Handling Text Input

`<TextInput>` compoment의 prop

- `onChangeText` : 텍스트가 바뀔 때마다 호출되는 function을 가진다. 
- `onSubmitEditing` : 텍스트가 제출될 때마다 호출되는 function을 가진다. 













