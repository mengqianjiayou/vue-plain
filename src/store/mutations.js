import * as types from './types';
import {setStorage} from './local';
export const mutations = {
  //state代表当前容器的状态
    [types.ADD_PLAN](state,list){
        state.lists.push(list);
        setStorage(state);
    },
    [types.INCREMENT_TOTALTIME](state,time){
        state.totalTime += time;
        setStorage(state);
    },
    [types.DECREMENT_TOTALTIME](state,time){
        state.totalTime -= time;
        setStorage(state);
    },
    [types.REMOVE_PLAN](state,cur){
        state.lists = state.lists.filter(item=>item!=cur);
        setStorage(state);
    }
};
