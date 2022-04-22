<template>
  <h2>{{ msg }}</h2>
  <h2>当前点击时鼠标的坐标为-x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "DemoHook",
  setup() {
    let msg = ref("Hook");

    let point = usePoint();

    return { msg, point };
  },
};
</script>

<style scoped></style>
