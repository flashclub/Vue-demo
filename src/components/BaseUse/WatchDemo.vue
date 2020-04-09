<template>
  <div class="watch">
    <div @click="changeName">{{ name }}修改name</div>
    <div @click="changeNumber">{{ num }}修改number</div>
    <div @click="changeInfo">{{ info.address }}修改info</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "laughing",
      num: 0,
      info: {
        address: "南京"
      }
    };
  },
  watch: {
    num(newVal, val) {
      console.log(newVal, val);
    },
    name(newVal, val) {
      console.log(newVal, val);
    },
    info: {
      handler(newVal, val) {
        console.log(newVal, val);
      },
      deep: true
    }
  },
  mounted() {},
  methods: {
    changeNumber() {
      this.num = 11;
    },
    changeName() {
      this.name = "eeee";
    },
    changeInfo() {
      this.info.address = "12222";
    }
  }
};
</script>
<style></style>
