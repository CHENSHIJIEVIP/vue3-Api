import {
  Button,
  Divider,
  Space,
  Table,
  Input,
  ConfigProvider,
  Pagination,
} from "ant-design-vue";

const components = {
  Button,
  Divider,
  Space,
  Table,
  Input,
  ConfigProvider,
  Pagination,
};

export default {
  install(vm) {
    Object.values(components).forEach((c) => {
      vm.use(c);
    });
  },
};
