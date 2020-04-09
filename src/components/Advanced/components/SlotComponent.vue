<template>
  <div class="">
    <h2>slotcomponent</h2>
    <slot :slotData="info">{{ info.name }}</slot>
    <slot name="header" :slotData="info">{{ info.name }}</slot>
    <slot name="footers">{{ info.name }}</slot>

    <!-- <slot>{{info.name}}</slot> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        name: "lili",
        subName: "dddd"
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style></style>
