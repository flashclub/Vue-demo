<template>
  <div class="computed">
    <div @click="changeName">改变name</div>
    <p>name : {{ name }}</p>
    <div @click="changeNum2">改变数字</div>
    <p>数字{{ num }}</p>
  </div>
</template>
<script>
/**
* computed有两种形式见name和num2
name的形式第一个参数是this，第二个undefined
num2的形式接受get和set，get必须return一个值
有缓存，只要依赖的值不变就不会重复计算
没有新旧值概念
*/
export default {
  data() {
    return {
      message: "",
      num: 5
    };
  },
  computed: {
    name(val1, val2) {
      console.log(val1 === this, val2);
      return this.message;
    },
    num2: {
      get(val1, val2) {
        console.log(val1, val2);

        return this.num;
      },
      set(val1, val2) {
        console.log(val1, val2);
        this.num = val1;
      }
    }
  },
  mounted() {},
  methods: {
    changeName() {
      this.message = "laughing";
    },
    changeNum2() {
      ++this.num2;
    }
  }
};
</script>
<style></style>
