import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import hello2 from '@/components/hello2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a',
      name: 'HelloWorld2',
      component: hello2
    }
  ]
})
