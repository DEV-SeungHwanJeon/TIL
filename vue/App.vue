<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{ parentInput }}</p>
    <p>childData: {{ childInput }}</p>
    <Parent
      :appData="appData" 
      @child-input="onChildInput"
      @parent-input="onParentInput"
    />
  </div>
</template>

<script>
// 1. 불러온다.
// import Parent from './components/Parent' 
import Parent from '@/components/Parent' 

export default {
  name: 'App',
  data: function() {
    return {
      appData: '',
      childInput: '',
      parentInput: '',
    }
  },
  components: {
    // 2. 등록
    Parent,
  },
  methods: {
    onChildInput(childInput) {
      this.childInput = childInput
    },
    onParentInput(parentInput) {
      this.parentInput = parentInput
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 500px; 
  border: 1px solid black; 
  margin: 0 auto;
}
</style>
