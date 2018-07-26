<template>
  <div class="goods" v-if="goods.length">
    <div ref='menu'>
      <ul class="menu-wrap">
        <li class="menu-item" v-for="(item,index) in goods" :key="index" :class="{'active': currentIndex === index}">
          <span class="name border-1px">
            <icon v-if="item.type > 0" :size=3 :site=item.type-1></icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div ref="foods">
      <div class="foods-wrap">
        <ul>
          <li class="foods-list foods-hock" v-for="(item, index) in goods" :key="index">
            <h3 class="title">{{item.name}}</h3>
            <ul>
              <li class="food-item" v-for="(food, index) in item.foods" :key="index">
                <div class="avatar">
                  <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <p class="name">{{food.name}}</p>
                  <p class="desc">{{food.description}}</p>
                  <div class="sell-info">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                  </div>
                  <div class="sell-price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {URL, ERR_OK} from "common/js/config.js";
import icon from 'components/icon/icon'
import Bscroll from 'better-scroll'
export default {
  data(){
    return{
      goods: [],
      foodsHeight: [],
      scrollY: 0
    }
  },
  created(){
    this.getData()
  },
  mounted(){
    setTimeout(() => {
      this.initScroll(this.$refs.menu)
      this.initScroll(this.$refs.foods)
      this.getFoodsHeight()
    }, 500)
  },
  computed: {
    currentIndex(){
      let foods = this.foodsHeight;
      console.log(foods)
      for(let i = 0, len = foods.length; i < len; i++){
        let height1 = foods[i];
        let height2 = foods[i + 1];
        if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
          console.log(height1, height2)
          console.log(this.scrollY)
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    getData(){
      this.axios.get(URL + '/goods')
      .then(res => {
        if(res.status === ERR_OK){
          this.goods = res.data.data.goods
        }
      }).catch(err => {
        console.log(err)
      })
    },
    initScroll(el){
      this.scroll = new Bscroll(el, {
        probeType: 3 // 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
      });
      this.scroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    getFoodsHeight(){
      let foods = this.$refs.foods.getElementsByClassName('foods-hock');
      let height = 0;
      this.foodsHeight.push(height);
      for(let i = 0, len = foods.length; i < len; i++){
        let item = foods[i];
        height += item.clientHeight;
        this.foodsHeight.push(height)
      }
    }
  },
  components: {
    icon
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/styl/minxi.styl'
  .goods
    position absolute
    top 174px
    bottom 53px
    display flex
    width 100%
    overflow hidden
    .menu-wrap
      flex 0 0 80px
      width 80px
      .menu-item
        display table
        width 56px
        height 54px
        line-height 14px
        padding 0 12px
        background #f3f5f7
        &.active
          position relative
          top -1px
          z-index 100
          background #fff
          font-weight 700
          border-1px(#fff)
          .name
            border-none()
        .icon
          display inline-block
          width 12px
          height 12px
          vertical-align top
          margin-right 2px
        .name
          display table-cell
          vertical-align middle
          font-size 12px
          width 56px
          border-1px(rgba(7,17,27,.2))
    .foods-wrap
      flex 1
      .foods-list
        .title
          width 100%
          height 26px
          line-height 26px
          background #f3f5f7
          padding-left 14px
          color rgb(147, 153, 159)
          font-weight normal
          font-size 12px
          border-left 2px solid  #d9dde1
        ul
          .food-item
            display flex
            padding 18px
            border-1px(rgba(7,17,27,.1))
            &:last-child
              border-none()
            .avatar
              flex 0 0 57px
              margin-right 10px
              img
                width 100%
            .content
              flex 1
              padding-top 2px
              .name
                font-size 14px
                line-height 14px
                font-weight 700
                color rgb(7, 17, 27)
              .desc, .sell-info
                margin 8px 0
                font-size 10px
                color rgb(147, 153, 159)
                line-height 14px
              .sell-info
                span
                  margin-right 12px
              .sell-price
                font-weight 700
                line-height 24px
                .now
                  font-size 14px
                  color rgb(240,20,20)
                  margin-right 8px
                .old
                  font-size 10px
                  text-decoration line-through
                  color rgb(147, 153, 159)
</style>
