import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
