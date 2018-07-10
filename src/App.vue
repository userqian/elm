<template>
  <div id="app">
    <m-header></m-header>
    <div class="tab border-b-1px">
      <router-link to='/' exact class="tab-item">商品</router-link>
      <router-link to='/ratings' class="tab-item">评价</router-link>
      <router-link to='/seller' class="tab-item">商家</router-link>
    </div>
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

<style lang='stylus' rel='stylesheet/stylus'>
@import 'common/styl/minxi.styl'
.tab
  display: flex;
  height 40px;
  line-height 40px;
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex 1
    text-align center
    color rgb(77,85,93)
    font-size 14px
    &.active
      color rgb(240,20,20)
</style>
