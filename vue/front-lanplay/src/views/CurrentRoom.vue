<template>
  <div id="currentroom" class="container">
    <span class="fs-1">{{ this.$store.state.user.currentRoom.roomTitle }}</span>
    <span class="">
      <router-link to="/">Back</router-link>
    </span>
    <div class="d-flex row row-cols-3">
      <StreamingPerson 
        v-for="member in this.$store.state.user.currentRoom.roomMember"
        :key="member.userId"
        :member="member"
      />
    </div>
  </div>
</template>

<script>
import StreamingPerson from '@/components/StreamingPerson.vue'

export default {
  name: 'CurrentRoom',
  components: {
    StreamingPerson,
  },
}
</script>
<style>
#currentroom {
  text-align:center;
}

</style>