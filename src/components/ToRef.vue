<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>薪资： {{ job.j1.salary }}</h2>
  <h3 v-if="person.car">汽车： {{ person.car.name }}</h3>
  <h2>{{ name1 }}</h2>
  <h2>{{ name2 }}</h2>
  <h2>{{ person }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <hr />
  <h2>{{ sr.y }}</h2>
  <button @click="showRawPerson">输出原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '！'">换车名称</button>
  <button @click="changePrice">换车价格</button>
</template>

<script>
import {
  ref,
  reactive,
  toRef,
  toRefs,
  shallowRef,
  shallowReactive,
  shallowReadonly, //外层只读
  readonly, //深只读
  toRaw, //只作用于reactive的对象（生成一个原始对象）
  markRaw,
  customRef,
} from "vue";
export default {
  name: "ToRef",
  setup() {
    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // person = readonly(person)

    const name1 = person.name;
    console.log("@@", name1);

    const name2 = toRef(person, "name");
    console.log("##", name2);

    const x = toRefs(person);
    console.log("$$", x);

    let sr = shallowRef({
      //替换外层
      y: 0,
    });
    console.log("&&", sr);

    function showRawPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(person, p);
    }

    function addCar() {
      let car = {
        name: "奔驰",
        price: 40,
      };
      person.car = car;
      person.car = markRaw(car);
    }

    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    return {
      person,
      name1,
      name2,
      ...toRefs(person),
      sr,
      sum,
      showRawPerson,
      addCar,
      changePrice,
    };
  },
};
</script>
