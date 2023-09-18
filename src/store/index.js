import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  //state取得
  getters: {},
  //state変更
  mutations: {
    save(state, newMemo) {
      newMemo.id = ++state.count;
      state.memos.unshift(newMemo);
    },
  },
  actions: {},
  modules: {},
});
