<template>
  <div class="son">
    <h3>Son组件</h3>
    <button @click="open">打开弹窗</button>
    <dialogC :isShowDialog="isShow" :msg="7777" @closeDialog="close">
      <template v-slot:qwe>
        <span>插槽1</span>
      </template>
      <template v-slot:qaz>
        <span>插槽2</span>
      </template>
    </dialogC>
  </div>
</template>

<script>
import { ref } from "vue";
import DialogC from "./DialogC.vue";
export default {
  name: "son",
  components: {
    DialogC,
  },
  // emits:['closeDialog'],
  setup() {
    let isShow = ref(false);
    function open() {
      isShow.value = true;
      console.log("open", isShow.value);
    }
    function close(val) {
      console.log("close", val);
      isShow.value = val;
    }

    return { isShow, open, close };
  },
};
</script>

<style scoped>
.son {
  background: rgb(255, 0, 200);
  padding: 10px;
}
</style>
