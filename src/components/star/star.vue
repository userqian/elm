<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" :key="index" class="star-item" :class="itemClass"></span>
  </div>
</template>

<script>
const COUNT = 5
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      // 根据传进来的星星大小 添加class
      return 'star-' + this.size
    },
    itemClasses() {
      let resource = []
      // 获得整数
      let integer = Math.floor(this.score * 2) / 2
      // 获得小数
      let isHalf = this.score % 2 !== 0
      for(let i = 0; i < integer; i++){
        resource.push(STAR_ON)
      }
      if(isHalf){
        resource.push(STAR_HALF)
      }
      if(resource.length < 5){
        resource.push(STAR_OFF)
      }
      return resource
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/styl/minxi.styl'
.star
  font-size 0
  .star-item
    display inline-block
  &.star-48
    .star-item
      width 24px
      height 24px
      margin-right 22px
      &:last-child
        margin-right 0
      &.on
        bg-img('star48_on')
      &.half
        bg-img('star48_half')
      &.off
        bg-img('star48_off')
  &.star-36
    .star-item
      width 18px
      height 18px
      margin-right 6px
      &:last-child
        margin-right 0
      &.on
        bg-img('star36_on')
      &.half
        bg-img('star36_half')
      &.off
        bg-img('star36_off')
  &.star-24
    .star-item
      width 12px
      height 12px
      margin-right 3px
      &:last-child
        margin-right 0
      &.on
        bg-img('star24_on')
      &.half
        bg-img('star24_half')
      &.off
        bg-img('star24_off')
</style>
