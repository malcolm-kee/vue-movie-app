import Vue from 'vue';
import Vuex from 'vuex';
import { meta } from './modules/meta';
import { movie } from './modules/movie';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    movie,
    meta,
  },
  strict: true,
});
