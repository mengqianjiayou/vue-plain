import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
//默认应该把storage的数据赋予给state
const state = getStorage() ||{
  totalTime:0,//总时间
  lists:[],//每个计划的数据
};
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {getStorage} from './local';
export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
