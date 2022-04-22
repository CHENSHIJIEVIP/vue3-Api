import {
  Button,
  Divider,
  Space,
  Table,
  Input,
  ConfigProvider,
} from "ant-design-vue";

const components = { Button, Divider, Space, Table, Input, ConfigProvider };

export default {
  install(vm) {
    Object.values(components).forEach((c) => {
      vm.use(c);
    });
  },
};
