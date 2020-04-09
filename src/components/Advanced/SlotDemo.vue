<template>
  <div class="">
    <div>slotdemo</div>
    <Slotcomponent></Slotcomponent>
    <Slotcomponent>
      <!-- 作用域插槽 -->
      <!-- 注意这里的v-slot接收参数slots，
      它接收的是组件中导出的数据，这里的slot.slotData === 组件中的info -->
      <template v-slot="slots">
        <div>
          {{ slots.slotData.subName }}
        </div>
      </template>
      <!-- 具名插槽 -->
      <!-- 这里的v-slot格式与作用域插槽不同，：后面 值为插槽中name定义的值-->
      <template v-slot="slots">
        <div>
          {{ slots.slotData.subName }}
          footer内容
        </div>
      </template>
      <template v-slot:header>
        <div>
          header内容
        </div>
      </template>
    </Slotcomponent>
  </div>
</template>
<script>
import Slotcomponent from "./components/SlotComponent.vue";
export default {
  components: {
    Slotcomponent
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style></style>
