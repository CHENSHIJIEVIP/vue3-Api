<template>
  <div class="about"></div>
  <p>{{ sum }}</p>
  <button @click="sum++">sum++</button>
  <br />
  <h2>当前点击时鼠标的坐标为-x:{{ point.x }}, y:{{ point.y }}</h2>
  <hr />
  <button @click="isShowHook = !isShowHook">显示隐藏HooK</button>
  <demo-hook v-if="isShowHook"></demo-hook>
  <hr />
  <to-ref></to-ref>
  <custom-ref></custom-ref>
  <provide-or-inject></provide-or-inject>
</template>

<script>
import { ref } from "vue";
import DemoHook from "../components/DemoHook.vue";
import ToRef from "../components/ToRef.vue";
import CustomRef from "../components/CustomRef.vue";
import ProvideOrInject from "../components/ProInj.vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "about",
  components: {
    DemoHook,
    ToRef,
    CustomRef,
    ProvideOrInject,
  },
  setup() {
    let isShowHook = ref(true);

    let sum = ref(0);

    //hook-APi
    const point = usePoint();

    return { sum, point, isShowHook };
  },
};
</script>
