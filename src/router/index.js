import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../components/pages/index';
import PostPage from '../components/pages/post';
import TagsPage from '../components/pages/tags';
import AboutPage from '../components/pages/about';
import ArchivePage from '../components/pages/archive';
import TagPage from '../components/pages/tag-detail';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/index',
    name: 'home',
    component: IndexPage,
  },
    {
      path: '/post',
      name: 'post',
      component: PostPage,
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsPage,
    },
    // 动态路由匹配, 以下的路由规则可以匹配 /tags/webpack | /tags/html 等路由
    // 然后用TagPage组件去进行页面的渲染
    {
      path: '/tags/:tag',
      name: 'tagDetail',
      component: TagPage,
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchivePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});
