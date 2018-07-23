<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          <span>{{seller.description}} / {{seller.deliveryTime}}分钟送达</span>
        </div>
        <div class="supports" v-if="seller.supports">
          <i class="icon" :class="classMap[seller.supports[0].type]"></i>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrap">
      <i class="icon bulletin"></i><span class="bulletin-content">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created(){
    // 设置icon图标
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/styl/minxi.styl'
  .header
    background #999
    color rgb(255,255,255)
    .content-wrap
      position relative
      display flex
      padding 24px 0 18px 24px
      .avatar
        width 64px
        height 64px
        img
          width 100%
          border-radius 2px
      .content
        margin-left 18px
        .title
          font-size 0
          .brand
            display inline-block
            width 30px
            height 18px
            bg-img(brand)
            margin-right 6px
            vertical-align top
          .name
            line-height 18px
            font-size 16px
        .description
          line-height 12px
          font-size 12px
          margin-top 8px
          margin-bottom 10px
        .supports
          font-size 0
          .icon
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            vertical-align -2px
            &.decrease
              bg-img(decrease_1)
            &.discount
              bg-img(discount_1)
            &.guarantee
              bg-img(guarantee_1)
            &.invoice
              bg-img(invoice_1)
            &.special
              bg-img(special_1)
          .text
            font-size 10px
            line-height 12px
      .support-count
        position absolute
        right 12px
        bottom 18px
        height 24px
        line-height 24px
        padding 0 8px
        border-radius 12px
        background rgba(0,0,0,.2)
        font-size 0
        .count
          font-size 10px
          margin-right 2px
          vertical-align top
        .icon-keyboard_arrow_right
          font-size 10px
          line-height 24px
    .bulletin-wrap
      position relative
      height 28px
      line-height 28px
      padding 0 12px
      background rgba(7,17,27,.2)
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      .icon
        display inline-block
        width 22px
        height 12px
        vertical-align top
        margin-top 8px
        &.bulletin
          bg-img(bulletin)
      .bulletin-content
        vertical-align top
        font-size 12px
        margin 0 4px
      .icon-keyboard_arrow_right
        position: absolute;
        top: 8px;
        right: 5px;
        font-size: 12px;
</style>
