<template>
  <div class="">
    <p>登记领口罩</p>
    <img src="./images.png" alt="" />
    <input type="text" v-model="name" />
    <button>提交</button>
    <p>是否微信环境{{ isWX }}</p>
    <p>浏览器环境{{ userAgent }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      userAgent: ""
    };
  },
  computed: {
    isWX() {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) && (ua.match(/MicroMessenger/i)[0] === "micromessenger")) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.userAgent = window.navigator.userAgent
      .toLowerCase()
      .match(/MicroMessenger/i) && window.navigator.userAgent
      .toLowerCase()
      .match(/MicroMessenger/i)[0];
  },
  methods: {}
};
</script>
<style></style>
