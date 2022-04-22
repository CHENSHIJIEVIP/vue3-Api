<template>
  <h1>Custom</h1>
  <div>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "ToRef",
  setup() {
    // let keyWord = ref('hello'); //vue提供ref
    let keyWord = myRef("hello", 500); //自定义的ref

    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(value);
            track(); //追踪
            return value;
          },
          set(newValue) {
            console.log(`myRef修改${newValue}`);
            value = newValue;
            clearTimeout(timer);
            timer = setTimeout(() => {
              trigger(); //重新解析模板
            }, delay);
          },
        };
      });
    }

    return {
      keyWord,
    };
  },
};
</script>

<style scoped></style>
