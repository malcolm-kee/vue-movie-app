import Vue from 'vue';
import Vuex from 'vuex';
import { movie } from './modules/movie';
import { meta } from './modules/meta';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    movie,
    meta
  }
});
