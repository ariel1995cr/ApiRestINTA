
const routes = [
  {
    path: '',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Login.vue') },
      { path: 'reset-password/:token', component: () => import('pages/RecuperarContrasena.vue'), props: (route) => ({ email: route.query.email }) }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'usuarios', component: () => import('pages/Usuarios/Index.vue') },
      { path: 'contacto', component: () => import('pages/Contacto') },
      { path: 'estacion/:id', name: 'verEstacion', component: () => import('pages/Estaciones/verEstacion.vue'), props: true },
      { path: 'estacion/:id/exportar', name: 'exportar', component: () => import('pages/Estaciones/Exportar.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
