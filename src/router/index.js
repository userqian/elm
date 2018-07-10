import Vue from 'vue'
import Router from 'vue-router'
import ratings from 'components/ratings/ratings'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
});

export default router;
