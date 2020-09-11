const routes = [
    // {
    //   path: '/',
    //   name: '',
    //   component: () => import('@/app.vue'),
    //   children: [
    //   ],
    // },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/user/Login.vue'),
    },
  ]
  
  export default routes
  