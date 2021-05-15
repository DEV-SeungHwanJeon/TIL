<template>
  <div id="roomlist">
    <RoomInfo v-for="room in this.$store.state.currentRooms"
      :key="room.roomId"
      :room="room"/>
  </div>
</template>

<script>
import RoomInfo from '@/components/RoomInfo.vue'

export default {
  name: 'RoomList',
  components: {
    RoomInfo,
  },
}
</script>

<style>

</style>