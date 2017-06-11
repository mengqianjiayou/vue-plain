//计算lists有没有数据
export const getters = {
  isShow(state){
    return Boolean(state.lists.length);
  }
};
