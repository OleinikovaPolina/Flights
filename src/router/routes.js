const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'flights', component: () => import('pages/FlightsPage.vue') },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: ':catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') }
    ]
  }
]

export default routes
