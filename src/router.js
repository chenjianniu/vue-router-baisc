import { createRouter, createWebHashHistory } from 'vue-router'
import A from './views/view-basic/A.vue'
import User from './views/view-basic/User.vue'
import UserProfile from './views/view-basic/UserProfile.vue'
import Url from './views/view-basic/Url.vue'
import Mu1 from './views/view-multi/Mu1.vue'
import Mu2 from './views/view-multi/Mu2.vue'
import Mu3 from './views/view-multi/Mu3.vue'
import Menu from './views/view-menu/Menu.vue'
import MenuEmail from './views/view-menu/MenuEmail.vue'
import MenuProfile1 from './views/view-menu/MenuProfile1.vue'
import MenuProfile2 from './views/view-menu/MenuProfile2.vue'
import NotFound from './views/view-not-found/NotFound.vue'

const routes = [
  {
    path: '/a', // /a
    component: A
  },
  {
    path: '/b',  // /b
    component: { template: '<div>vue-B-string</div>' }
  },
  {
    path: '',  // /
    redirect: 'B'
  },
  {
    path: '/id/:id/name/:name', // /id/1/name/zhangsan
    component: User,
    children: [{
      path: 'userProfile', // /id/1/name/zhangsan/userProfile
      component: UserProfile
    }]
  },
  {
    path: '/url/:url', // /id/1/name/zhangsan
    name: 'url',
    component: Url,
  },
  {
    path: '/multi/asc',
    components: {
      default: Mu1,
      mu2: Mu2,
      mu3: Mu3,
    }
  },
  {
    path: '/multi/desc',
    components: {
      default: Mu3,
      mu2: Mu2,
      mu3: Mu1,
    }
  },
  {
    path: '/menu',
    component: Menu,
    children: [
      {
      path: 'email',
      component: MenuEmail,
      },
      {
        path: 'profile',
        components: {
          default: MenuProfile1,
          menuProfile2: MenuProfile2,
        },
      },
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})