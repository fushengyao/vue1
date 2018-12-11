export default {
  login: {
    namespaced: true,
    state: {
      isLogin: false,      //是否登录
    },
    getters: {

    },
    mutations: {
      changeIsLogin(state, val) {
        state.isLogin = val;
      }
    },
    actions: {
      //异步操作
      asyncChangeIsLogin(context) {
        context.commit("changeIsLogin", true);
      }
    }
  }
}
