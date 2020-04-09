<template>
  <div class="for">
    <div v-for="(item,index) in infoList" :key='index'>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoList: [
        {name:'laughing',age:20},
        {name:'lili',age:20},
        {name:'lulu',age:20},
        {name:'xixi',age:20},
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>

</style>
