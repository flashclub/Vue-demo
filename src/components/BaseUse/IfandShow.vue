<template>
  <div class="if-show">
    <p v-if="a === 'a'">v-if a = 'a'</p>
    <p v-else>v-if a = 'b'</p>

    <p v-show="a === 'a'">v-show a = 'a'</p>
    <p v-show="a !== 'a'">v-shwo a = 'b'</p>
    <div @click="a ==='a' ? a = 'a' : a = 'b'">改值</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 'a'
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>

</style>
