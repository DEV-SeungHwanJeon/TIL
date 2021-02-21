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





명령프롬프트에서 만들어진 프로젝트 디렉토리에 들어간 다음 expo-cil start --tunnel



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























