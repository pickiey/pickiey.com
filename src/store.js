import { createStore } from 'vuex'
//import createPersistedState from "vuex-persistedstate"



// とりあえず バックグラウンドの分だけ
export const store = createStore({
    state() {
        return {
            started   : false,
            painted   : false,
            completed : false,
            killed    : false
        }
    },

    getters : {
        started    : state => state.started,
        painted    : state => state.painted,
        completed  : state => state.completed,
        killed     : state => state.killed
    },

    mutations : {
        start      : state  => { state.started   = true },
        paint      : state  => { state.painted   = true },
        complete   : state  => { state.completed = true },
        kill       : state  => { state.killed    = true }
    }
})
