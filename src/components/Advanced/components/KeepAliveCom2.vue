<template>
  <div class="">
    <h2>ka2</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("keepalivecom2 beforeCreate");
  },
  created() {
    console.log("keepalivecom2 created");
  },
  beforeMount() {
    console.log("keepalivecom2 beforeMount");
  },
  mounted() {
    console.log("keepalivecom2 mounted");
  },
  beforeUpdate() {
    console.log("keepalivecom2 beforeUpdate");
  },
  updated() {
    console.log("keepalivecom2 updated");
  },
  activated() {
    console.log("keepalivecom2 activated");
  },
  deactivated() {
    console.log("keepalivecom2 deactivated");
  },
  beforeDestroy() {
    console.log("keepalivecom2 beforeDestroy");
  },
  destroyed() {
    console.log("keepalivecom2 销毁");
  },
  methods: {}
};
</script>
<style></style>
