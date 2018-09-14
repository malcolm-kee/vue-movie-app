import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import About from '../components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/popular',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
});
