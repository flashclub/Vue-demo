<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <Com /> -->
    <!-- <Vmodel /> -->
    <!-- <SlotDemo /> -->
    <!-- <NextTick /> -->
    <!-- <AsyncComponent /> -->
    <!-- <KeepAlive /> -->
    <!-- <Masks /> -->
    <AdvancedVmodel />
  </div>
</template>

<script>
import Com from '@/components/Element/Index'
import Vmodel from '@/components/BaseUse/Vmodel'
import SlotDemo from '@/components/Advanced/SlotDemo'
import NextTick from '@/components/Advanced/NextTick'
import KeepAlive from '@/components/Advanced/KeepAlive'
import AsyncComponent from '@/components/Advanced/AsyncComponent'
import AdvancedVmodel from '@/components/Advanced/Vmodel'
import Masks from '@/components/GetMask/Masks'
export default {
  name: 'App',
  components: {
    Com,
    Vmodel,
    SlotDemo,
    NextTick,
    KeepAlive,
    AsyncComponent,
    Masks,
    AdvancedVmodel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
