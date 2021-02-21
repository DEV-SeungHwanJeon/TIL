import React, {useState} from 'react';
import { Text, View, Button, Image, StyleSheet, Alert } from 'react-native';



const App = () => {  
  let [field2048, setField] = useState( [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] );
  
  function topclick() {
    setField([[field2048[0][0]+field2048[1][0]+field2048[2][0]+field2048[3][0],field2048[0][1]+field2048[1][1]+field2048[2][1]+field2048[3][1],field2048[0][2]+field2048[1][2]+field2048[2][2]+field2048[3][2],field2048[0][3]+field2048[1][3]+field2048[2][3]+field2048[3][3]], [0,0,0,0],[0,0,0,0],[0,0,0,0]] )
    let min1 = Math.ceil(1);
    let max1 = Math.ceil(4);
    let min2 = Math.ceil(0);
    let max2 = Math.ceil(4);
    
    let num1 = Math.floor(Math.random() *(max1-min1))+min1
    let num2 = Math.floor(Math.random() *(max2-min2))+min2
    let msg = `${num1}, ${num2}가 생성되엇다`
    Alert.alert(msg);
    field2048[num1][num2]=2;
    Alert.alert(`${field2048}`);

  }
    function bottomclick() {

    }
    function rightclick() {

    }
    function leftclick() {

    }
  return (

    <View style = {{flex: 1, alignItems:"center", marginTop:50}}>
      
      <View style = {{backgroundColor:'blue',flex:1, flexDirection:'column', width:440, height: 440}}>
        <View style = {styles.rowBlock}>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[0][0]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[0][1]}`} 
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[0][2]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[0][3]}`}
            </Text>
          </View>
        </View>
        <View style = {styles.rowBlock}>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[1][0]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[1][1]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[1][2]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[1][3]}`}
            </Text>
          </View>
        </View>
        <View style = {styles.rowBlock}>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[2][0]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[2][1]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[2][2]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[2][3]}`}
            </Text>
          </View>
        </View>
        <View style = {styles.rowBlock}>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[3][0]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[3][1]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[3][2]}`}
            </Text>
          </View>
          <View style = {styles.myBlock}>
            <Text style={{fontSize:50}}>
              {`${field2048[3][3]}`}
            </Text>
          </View>
        </View>
      </View>



      <View style = {{flex:1, backgroundColor:'white' , marginTop:200, width: 300, height: 200}}>
        
        <View style={{justifyContent: 'flex-start', alignItems:'center'}}>

          <View style={{width:150, marginBottom:15}}>
            <Button title="상클릭" 
            onPress={() => topclick()}></Button>
          </View>
          <View style={{backgroundColor: 'white', flexDirection:'row'}}>
            <View style={{width:150, marginRight:7}}>
              <Button title="좌클릭"
              onPress={() => Alert.alert('좌클릭 pressed')}></Button>
            </View>

            <View style={{width:150, marginLeft:7}}>
              <Button title="우클릭" style={{width:150}}
              onPress={() => Alert.alert('우클릭 pressed')}></Button>
            </View>
          </View>

          <View style={{width:150, marginTop:15}}>
            <Button title="하클릭" style={{}}
            onPress={() => setField([[0,0,0,0],[0,0,0,0],[0,0,0,0], [field2048[0][0]+field2048[1][0]+field2048[2][0]+field2048[3][0],field2048[0][1]+field2048[1][1]+field2048[2][1]+field2048[3][1],field2048[0][2]+field2048[1][2]+field2048[2][2]+field2048[3][2],field2048[0][3]+field2048[1][3]+field2048[2][3]+field2048[3][3]]] )}></Button>
          </View>

          <View style={{marginTop: 100, width:150}}>
            <Button title="초기화클릭" style={{}}
            onPress={() => setField([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] )}></Button>
          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowBlock: {
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'center'
  }, 
  
  myBlock: {
    backgroundColor:'yellow',
    width:110, 
    height:110, 
    justifyContent:'center', 
    alignItems:"center"
  }
});




export default App;