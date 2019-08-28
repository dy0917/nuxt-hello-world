import Vuex from "vuex";
import counter from "./counter";
console.log("store index");

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      counter
    }
  });
};

export default createStore;
