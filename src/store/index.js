import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    shop_list: [
      {id: 1, name: "a"},
      {id: 2, name: "b"},
      {id: 3, name: "c"},
      {id: 4, name: "d"},
    ]
  },
  getters: {
    reset_shop_list: state => {
      return state.shop_list.map(function (i) {
        return Object.assign(i, {text: Math.random().toFixed(2)})
      })
    }
  },
  mutations: {
    increment(state) {
      console.log(state);
    }
  },
  modules: {
    foo: {
      namespaced: true,
      state: {
        a: 1,
        b: 2
      },
      getters: {
        fooGet:(state, getters, rootState, rootGetters) => {
          console.log(state, getters, rootState, rootGetters);
          return state.a;
        }
      },
      actions: {
        someAction({commit, dispatch, getters, rootGetters, rootState, state}){

        }
      }
    }
  }
  // getters,
  // actions,
  // mutations
})
