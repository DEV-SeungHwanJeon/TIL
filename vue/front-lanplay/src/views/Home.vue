<template>
  <div id="home">
    <Login/>
    <h1>Home이다.</h1>
    <hr>
    <RoomList/>
  </div>
</template>

<script>
// @ is an alias to /src
import RoomList from '@/components/RoomList.vue'
import Login from '@/components/Login.vue'


export default {
  name: 'Home',
  components: {
    RoomList,
    Login,
  }
}
</script>

<style scoped>
  #home {
    text-align: center;
    border: 3px solid black;
  }
</style>