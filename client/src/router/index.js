import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/Home')
const Login=()=>import('../views/Login')

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      meta:{
        title:'加班/休假'
      },
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:"/detail/:type/:id",
      name:'detail',
      meta:{
        title:"详情"
      },
      props:true,
      component:()=>import('../views/detail/index')
    },
    {
      path:'/send/:type',
      name:'send',
      props:true,
      component:()=>import('../views/Send')
    }
  ]
})
export default router
// router.beforeEach((to,from,next)=>{
//   document.title=to.meta.title
// })