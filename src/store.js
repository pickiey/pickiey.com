import { createStore } from 'vuex'
//import createPersistedState from "vuex-persistedstate"
import isMobile from 'ismobilejs'

const state = {
    isMobile  : isMobile(window.navigator).any,
    started   : false,
    painted   : false,
    completed : false,
    killed    : false,
    loaded    : false,
}

const getters = {
    isMobile  : state => state.isMobile,
    started   : state => state.started,
    painted   : state => state.painted,
    completed : state => state.completed,
    killed    : state => state.killed,
    loaded    : state => state.loaded
}

const mutations = {
    start     : state => { state.started   = true },
    paint     : state => { state.painted   = true },
    complete  : state => { state.completed = true },
    kill      : state => { state.killed    = true },
    setLoaded : state => { state.loaded    = true }
}

const storeOptions = {
    state     : state,
    getters   : getters,
    mutations : mutations
}

export const store = createStore(storeOptions)
