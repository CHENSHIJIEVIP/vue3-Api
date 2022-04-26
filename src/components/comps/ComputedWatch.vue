<template>
  <div class="warp">
    <h1>computed-watch</h1>
    <hr />
    <br />
    <fieldset>
      <legend>姓名操作</legend>
      <p>姓：<a-input v-model:value="user.firstName" style="width: 50%" /></p>
      <p>名：<a-input v-model:value="user.lastName" style="width: 50%" /></p>
    </fieldset>

    <div style="background: #123456; padding: 20px 0">
      <p>
        <span style="color: #fff">姓名1：</span>
        <a-input v-model:value="fullName1" style="width: 50%" />
      </p>
      <p>
        <span style="color: #fff">姓名2：</span
        ><a-input v-model:value="fullName2" style="width: 50%" />
      </p>
      <p>
        <span style="color: #fff">姓名3：</span
        ><a-input v-model:value="fullName3" style="width: 50%" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRef, watch, watchEffect } from "vue";
// let firstName = ref("123");
// let lastName = ref("456");
// let fullName1 = firstName.value + "_" + lastName.value;
const user = reactive({
  firstName: "东方",
  lastName: "不败",
});
const fullName1 = computed(() => {
  return user.firstName + "_" + user.lastName;
});

const fullName2 = computed({
  get() {
    return user.firstName + "_" + user.lastName;
  },
  set(val) {
    console.log(val);
    const names = val.split("_");
    user.firstName = names[0];
    user.lastName = names[1];
  },
});

const fullName3 = ref("");
watch(
  user,
  ({ firstName, lastName }) => {
    fullName3.value = firstName + "_" + lastName;
  },
  { immediate: true, deep: true }
);

//监听：使用谁监视谁， 默认执行一次
watchEffect(() => {
  fullName3.value = user.firstName + "_" + user.lastName;
});

//监听fullName3的数据，改变firstName和lastName
watchEffect(() => {
  const names = fullName3.value.split("_");
  user.firstName = names[0];
  user.lastName = names[1];
});

// watch---可以监听多个数据
watch([() => user.firstName, () => user.lastName], (val) => {
  console.log(7777, val);
});
</script>

<style lang="scss" scoped>
.warp {
  border: 1px dashed green;
}
</style>
