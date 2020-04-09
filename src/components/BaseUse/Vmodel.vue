<template>
  <div class="">
    <p>{{ val1 }}</p>
    <input type="text" v-bind:value="val1" v-on:input="change" />
    <br />
    <br />
    <input type="text" :value="val1" @input="change" />
    <br />
    <br />
    <input type="text" v-model="val1" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: "00"
    };
  },
  mounted() {},
  methods: {
    change(event) {
      this.val1 = event.target.value;
    }
  }
};
</script>
<style></style>
