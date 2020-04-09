<template>
  <div class="">
    <div>
      <p>文本插值{{message}}</p>
      <p>js表达式</p>
      <p :id="dynamicId">动态属性</p>
      <p v-html="rawHtml">
        <span>xss风险</span>
        <span>注意使用v-html之后，将会覆盖子元素</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '这是message',
      flag: false,
      rawHtml: '指令 - 原始html<b>加粗</b><i>斜体</i>',
      dynamicId: `id-${Date.now()}`
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>

</style>
