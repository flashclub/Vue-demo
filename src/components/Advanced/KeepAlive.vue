<template>
  <div class="">
    <button @click="target === 1 ? target = 2: target = 1">切换</button>
    <!-- 使用keep-alive可以提高vue性能 -->
    <!-- 子组件只加载一次，之后每次显示均不触发生命周期 -->
    <keep-alive>
      <ka1 v-if="target === 1"></ka1>
      <ka2 v-if="target === 2"></ka2>
    </keep-alive>
    <!-- <ka1 v-show="target === 1"></ka1> -->
  </div>
</template>
<script>
import ka1 from './components/KeepAliveCom1.vue'
import ka2 from './components/KeepAliveCom2.vue'
export default {
  components:{
    ka1,ka2
  },
  data() {
    return {
      target:0
    };
  },
  mounted() {},
  methods: {
    shiftC(){

    }
  }
};
</script>
<style>

</style>
