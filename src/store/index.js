import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  //state取得
  getters: {
    hasMemos: (state) => {
      return state.memos.length;
    },
    memos: (state) => {
      return state.memos;
    },
    memo: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    },
  },
  //state変更
  mutations: {
    save(state, newMemo) {
      if (newMemo.id) {
        let edit = state.memos.find((memo) => memo.id === newMemo.id);
        edit.title = newMemo.title;
        edit.content = newMemo.content;
      } else {
        newMemo.id = ++state.count;
        state.memos.unshift(newMemo);
      }
    },
  },
  actions: {},
  modules: {},
});
