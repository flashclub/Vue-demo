<template>
  <div class="">
    <button @click="componentId == 'AC1'? componentId ='AC2':componentId='AC1'">切换组件</button>
    <!-- 动态组件 -->
    <!-- 和keepalive一起使用 提高vue性能，
    因为组件不会进行销毁操作而是将不活动的组件实例缓存起来 -->
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
    <!-- 异步组件 -->
    <!-- 在大型应用比如表单时可提高性能 -->
    <AC3></AC3>
  </div>
</template>
<script>
import AC1 from './components/ActivityCom1'
import AC2 from './components/ActivityCom2'
export default {
  components:{
    AC1,
    AC2,
    // 异步组件，
    // 在大兴应用中可以提高vue性能
    'AC3': ()=> import ('./components/ActivityCom3')
  },
  data() {
    return {
      componentId:'AC1'
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>

</style>
