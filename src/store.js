import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Supposons que nous ayons une API universelle retournant
// des Promesses (« Promise ») et ignorons les détails de l'implémentation
import { fetchItem } from './api'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }, id) {
        // retournant la Promesse via `store.dispatch()`, nous savons
        // quand les données ont été préchargées
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}