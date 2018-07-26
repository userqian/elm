<template>
  <div class="goods" v-if="goods.length">
    <ul class="menu-wrap">
      <li class="menu-item" v-for="(item,index) in goods" :key="index">
        <span class="name border-1px">
          <icon v-if="item.type > 0" :size=3 :site=item.type-1></icon>
          {{item.name}}
        </span>
      </li>
    </ul>
    <div class="foods-wrap"></div>
  </div>
</template>

<script>
import {URL, ERR_OK} from "common/js/config.js";
import icon from 'components/icon/icon'
export default {
  data(){
    return{
      goods: []
    }
  },
  created(){
    this.getData()
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
      background #f3f5f7
      .menu-item
        display table
        width 56px
        height 54px
        line-height 14px
        padding 0 12px
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
</style>
