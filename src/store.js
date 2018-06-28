import Vue from 'vue'
import Vuex from 'vuex'
import slug from './Utils/slug-mixin'

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
                    let item = state.items.find(item => { 
                        if(!item.slug){
                            if (slug.methods.slugify(item.title) === state.title) { 
                                return item
                            } 
                        }
                        else {
                            if (item.slug === state.title) { 
                                return item
                            } 
                        }
               
                    })
                    return item;
                }
            }
        }
    })
}