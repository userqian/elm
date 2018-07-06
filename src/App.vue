<template>
  <div id="app">
    <m-header></m-header>

    <router-view/>
  </div>
</template>

<script>
import mHeader from 'components/header/header.vue'
export default {
  name: 'App',
  components: {
    mHeader
  }
}
</script>

<style>

</style>
