<template>
  <div id='streamingperson'>
    <img
      :src="member.url"
      alt="이미지"
      width="400px"
      height="250px"
    >
    <p class="fs-3"> {{ member.userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'StreamingPerson',
  props: {
    member: Object,
  },
}
</script>

<style>
/* #streamingperson {
  width: 200px;
} */
</style>