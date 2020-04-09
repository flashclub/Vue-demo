<template>
  <div class="">
    <H2>AC3</H2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log('AC3 beforeCreate');
  },
  created() {
    console.log('AC3 created');
  },
  beforeMount(){
    console.log('AC3 beforeMount');
  },
  mounted() {
    console.log('AC3 mounted');
  },
  beforeUpdate(){
    console.log('AC3 beforeUpdate');
  },
  updated() {
    console.log('AC3 updated');
  },
  beforeDestroy(){
    console.log('AC3 beforeDestroy');
  },
  destroyed() {
    console.log('AC3 销毁');
  },
  methods: {}
};
</script>
<style>

</style>
