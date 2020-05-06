import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About.vue';
import HelloWorld from '../components/HelloWorld.vue';
import MovieDetails from '../components/MovieDetails.vue';
import MovieList from '../components/MovieList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/popular',
      name: 'MovieList',
      component: MovieList,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails,
    },
  ],
});
