import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import TabRoot from '../components/TabRoot.vue'


const routes = [
  { 
    path: '/', 
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabRoot,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        name: 'home'
      },
      {
        path: 'respond',
        component: () => import('@/views/Respond.vue'),
        name: 'respond'
      },
      {
        path: 'venue',
        component: () => import('@/views/Venue.vue'),
        name: 'venue'
      }
    ]
  },
  {
    path: '/privacy',
    components: () => import('@/views/Privacy.vue'),
    name: 'privacy'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
