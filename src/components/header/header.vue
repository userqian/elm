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
          <!-- <i class="icon" :class="classMap[seller.supports[0].type]"></i> -->
          <icon :size=1 :site=seller.supports[0].type></icon>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrap">
      <i class="icon bulletin"></i><span class="bulletin-content">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <!-- 弹出框 -->
    <transition name="fade">
      <div class="support-detail" v-if="supportDetail">
        <div class="detail-wrap clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <star :size = 48 :score = 'seller.score'></star>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠详情</div>
              <div class="line"></div>
            </div>
            <ul class="supports-list" v-if="seller.supports">
              <li class="supports-item" v-for="(item, index) in seller.supports" :key="index">
                <icon :size=1 :site=item.type></icon>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="showDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from 'components/star/star'
import icon from 'components/icon/icon'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data(){
    return{
      supportDetail: false
    }
  },
  created(){
    // this.classMap = classMap
  },
  methods:{
    showDetail(){
      this.supportDetail = !this.supportDetail
    }
  },
  components: {
    star,
    icon
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/styl/minxi.styl'
  .header
    position relative
    color rgb(255,255,255)
    background rgba(7,17,27,0.2)
    overflow hidden
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
    .background
      position absolute
      top 0px
      left 0px
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
      img
        width 100%
        height 100%
    .support-detail{
      position fixed
      top 0px
      left 0px
      width 100%
      height 100%
      background rgba(7,17,27,0.8)
      z-index 100
      overflow auto
      backdrop-filter blur(10px)
      .detail-wrap{
        width 100%
        min-height 100%
        .detail-main{
          margin-top 64px
          padding-bottom 64px
          .name{
            text-align center
            font-size 16px
            font-weight 700
            line-height 16px
          }
          .star{
            text-align center
            margin-top 16px
          }
          .title{
            display flex
            width 80%
            margin 28px auto 24px
            align-items center
            .line{
              flex 1
              border-1px(rgba(255,255,255,.2))
            }
            .text{
              margin 0 12px
              font-size 14px
              font-weight 700
              line-height 14px
            }
          }
          .supports-list{
            width 80%
            margin 0 auto
            .supports-item{
              margin-bottom 12px
              font-size 0
              &:last-child{
                margin-bottom 0
              }
              .icon{
                display inline-block
                width 16px
                height 16px
                margin-right 6px
                vertical-align top
              }
              .text{
                font-size 12px
                line-height 16px
              }
            }
          }
          .bulletin{
            width 80%
            margin 0 auto
            .content{
              font-size 12px
              line-height 24px
              padding 0 12px
            }
          }
        }
      }
      .detail-close{
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        font-size 32px
      }
    }
</style>
