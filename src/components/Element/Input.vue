<template>
  <div class="">
    <input type="text" v-model="val" />
    <button @click="addInfo">添加</button>
  </div>
</template>
<script>
import event from "./event.js";
export default {
  data() {
    return {
      val: ""
    };
  },
  mounted() {},
  methods: {
    addInfo() {
      this.$emit("addInfo", this.val);
      event.$emit("inputEvent", this.val);
    }
  }
};
</script>
<style></style>
