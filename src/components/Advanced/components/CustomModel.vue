<template>
  <div class="">
    <input
      type="text"
      :value="text"
      @input="$emit('change', $event.target.value)"
    />
    <input
      type="text"
      :value="text"
      v-on:input="$emit('change', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  model: {
    prop: "text",
    event: "change"
  },
  props: {
    text: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style></style>
