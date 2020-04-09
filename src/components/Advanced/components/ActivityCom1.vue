<template>
  <div class="">
    <H2>AC1</H2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log('AC1 beforeCreate');
  },
  created() {
    console.log('AC1 created');
  },
  beforeMount(){
    console.log('AC1 beforeMount');
  },
  mounted() {
    console.log('AC1 mounted');
  },
  beforeUpdate(){
    console.log('AC1 beforeUpdate');
  },
  updated() {
    console.log('AC1 updated');
  },
  beforeDestroy(){
    console.log('AC1 beforeDestroy');
  },
  destroyed() {
    console.log('AC1 销毁');
  },
  methods: {}
};
</script>
<style>

</style>
