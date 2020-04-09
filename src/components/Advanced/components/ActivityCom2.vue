<template>
  <div class="">
    <H2>AC2</H2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("AC2 beforeCreate");
  },
  created() {
    console.log("AC2 created");
  },
  beforeMount() {
    console.log("AC2 beforeMount");
  },
  mounted() {
    console.log("AC2 mounted");
  },
  beforeUpdate() {
    console.log("AC2 beforeUpdate");
  },
  updated() {
    console.log("AC2 updated");
  },
  beforeDestroy() {
    console.log("AC2 beforeDestroy");
  },
  destroyed() {
    console.log("AC2 销毁");
  },
  methods: {}
};
</script>
<style></style>
