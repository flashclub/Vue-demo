<template>
  <div class="">
    <h2>ka1</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  beforeCreate() {
    console.log('keepalivecom1 beforeCreate');
  },
  created() {
    console.log('keepalivecom1 created');
  },
  beforeMount(){
    console.log('keepalivecom1 beforeMount');
  },
  mounted() {
    console.log('keepalivecom1 mounted');
  },
  beforeUpdate(){
    console.log('keepalivecom1 beforeUpdate');
  },
  updated() {
    console.log('keepalivecom1 updated');
  },
  activated() {
    console.log('keepalivecom1 activated');
  },
  deactivated() {
    console.log('keepalivecom1 deactivated');
  },
  beforeDestroy(){
    console.log('keepalivecom1 beforeDestroy');
  },
  destroyed() {
    console.log('keepalivecom1 销毁');
  },
  methods: {},
};
</script>
<style>

</style>
