import { createStore } from 'vuex'
//import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state() {
        return {
            var1: 'hoge',
            painted: false
        }
    },

    mutations: {
        func1: (state) => {
            state.var1 = 'foo'
        }
    }
})
