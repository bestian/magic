
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'rule', component: () => import('pages/3rule.vue') },
      { path: 'great', component: () => import('pages/great.vue') },
      { path: 'band', component: () => import('pages/band.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
