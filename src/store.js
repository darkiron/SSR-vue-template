import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Supposons que nous ayons une API universelle retournant
// des Promesses (« Promise ») et ignorons les détails de l'implémentation
import { createApi } from './api'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {},
      title: ''
    },
    actions: {
      fetchItems ({ commit }, url) {
        return createApi(url).then(items => {
          commit('setItems', { items })
        })
      },
      pushTitle ({ commit }, title) {
        commit('setTitle', { title })
      }

    },
    mutations: {
      setItems (state, { items }) {
        state.items = items
      },
      setTitle (state, { title }) {
        state.title = title
      }
    }, 
    getters: {
      getCurrent (state) {
        if (state.items.length > 1) {
          return state.items.find(item => { if (item.title === state.title) { return item} })
        }
        
      }

    }
  })
}