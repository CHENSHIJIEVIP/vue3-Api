import { ref } from "vue";

import axios from "axios";

//发送ajax的请求
export default function (url) {
  const loading = ref(true);
  const data = ref(null);
  const errorMsg = ref("");

  //发送请求
  axios
    .get(url)
    .then((response) => {
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      loading.value = false;
      errorMsg.value = error.message || "未知错误";
    });

  return {
    loading,
    data,
    errorMsg,
  };
}
