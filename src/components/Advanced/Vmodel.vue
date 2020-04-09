<template>
  <div class="">
    <p>{{name}}</p>
    <CustomModel v-model="name"/>
  </div>
</template>
<script>
import CustomModel from './components/CustomModel.vue'
export default {
  components:{
    CustomModel
  },
  data() {
    return {
      name:'lili'
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>

</style>
