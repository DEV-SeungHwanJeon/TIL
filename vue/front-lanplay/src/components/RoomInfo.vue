<template>
  <div id='room'>
    <div class="d-flex justify-content-between align-items-center">
      <router-link to="/CurrentRoom" class="roomTitle text-decoration-none text-dark">
        <div @click="joinRoom" class="fs-2 ms-5">{{ room.roomId }} : {{ room.roomTitle }}</div>
      </router-link>
      <div class="d-flex me-3 text-end">
        <div class="me-3">방장: {{ room.roomPublisher.userName }}</div>
        <div>참여인원: {{ room.roomMember.length }}/6</div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  props: {
    room: Object,
  },
  methods: {
    joinRoom: function () {
      this.$store.dispatch("joinRoom", this.room)
    }
  },
}
</script>

<style scoped>
.roomTitle {
  width: 50%
}
</style>