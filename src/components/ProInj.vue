<template>
  <hr />
  <h1>ProvideOrInject</h1>
  <div class="proinj">
    <h3>父组件（主）--- {{ name }}的价格是{{ price }}</h3>
    <childC></childC>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  provide,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";
import ChildC from "./comps/ChildC.vue";
export default {
  name: "ToRef",
  components: {
    ChildC,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 400,
    });

    provide("car", car);

    let sum = ref(0);

    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car2));
    console.log(isProxy(sum));

    return { ...toRefs(car) };
  },
};
</script>

<style scoped>
.proinj {
  background: rgb(72, 255, 0);
  padding: 10px;
}
</style>
