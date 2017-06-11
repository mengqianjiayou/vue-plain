import * as types from './types'
export const actions = {
  //添加计划
  [types.ADD_PLAN]({commit},list){//list 代表要添加的内容
      let plan = {
        avatar:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1494417824&di=0805791979b1905635cb1291fcb5e97b&src=http://img02.tooopen.com/images/20150605/tooopen_sy_128670487587.jpg',
        name:'孟倩',
        ...list
      };
      commit(types.ADD_PLAN,plan);
  },
  //增加总时间
  [types.INCREMENT_TOTALTIME]({commit},time){
      commit(types.INCREMENT_TOTALTIME,time);
  },
  //移除计划
  [types.REMOVE_PLAN]({commit},curlist){
      commit(types.REMOVE_PLAN,curlist);
  },
  //减少总时间
  [types.DECREMENT_TOTALTIME]({commit},time){
      commit(types.DECREMENT_TOTALTIME,time);
  }
};
