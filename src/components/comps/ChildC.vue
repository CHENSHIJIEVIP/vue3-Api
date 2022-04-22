<template>
  <div class="child">
    <h3>子组件</h3>
    <son></son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.child {
  background: rgb(7, 64, 248);
  padding: 10px;
}
</style>
