<template>
  <div class="">
    <input type="text" v-bind = 'val1' v-on:change = 'change'>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: '',
    };
  },
  mounted() {},
  methods: {
    change(){

    }
  }
};
</script>
<style>

</style>
