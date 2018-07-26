<template>
  <i class='icon' :class="classMap[site]" ></i>
</template>

<script>

export default {
  props: {
    size: {
      type: Number
    },
    site: {
      type: Number
    }
  },
  data(){
    return{
      classMap: ['decrease' + this.size, 'discount' + this.size, 'guarantee' + this.size, 'invoice' + this.size, 'special' + this.size]
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/styl/minxi.styl'
.icon
  &.decrease1
    bg-img(decrease_1)
  &.discount1
    bg-img(discount_1)
  &.guarantee1
    bg-img(guarantee_1)
  &.invoice1
    bg-img(invoice_1)
  &.special1
    bg-img(special_1)
  &.decrease3
    bg-img(decrease_3)
  &.discount3
    bg-img(discount_3)
  &.guarantee3
    bg-img(guarantee_3)
  &.invoice3
    bg-img(invoice_3)
  &.special3
    bg-img(special_3)
</style>
