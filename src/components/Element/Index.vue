<template>
  <div class="">
    <Input @addInfo = 'addInfo'/>
    <List :list='list'/>
  </div>
</template>
<script>
import Input from './Input'
import List from './List'

export default {
  components: {
    Input,
    List
  },
  data() {
    return {
      list:[
        {name:'lili',age:20},
        {name:'lele',age:25}
      ]
    };
  },
  beforeMount() {
    console.log("beforeMount", this.$el, this.data);
  },
  mounted() {
    console.log("mounted", this.$el, this.data);
  },
  beforeUpdate() {
    console.log('index beforeupdate');
    
  },
  updated() {
    console.log('index update');
    
  },
  methods: {
    addInfo(name){
      this.list.push({name,age:30})
    }
  }
};
</script>
<style>

</style>
