import { createStore } from 'vuex'

export default createStore({
  state: {
    navBarTitle: 'Daan Wijns'
  },
  mutations: {
    SET_NAVBAR_TITLE(state, title: string) {
      state.navBarTitle = title
    }
  },
  actions: {},
  modules: {}
})
