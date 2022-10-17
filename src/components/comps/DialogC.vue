<template>
  <div class="dialog" v-show="isShowDialog">
    <div class="box-con">
      <h3>dialog组件{{ isShowDialog }}{{ msg }}</h3>
      <slot name="qwe" />
      <p>{{ car.name }}-- {{ car.price }}</p>
      <button @click="closeDialog">关闭弹窗</button><br />
      <slot name="qaz" />
    </div>
  </div>
</template>

<script>
import { inject, onMounted, ref, toRefs } from "vue";
export default {
  name: "DialogC",
  props: {
    isShowDialog: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log(this);
  },
  setup(props, context) {
    let car = inject("car");

    console.log("props", props);
    console.log("context", context);

    onMounted(() => {
      console.log(333, props.isShowDialog);
    });

    function closeDialog() {
      console.log("closeDialog", props);
      context.emit("closeDialog", false);
    }
    return { car, closeDialog };
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}
.box-con {
  border: 1px solid red;
  width: 400px;
  height: 300px;
  background: rgba(255, 251, 1, 0.432);
  padding: 10px;
  margin: 0 auto;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
