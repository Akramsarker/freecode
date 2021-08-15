import Vuex from 'vuex'
import contactsModule from './modules/contacts'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      user: null,
    },
    getters: {
      activeUser: (state) => {
        return state.user
      },
      translations: (state) => {
        return state.siteText[state.language.toLowerCase()]
      },
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
    },
    actions: {
      autoSignIn({ commit }, payload) {
        commit('setUser', payload)
      },
    },
    modules: {
      contacts: {
        namespaced: true,
        ...contactsModule,
      },
    },
  })
}

export default createStore
