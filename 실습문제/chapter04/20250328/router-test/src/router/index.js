import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import VideoPlayer from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        // left: HomeLeft,
      },
    },
    { path: '/about', name: 'about', component: About },
    {
      path: '/members',
      name: 'members',
      components: {
        default: Members,
        // left: MembersLeft,
        // footer: MembersFooter,
      },
    },
    { path: '/members/:id', name: 'members/id', component: MemberInfo },
    {
      path: '/songs',
      name: 'videos',
      component: Videos,
      children: [{ path: ':id', name: 'videos/id', component: VideoPlayer }],
    },
  ],
});
export default router;
