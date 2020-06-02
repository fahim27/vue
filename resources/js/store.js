import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


    const state = {
        user:""

    }


    const getters = {
    user(state) {
        return state.user
    },

    }

    const actions = {}

    const mutations = {
        user(state,resp){
            state.user=resp.data.name
        }
    }

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
})

global.store = store

export default store
