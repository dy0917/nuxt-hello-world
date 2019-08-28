export default {
  state: {
    counter: 0,
    hello: 'salut I am module api'
  },
  actions: {},
  mutations: {
    increment(state:any) {
      state.counter++;
    }
  },
  getters: {}
};
