<template>
  <a-config-provider :autoInsertSpaceInButton="false" :locale="zhCN">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <router-view />
  </a-config-provider>
</template>

<script lang="setup">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { computed, watch } from "vue";

dayjs.locale(zhCN.locale)
dayjs.locale(enUS.locale)

const locale = computed(() => {
  return 'cn'
})

watch(locale, (val) => {
  console.log('app监听',val)
  dayjs.locale(val)
},{immediate: true, deep: true})


dayjs.locale('zh-cn')

export default {
  data(){
    return {
      zhCN
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
