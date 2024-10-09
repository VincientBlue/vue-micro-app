const routes = [
  {
      path: '/microtest',
      name: 'index',
      title: '首页',
      component: () => import('@/components/HelloWorld.vue'), //.vue不能省略
  }
]
export default routes
