/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class JSH extends Component {

  render () {
    let JSHImg = '';
    if (this.props.type === 'one') {
      JSHImg = require('./assets/2.png')
    } else if (this.props.type === 'two') {
      JSHImg = require('./assets/4.png')
    } else if (this.props.type === 'three') {
      JSHImg = require('./assets/8.png')
    }
    return (
      <View>
        <Image source= {JSHImg} style={{width:400, height:350}}/>
      </View>
    )
  }
}

const App = () => {
  const CUBE_NUMBER = 4
  let [큐브, 큐브변경] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);


  function 랜덤생성() {
    while (true) {
      const number1 = Math.floor(Math.random() * CUBE_NUMBER);
      const number2 = Math.floor(Math.random() * CUBE_NUMBER);
      if (큐브[number1][number2]===0){
        break
      }
  }


  function 위버튼클릭() {
    
    }
  }

  function 아래버튼클릭() {

  }

  function 오른버튼클릭() {

  }

  function 왼버튼클릭() {

  }



  return (
    <>
      <View style = {styles.container}>
        <JSH type='one'></JSH>
        <JSH type='two'></JSH>
      </View>


      <View style = {styles.container}>
        <Button style = {styles.updownBtn} onPress={ 위버튼클릭 } title="🔼"></Button>

        <View style={styles.lrbtnContainer}>
          <Button onPress={ 왼버튼클릭 } title="◀"></Button>
          <Button onPress={ 오른버튼클릭 } title="▶"></Button>
        </View>
        <Button onPress={ 아래버튼클릭 } title="🔽"></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  lrbtnContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  updownBtn : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 0
  }
});

export default App;
