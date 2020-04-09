<template>
  <div class="">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import event from "./event.js";

export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    event.$on("inputEvent", this.inputEvent);
  },
  beforeUpdate() {
    console.log("list beforeupdate");
  },
  updated() {
    console.log("list updated");
  },
  methods: {
    inputEvent(val) {
      console.log("dddd", val);
    }
  },
  beforeDestroy() {
    // 及时销毁，避免内存泄露
    console.log("销毁list组件");
    event.$off("inputEvent", this.inputEvent);
  }
};
</script>
<style></style>
