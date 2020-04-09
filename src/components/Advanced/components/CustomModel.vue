<template>
  <div class="">
    <!-- 
      允许一个自定义组件在使用 v-model 时定制 prop 和 event。
      默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，
      但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。
      使用 model 选项可以回避这些情况产生的冲突。
     -->

    <input
      type="text"
      :value="text1"
      @input="$emit('change', $event.target.value)"
    />
  </div>
</template>
<script>
/*/**
* 允许一个自定义组件在使用 v-model 时定制 prop 和 event。
  默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，
  但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。
  使用 model 选项可以回避这些情况产生的冲突。
*/

export default {
  model: {
    prop: "text1",
    event: "change"
  },
  props: {
    text1: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log('mounted');
    console.log(this.text);
    console.log(this.text1);
    
    this.text = this.text1
  },
  methods: {}
};
</script>
<style></style>
