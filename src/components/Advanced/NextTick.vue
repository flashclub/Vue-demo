<template>
  <div class="">
    <button @click="addItem">添加</button>
    <ul ref="nt">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "lili" },
        { id: 2, name: "lili" },
        { id: 3, name: "lili" }
      ],
      num: 3
    };
  },
  mounted() {
    console.log(this.$refs.nt);
  },
  methods: {
    addItem() {
      this.items.push({ id: ++this.num, name: "meimei" });
      this.items.push({ id: ++this.num, name: "meimei" });
      this.items.push({ id: ++this.num, name: "meimei" });
      console.log("nextTick之前", this.$refs.nt.childNodes.length);
      this.$nextTick(() => {
        console.log("nextTick之后", this.$refs.nt.childNodes.length);
      });
      setTimeout(() => {
        console.log("setTimeout之后", this.$refs.nt.childNodes.length);
      }, 0);
    }
  }
};
</script>
<style></style>
