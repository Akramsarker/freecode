export default {
  state: {
    contacts: [],
  },
  getters: {
    dummy: (state) => {
      return state.contacts
    },
  },
  mutations: {
    setContacts(state, payload) {
      state.contacts = payload
    },
  },
  actions: {
    fetchContacts({ commit }) {
      // here we will write api call code
    },
  },
}
