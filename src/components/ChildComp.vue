<template>
  <h1>childcomp</h1>
  <div>
    <p>这是公共子组件</p>
    <h2>{{ info }}</h2>
    <h2>{{ time }}</h2>
    <div
      :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }"
    >
      <a-space>
        <a-button type="primary" ghost>查询</a-button>
        <a-button @click="handleAdd('new')" ghost>新增</a-button>
        <a-button type="dashed" ghost>修改</a-button>
        <a-button @click="handleDel('del')" type="primary" danger ghost
          >删除</a-button
        >
      </a-space>
    </div>
  </div>
  <div class="table-con">
    <div class="table-one">
      <a-table
        :columns="columns"
        :row-key="(rowKeyId) => rowKeyId.login.uuid"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'"
            >{{ text.first }} {{ text.last }}</template
          >
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { usePagination } from "vue-request";
import { defineProps, defineEmits, computed } from "vue";
import axios from "axios";
console.log("setup语法糖");
defineProps({
  info: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "0分钟",
  },
});

let $emits = defineEmits(["handleAdd", "handleDel"]);

//定义数据
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];

const queryData = (params) => {
  return axios.get("https://randomuser.me/api?noinfo", { params });
};

const {
  data: dataSource,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  formatResult: (res) => res.data.results,
  pagination: {
    currentKey: "page",
    pageSizeKey: "results",
  },
});
//绑定分页信息配置
const pagination = computed(() => ({
  total: 100,
  current: current.value,
  pageSize: pageSize.value,
  position: ["bottomCenter"],
  hideOnSinglePage: false,
  showSizeChanger: true,
  showQuickJumper: true,
}));

// 分页、排序、筛选变化时触发
const handleTableChange = (pag, filters, sorter) => {
  console.log(pag, filters, sorter);
  run({
    results: pag.pageSize,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};

// 方法
const handleAdd = (data) => {
  console.log(data);
  $emits("handleAdd", data);
};

const handleDel = (data) => {
  console.log(data);
  $emits("handleDel", data);
};
</script>

<style lang="less" scoped>
.table-con {
  border: 1px solid red;
  padding: 50px;
  .table-one {
    border: 1px solid green;
    padding: 10px;
  }
}
</style>
