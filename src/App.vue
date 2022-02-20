<template>
  <div class="ech">
    <First />
  </div>
</template>

<script>
import First from "./views/First.vue";
export default {
  name: "App",
  components: {
    First,
  },
};
</script>

<style>
body,html{
  padding:0;
  margin:0;
}
</style>
